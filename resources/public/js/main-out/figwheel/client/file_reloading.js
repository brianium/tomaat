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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37659_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37659_SHARP_));
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
var seq__37660 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37661 = null;
var count__37662 = (0);
var i__37663 = (0);
while(true){
if((i__37663 < count__37662)){
var n = cljs.core._nth.call(null,chunk__37661,i__37663);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37664 = seq__37660;
var G__37665 = chunk__37661;
var G__37666 = count__37662;
var G__37667 = (i__37663 + (1));
seq__37660 = G__37664;
chunk__37661 = G__37665;
count__37662 = G__37666;
i__37663 = G__37667;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__37660);
if(temp__5278__auto__){
var seq__37660__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37660__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__37660__$1);
var G__37668 = cljs.core.chunk_rest.call(null,seq__37660__$1);
var G__37669 = c__31003__auto__;
var G__37670 = cljs.core.count.call(null,c__31003__auto__);
var G__37671 = (0);
seq__37660 = G__37668;
chunk__37661 = G__37669;
count__37662 = G__37670;
i__37663 = G__37671;
continue;
} else {
var n = cljs.core.first.call(null,seq__37660__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37672 = cljs.core.next.call(null,seq__37660__$1);
var G__37673 = null;
var G__37674 = (0);
var G__37675 = (0);
seq__37660 = G__37672;
chunk__37661 = G__37673;
count__37662 = G__37674;
i__37663 = G__37675;
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
return cljs.core.some.call(null,(function (p__37678){
var vec__37679 = p__37678;
var _ = cljs.core.nth.call(null,vec__37679,(0),null);
var v = cljs.core.nth.call(null,vec__37679,(1),null);
var and__30060__auto__ = v;
if(cljs.core.truth_(and__30060__auto__)){
return v.call(null,dep);
} else {
return and__30060__auto__;
}
}),cljs.core.filter.call(null,(function (p__37685){
var vec__37686 = p__37685;
var k = cljs.core.nth.call(null,vec__37686,(0),null);
var v = cljs.core.nth.call(null,vec__37686,(1),null);
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

var seq__37734_37759 = cljs.core.seq.call(null,deps);
var chunk__37735_37760 = null;
var count__37736_37761 = (0);
var i__37737_37762 = (0);
while(true){
if((i__37737_37762 < count__37736_37761)){
var dep_37763 = cljs.core._nth.call(null,chunk__37735_37760,i__37737_37762);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_37763;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37763));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37763,(depth + (1)),state);
} else {
}

var G__37764 = seq__37734_37759;
var G__37765 = chunk__37735_37760;
var G__37766 = count__37736_37761;
var G__37767 = (i__37737_37762 + (1));
seq__37734_37759 = G__37764;
chunk__37735_37760 = G__37765;
count__37736_37761 = G__37766;
i__37737_37762 = G__37767;
continue;
} else {
var temp__5278__auto___37768 = cljs.core.seq.call(null,seq__37734_37759);
if(temp__5278__auto___37768){
var seq__37734_37769__$1 = temp__5278__auto___37768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37734_37769__$1)){
var c__31003__auto___37770 = cljs.core.chunk_first.call(null,seq__37734_37769__$1);
var G__37771 = cljs.core.chunk_rest.call(null,seq__37734_37769__$1);
var G__37772 = c__31003__auto___37770;
var G__37773 = cljs.core.count.call(null,c__31003__auto___37770);
var G__37774 = (0);
seq__37734_37759 = G__37771;
chunk__37735_37760 = G__37772;
count__37736_37761 = G__37773;
i__37737_37762 = G__37774;
continue;
} else {
var dep_37775 = cljs.core.first.call(null,seq__37734_37769__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_37775;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37775));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37775,(depth + (1)),state);
} else {
}

var G__37776 = cljs.core.next.call(null,seq__37734_37769__$1);
var G__37777 = null;
var G__37778 = (0);
var G__37779 = (0);
seq__37734_37759 = G__37776;
chunk__37735_37760 = G__37777;
count__37736_37761 = G__37778;
i__37737_37762 = G__37779;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37755){
var vec__37756 = p__37755;
var seq__37757 = cljs.core.seq.call(null,vec__37756);
var first__37758 = cljs.core.first.call(null,seq__37757);
var seq__37757__$1 = cljs.core.next.call(null,seq__37757);
var x = first__37758;
var xs = seq__37757__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37756,seq__37757,first__37758,seq__37757__$1,x,xs,get_deps__$1){
return (function (p1__37697_SHARP_){
return clojure.set.difference.call(null,p1__37697_SHARP_,x);
});})(vec__37756,seq__37757,first__37758,seq__37757__$1,x,xs,get_deps__$1))
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
var seq__37788 = cljs.core.seq.call(null,provides);
var chunk__37789 = null;
var count__37790 = (0);
var i__37791 = (0);
while(true){
if((i__37791 < count__37790)){
var prov = cljs.core._nth.call(null,chunk__37789,i__37791);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37792_37806 = cljs.core.seq.call(null,requires);
var chunk__37793_37807 = null;
var count__37794_37808 = (0);
var i__37795_37809 = (0);
while(true){
if((i__37795_37809 < count__37794_37808)){
var req_37810 = cljs.core._nth.call(null,chunk__37793_37807,i__37795_37809);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37810,prov);

var G__37811 = seq__37792_37806;
var G__37812 = chunk__37793_37807;
var G__37813 = count__37794_37808;
var G__37814 = (i__37795_37809 + (1));
seq__37792_37806 = G__37811;
chunk__37793_37807 = G__37812;
count__37794_37808 = G__37813;
i__37795_37809 = G__37814;
continue;
} else {
var temp__5278__auto___37815 = cljs.core.seq.call(null,seq__37792_37806);
if(temp__5278__auto___37815){
var seq__37792_37816__$1 = temp__5278__auto___37815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37792_37816__$1)){
var c__31003__auto___37817 = cljs.core.chunk_first.call(null,seq__37792_37816__$1);
var G__37818 = cljs.core.chunk_rest.call(null,seq__37792_37816__$1);
var G__37819 = c__31003__auto___37817;
var G__37820 = cljs.core.count.call(null,c__31003__auto___37817);
var G__37821 = (0);
seq__37792_37806 = G__37818;
chunk__37793_37807 = G__37819;
count__37794_37808 = G__37820;
i__37795_37809 = G__37821;
continue;
} else {
var req_37822 = cljs.core.first.call(null,seq__37792_37816__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37822,prov);

var G__37823 = cljs.core.next.call(null,seq__37792_37816__$1);
var G__37824 = null;
var G__37825 = (0);
var G__37826 = (0);
seq__37792_37806 = G__37823;
chunk__37793_37807 = G__37824;
count__37794_37808 = G__37825;
i__37795_37809 = G__37826;
continue;
}
} else {
}
}
break;
}

var G__37829 = seq__37788;
var G__37830 = chunk__37789;
var G__37831 = count__37790;
var G__37832 = (i__37791 + (1));
seq__37788 = G__37829;
chunk__37789 = G__37830;
count__37790 = G__37831;
i__37791 = G__37832;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__37788);
if(temp__5278__auto__){
var seq__37788__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37788__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__37788__$1);
var G__37848 = cljs.core.chunk_rest.call(null,seq__37788__$1);
var G__37849 = c__31003__auto__;
var G__37850 = cljs.core.count.call(null,c__31003__auto__);
var G__37851 = (0);
seq__37788 = G__37848;
chunk__37789 = G__37849;
count__37790 = G__37850;
i__37791 = G__37851;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37788__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37799_37853 = cljs.core.seq.call(null,requires);
var chunk__37800_37854 = null;
var count__37801_37855 = (0);
var i__37802_37856 = (0);
while(true){
if((i__37802_37856 < count__37801_37855)){
var req_37857 = cljs.core._nth.call(null,chunk__37800_37854,i__37802_37856);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37857,prov);

var G__37859 = seq__37799_37853;
var G__37860 = chunk__37800_37854;
var G__37861 = count__37801_37855;
var G__37862 = (i__37802_37856 + (1));
seq__37799_37853 = G__37859;
chunk__37800_37854 = G__37860;
count__37801_37855 = G__37861;
i__37802_37856 = G__37862;
continue;
} else {
var temp__5278__auto___37865__$1 = cljs.core.seq.call(null,seq__37799_37853);
if(temp__5278__auto___37865__$1){
var seq__37799_37867__$1 = temp__5278__auto___37865__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37799_37867__$1)){
var c__31003__auto___37868 = cljs.core.chunk_first.call(null,seq__37799_37867__$1);
var G__37869 = cljs.core.chunk_rest.call(null,seq__37799_37867__$1);
var G__37870 = c__31003__auto___37868;
var G__37871 = cljs.core.count.call(null,c__31003__auto___37868);
var G__37872 = (0);
seq__37799_37853 = G__37869;
chunk__37800_37854 = G__37870;
count__37801_37855 = G__37871;
i__37802_37856 = G__37872;
continue;
} else {
var req_37874 = cljs.core.first.call(null,seq__37799_37867__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37874,prov);

var G__37875 = cljs.core.next.call(null,seq__37799_37867__$1);
var G__37876 = null;
var G__37877 = (0);
var G__37878 = (0);
seq__37799_37853 = G__37875;
chunk__37800_37854 = G__37876;
count__37801_37855 = G__37877;
i__37802_37856 = G__37878;
continue;
}
} else {
}
}
break;
}

var G__37879 = cljs.core.next.call(null,seq__37788__$1);
var G__37880 = null;
var G__37881 = (0);
var G__37882 = (0);
seq__37788 = G__37879;
chunk__37789 = G__37880;
count__37790 = G__37881;
i__37791 = G__37882;
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
var seq__37883_37887 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37884_37888 = null;
var count__37885_37889 = (0);
var i__37886_37890 = (0);
while(true){
if((i__37886_37890 < count__37885_37889)){
var ns_37891 = cljs.core._nth.call(null,chunk__37884_37888,i__37886_37890);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37891);

var G__37892 = seq__37883_37887;
var G__37893 = chunk__37884_37888;
var G__37894 = count__37885_37889;
var G__37895 = (i__37886_37890 + (1));
seq__37883_37887 = G__37892;
chunk__37884_37888 = G__37893;
count__37885_37889 = G__37894;
i__37886_37890 = G__37895;
continue;
} else {
var temp__5278__auto___37896 = cljs.core.seq.call(null,seq__37883_37887);
if(temp__5278__auto___37896){
var seq__37883_37897__$1 = temp__5278__auto___37896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37883_37897__$1)){
var c__31003__auto___37898 = cljs.core.chunk_first.call(null,seq__37883_37897__$1);
var G__37899 = cljs.core.chunk_rest.call(null,seq__37883_37897__$1);
var G__37900 = c__31003__auto___37898;
var G__37901 = cljs.core.count.call(null,c__31003__auto___37898);
var G__37902 = (0);
seq__37883_37887 = G__37899;
chunk__37884_37888 = G__37900;
count__37885_37889 = G__37901;
i__37886_37890 = G__37902;
continue;
} else {
var ns_37903 = cljs.core.first.call(null,seq__37883_37897__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37903);

var G__37905 = cljs.core.next.call(null,seq__37883_37897__$1);
var G__37906 = null;
var G__37907 = (0);
var G__37908 = (0);
seq__37883_37887 = G__37905;
chunk__37884_37888 = G__37906;
count__37885_37889 = G__37907;
i__37886_37890 = G__37908;
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
var G__37913__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37914__i = 0, G__37914__a = new Array(arguments.length -  0);
while (G__37914__i < G__37914__a.length) {G__37914__a[G__37914__i] = arguments[G__37914__i + 0]; ++G__37914__i;}
  args = new cljs.core.IndexedSeq(G__37914__a,0,null);
} 
return G__37913__delegate.call(this,args);};
G__37913.cljs$lang$maxFixedArity = 0;
G__37913.cljs$lang$applyTo = (function (arglist__37915){
var args = cljs.core.seq(arglist__37915);
return G__37913__delegate(args);
});
G__37913.cljs$core$IFn$_invoke$arity$variadic = G__37913__delegate;
return G__37913;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37916_SHARP_,p2__37917_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37916_SHARP_)].join('')),p2__37917_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37919_SHARP_,p2__37920_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37919_SHARP_)].join(''),p2__37920_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37923 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37923.addCallback(((function (G__37923){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37923))
);

G__37923.addErrback(((function (G__37923){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37923))
);

return G__37923;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37924){if((e37924 instanceof Error)){
var e = e37924;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37924;

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
}catch (e37932){if((e37932 instanceof Error)){
var e = e37932;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37932;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37934 = cljs.core._EQ_;
var expr__37935 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37934.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37935))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37934.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37935))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37934.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37935))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37934,expr__37935){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37934,expr__37935))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37939,callback){
var map__37940 = p__37939;
var map__37940__$1 = ((((!((map__37940 == null)))?((((map__37940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37940):map__37940);
var file_msg = map__37940__$1;
var request_url = cljs.core.get.call(null,map__37940__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30072__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37940,map__37940__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37940,map__37940__$1,file_msg,request_url))
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
return (function (state_37984){
var state_val_37985 = (state_37984[(1)]);
if((state_val_37985 === (7))){
var inst_37980 = (state_37984[(2)]);
var state_37984__$1 = state_37984;
var statearr_37986_38019 = state_37984__$1;
(statearr_37986_38019[(2)] = inst_37980);

(statearr_37986_38019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37985 === (1))){
var state_37984__$1 = state_37984;
var statearr_37987_38021 = state_37984__$1;
(statearr_37987_38021[(2)] = null);

(statearr_37987_38021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37985 === (4))){
var inst_37948 = (state_37984[(7)]);
var inst_37948__$1 = (state_37984[(2)]);
var state_37984__$1 = (function (){var statearr_37988 = state_37984;
(statearr_37988[(7)] = inst_37948__$1);

return statearr_37988;
})();
if(cljs.core.truth_(inst_37948__$1)){
var statearr_37989_38025 = state_37984__$1;
(statearr_37989_38025[(1)] = (5));

} else {
var statearr_37990_38026 = state_37984__$1;
(statearr_37990_38026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37985 === (15))){
var inst_37965 = (state_37984[(8)]);
var inst_37962 = (state_37984[(9)]);
var inst_37967 = inst_37965.call(null,inst_37962);
var state_37984__$1 = state_37984;
var statearr_37991_38027 = state_37984__$1;
(statearr_37991_38027[(2)] = inst_37967);

(statearr_37991_38027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37985 === (13))){
var inst_37974 = (state_37984[(2)]);
var state_37984__$1 = state_37984;
var statearr_37994_38028 = state_37984__$1;
(statearr_37994_38028[(2)] = inst_37974);

(statearr_37994_38028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37985 === (6))){
var state_37984__$1 = state_37984;
var statearr_37996_38029 = state_37984__$1;
(statearr_37996_38029[(2)] = null);

(statearr_37996_38029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37985 === (17))){
var inst_37971 = (state_37984[(2)]);
var state_37984__$1 = state_37984;
var statearr_37997_38030 = state_37984__$1;
(statearr_37997_38030[(2)] = inst_37971);

(statearr_37997_38030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37985 === (3))){
var inst_37982 = (state_37984[(2)]);
var state_37984__$1 = state_37984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37984__$1,inst_37982);
} else {
if((state_val_37985 === (12))){
var state_37984__$1 = state_37984;
var statearr_37998_38031 = state_37984__$1;
(statearr_37998_38031[(2)] = null);

(statearr_37998_38031[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37985 === (2))){
var state_37984__$1 = state_37984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37984__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37985 === (11))){
var inst_37953 = (state_37984[(10)]);
var inst_37960 = figwheel.client.file_reloading.blocking_load.call(null,inst_37953);
var state_37984__$1 = state_37984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37984__$1,(14),inst_37960);
} else {
if((state_val_37985 === (9))){
var inst_37953 = (state_37984[(10)]);
var state_37984__$1 = state_37984;
if(cljs.core.truth_(inst_37953)){
var statearr_37999_38032 = state_37984__$1;
(statearr_37999_38032[(1)] = (11));

} else {
var statearr_38000_38033 = state_37984__$1;
(statearr_38000_38033[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37985 === (5))){
var inst_37948 = (state_37984[(7)]);
var inst_37954 = (state_37984[(11)]);
var inst_37953 = cljs.core.nth.call(null,inst_37948,(0),null);
var inst_37954__$1 = cljs.core.nth.call(null,inst_37948,(1),null);
var state_37984__$1 = (function (){var statearr_38001 = state_37984;
(statearr_38001[(10)] = inst_37953);

(statearr_38001[(11)] = inst_37954__$1);

return statearr_38001;
})();
if(cljs.core.truth_(inst_37954__$1)){
var statearr_38002_38034 = state_37984__$1;
(statearr_38002_38034[(1)] = (8));

} else {
var statearr_38003_38036 = state_37984__$1;
(statearr_38003_38036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37985 === (14))){
var inst_37965 = (state_37984[(8)]);
var inst_37953 = (state_37984[(10)]);
var inst_37962 = (state_37984[(2)]);
var inst_37963 = console.log("Loading!",inst_37953);
var inst_37964 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37965__$1 = cljs.core.get.call(null,inst_37964,inst_37953);
var state_37984__$1 = (function (){var statearr_38005 = state_37984;
(statearr_38005[(8)] = inst_37965__$1);

(statearr_38005[(12)] = inst_37963);

(statearr_38005[(9)] = inst_37962);

return statearr_38005;
})();
if(cljs.core.truth_(inst_37965__$1)){
var statearr_38007_38038 = state_37984__$1;
(statearr_38007_38038[(1)] = (15));

} else {
var statearr_38009_38039 = state_37984__$1;
(statearr_38009_38039[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37985 === (16))){
var inst_37962 = (state_37984[(9)]);
var inst_37969 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37962);
var state_37984__$1 = state_37984;
var statearr_38010_38040 = state_37984__$1;
(statearr_38010_38040[(2)] = inst_37969);

(statearr_38010_38040[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37985 === (10))){
var inst_37976 = (state_37984[(2)]);
var state_37984__$1 = (function (){var statearr_38011 = state_37984;
(statearr_38011[(13)] = inst_37976);

return statearr_38011;
})();
var statearr_38012_38041 = state_37984__$1;
(statearr_38012_38041[(2)] = null);

(statearr_38012_38041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37985 === (8))){
var inst_37954 = (state_37984[(11)]);
var inst_37956 = console.log("Evaling!",inst_37954);
var inst_37957 = eval(inst_37954);
var state_37984__$1 = (function (){var statearr_38013 = state_37984;
(statearr_38013[(14)] = inst_37956);

return statearr_38013;
})();
var statearr_38014_38044 = state_37984__$1;
(statearr_38014_38044[(2)] = inst_37957);

(statearr_38014_38044[(1)] = (10));


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
var statearr_38015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38015[(0)] = figwheel$client$file_reloading$state_machine__33281__auto__);

(statearr_38015[(1)] = (1));

return statearr_38015;
});
var figwheel$client$file_reloading$state_machine__33281__auto____1 = (function (state_37984){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_37984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e38016){if((e38016 instanceof Object)){
var ex__33284__auto__ = e38016;
var statearr_38017_38047 = state_37984;
(statearr_38017_38047[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38048 = state_37984;
state_37984 = G__38048;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33281__auto__ = function(state_37984){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33281__auto____1.call(this,state_37984);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33281__auto____0;
figwheel$client$file_reloading$state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33281__auto____1;
return figwheel$client$file_reloading$state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__))
})();
var state__33667__auto__ = (function (){var statearr_38018 = f__33666__auto__.call(null);
(statearr_38018[(6)] = c__33665__auto__);

return statearr_38018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__))
);

return c__33665__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__38050 = arguments.length;
switch (G__38050) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38057,callback){
var map__38058 = p__38057;
var map__38058__$1 = ((((!((map__38058 == null)))?((((map__38058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38058):map__38058);
var file_msg = map__38058__$1;
var namespace = cljs.core.get.call(null,map__38058__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38058,map__38058__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38058,map__38058__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__38060){
var map__38061 = p__38060;
var map__38061__$1 = ((((!((map__38061 == null)))?((((map__38061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38061):map__38061);
var file_msg = map__38061__$1;
var namespace = cljs.core.get.call(null,map__38061__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38082){
var map__38083 = p__38082;
var map__38083__$1 = ((((!((map__38083 == null)))?((((map__38083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38083):map__38083);
var file_msg = map__38083__$1;
var namespace = cljs.core.get.call(null,map__38083__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38092,callback){
var map__38093 = p__38092;
var map__38093__$1 = ((((!((map__38093 == null)))?((((map__38093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38093):map__38093);
var file_msg = map__38093__$1;
var request_url = cljs.core.get.call(null,map__38093__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38093__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33665__auto___38163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto___38163,out){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto___38163,out){
return (function (state_38130){
var state_val_38131 = (state_38130[(1)]);
if((state_val_38131 === (1))){
var inst_38103 = cljs.core.seq.call(null,files);
var inst_38104 = cljs.core.first.call(null,inst_38103);
var inst_38105 = cljs.core.next.call(null,inst_38103);
var inst_38106 = files;
var state_38130__$1 = (function (){var statearr_38132 = state_38130;
(statearr_38132[(7)] = inst_38104);

(statearr_38132[(8)] = inst_38106);

(statearr_38132[(9)] = inst_38105);

return statearr_38132;
})();
var statearr_38133_38164 = state_38130__$1;
(statearr_38133_38164[(2)] = null);

(statearr_38133_38164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38131 === (2))){
var inst_38112 = (state_38130[(10)]);
var inst_38106 = (state_38130[(8)]);
var inst_38111 = cljs.core.seq.call(null,inst_38106);
var inst_38112__$1 = cljs.core.first.call(null,inst_38111);
var inst_38113 = cljs.core.next.call(null,inst_38111);
var inst_38114 = (inst_38112__$1 == null);
var inst_38115 = cljs.core.not.call(null,inst_38114);
var state_38130__$1 = (function (){var statearr_38134 = state_38130;
(statearr_38134[(11)] = inst_38113);

(statearr_38134[(10)] = inst_38112__$1);

return statearr_38134;
})();
if(inst_38115){
var statearr_38135_38165 = state_38130__$1;
(statearr_38135_38165[(1)] = (4));

} else {
var statearr_38136_38166 = state_38130__$1;
(statearr_38136_38166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38131 === (3))){
var inst_38128 = (state_38130[(2)]);
var state_38130__$1 = state_38130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38130__$1,inst_38128);
} else {
if((state_val_38131 === (4))){
var inst_38112 = (state_38130[(10)]);
var inst_38117 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38112);
var state_38130__$1 = state_38130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38130__$1,(7),inst_38117);
} else {
if((state_val_38131 === (5))){
var inst_38124 = cljs.core.async.close_BANG_.call(null,out);
var state_38130__$1 = state_38130;
var statearr_38149_38168 = state_38130__$1;
(statearr_38149_38168[(2)] = inst_38124);

(statearr_38149_38168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38131 === (6))){
var inst_38126 = (state_38130[(2)]);
var state_38130__$1 = state_38130;
var statearr_38150_38170 = state_38130__$1;
(statearr_38150_38170[(2)] = inst_38126);

(statearr_38150_38170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38131 === (7))){
var inst_38113 = (state_38130[(11)]);
var inst_38119 = (state_38130[(2)]);
var inst_38120 = cljs.core.async.put_BANG_.call(null,out,inst_38119);
var inst_38106 = inst_38113;
var state_38130__$1 = (function (){var statearr_38151 = state_38130;
(statearr_38151[(12)] = inst_38120);

(statearr_38151[(8)] = inst_38106);

return statearr_38151;
})();
var statearr_38153_38171 = state_38130__$1;
(statearr_38153_38171[(2)] = null);

(statearr_38153_38171[(1)] = (2));


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
});})(c__33665__auto___38163,out))
;
return ((function (switch__33280__auto__,c__33665__auto___38163,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____0 = (function (){
var statearr_38155 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38155[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__);

(statearr_38155[(1)] = (1));

return statearr_38155;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____1 = (function (state_38130){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_38130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e38156){if((e38156 instanceof Object)){
var ex__33284__auto__ = e38156;
var statearr_38157_38172 = state_38130;
(statearr_38157_38172[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38173 = state_38130;
state_38130 = G__38173;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__ = function(state_38130){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____1.call(this,state_38130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto___38163,out))
})();
var state__33667__auto__ = (function (){var statearr_38161 = f__33666__auto__.call(null);
(statearr_38161[(6)] = c__33665__auto___38163);

return statearr_38161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto___38163,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38174,opts){
var map__38175 = p__38174;
var map__38175__$1 = ((((!((map__38175 == null)))?((((map__38175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38175):map__38175);
var eval_body = cljs.core.get.call(null,map__38175__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38175__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e38177){var e = e38177;
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
return (function (p1__38178_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38178_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__38179){
var vec__38180 = p__38179;
var k = cljs.core.nth.call(null,vec__38180,(0),null);
var v = cljs.core.nth.call(null,vec__38180,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38183){
var vec__38184 = p__38183;
var k = cljs.core.nth.call(null,vec__38184,(0),null);
var v = cljs.core.nth.call(null,vec__38184,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38190,p__38191){
var map__38192 = p__38190;
var map__38192__$1 = ((((!((map__38192 == null)))?((((map__38192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38192):map__38192);
var opts = map__38192__$1;
var before_jsload = cljs.core.get.call(null,map__38192__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38192__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38192__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38193 = p__38191;
var map__38193__$1 = ((((!((map__38193 == null)))?((((map__38193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38193):map__38193);
var msg = map__38193__$1;
var files = cljs.core.get.call(null,map__38193__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38193__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38193__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33666__auto__ = (function (){var switch__33280__auto__ = ((function (c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38347){
var state_val_38348 = (state_38347[(1)]);
if((state_val_38348 === (7))){
var inst_38209 = (state_38347[(7)]);
var inst_38207 = (state_38347[(8)]);
var inst_38208 = (state_38347[(9)]);
var inst_38210 = (state_38347[(10)]);
var inst_38215 = cljs.core._nth.call(null,inst_38208,inst_38210);
var inst_38216 = figwheel.client.file_reloading.eval_body.call(null,inst_38215,opts);
var inst_38217 = (inst_38210 + (1));
var tmp38349 = inst_38209;
var tmp38350 = inst_38207;
var tmp38351 = inst_38208;
var inst_38207__$1 = tmp38350;
var inst_38208__$1 = tmp38351;
var inst_38209__$1 = tmp38349;
var inst_38210__$1 = inst_38217;
var state_38347__$1 = (function (){var statearr_38352 = state_38347;
(statearr_38352[(11)] = inst_38216);

(statearr_38352[(7)] = inst_38209__$1);

(statearr_38352[(8)] = inst_38207__$1);

(statearr_38352[(9)] = inst_38208__$1);

(statearr_38352[(10)] = inst_38210__$1);

return statearr_38352;
})();
var statearr_38353_38436 = state_38347__$1;
(statearr_38353_38436[(2)] = null);

(statearr_38353_38436[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (20))){
var inst_38250 = (state_38347[(12)]);
var inst_38258 = figwheel.client.file_reloading.sort_files.call(null,inst_38250);
var state_38347__$1 = state_38347;
var statearr_38354_38437 = state_38347__$1;
(statearr_38354_38437[(2)] = inst_38258);

(statearr_38354_38437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (27))){
var state_38347__$1 = state_38347;
var statearr_38355_38438 = state_38347__$1;
(statearr_38355_38438[(2)] = null);

(statearr_38355_38438[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (1))){
var inst_38199 = (state_38347[(13)]);
var inst_38196 = before_jsload.call(null,files);
var inst_38197 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38198 = (function (){return ((function (inst_38199,inst_38196,inst_38197,state_val_38348,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38187_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38187_SHARP_);
});
;})(inst_38199,inst_38196,inst_38197,state_val_38348,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38199__$1 = cljs.core.filter.call(null,inst_38198,files);
var inst_38200 = cljs.core.not_empty.call(null,inst_38199__$1);
var state_38347__$1 = (function (){var statearr_38356 = state_38347;
(statearr_38356[(14)] = inst_38197);

(statearr_38356[(15)] = inst_38196);

(statearr_38356[(13)] = inst_38199__$1);

return statearr_38356;
})();
if(cljs.core.truth_(inst_38200)){
var statearr_38357_38439 = state_38347__$1;
(statearr_38357_38439[(1)] = (2));

} else {
var statearr_38358_38440 = state_38347__$1;
(statearr_38358_38440[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (24))){
var state_38347__$1 = state_38347;
var statearr_38359_38441 = state_38347__$1;
(statearr_38359_38441[(2)] = null);

(statearr_38359_38441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (39))){
var inst_38300 = (state_38347[(16)]);
var state_38347__$1 = state_38347;
var statearr_38360_38442 = state_38347__$1;
(statearr_38360_38442[(2)] = inst_38300);

(statearr_38360_38442[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (46))){
var inst_38342 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
var statearr_38361_38443 = state_38347__$1;
(statearr_38361_38443[(2)] = inst_38342);

(statearr_38361_38443[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (4))){
var inst_38244 = (state_38347[(2)]);
var inst_38245 = cljs.core.List.EMPTY;
var inst_38246 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38245);
var inst_38247 = (function (){return ((function (inst_38244,inst_38245,inst_38246,state_val_38348,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38188_SHARP_){
var and__30060__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38188_SHARP_);
if(cljs.core.truth_(and__30060__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38188_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__38188_SHARP_)));
} else {
return and__30060__auto__;
}
});
;})(inst_38244,inst_38245,inst_38246,state_val_38348,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38248 = cljs.core.filter.call(null,inst_38247,files);
var inst_38249 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38250 = cljs.core.concat.call(null,inst_38248,inst_38249);
var state_38347__$1 = (function (){var statearr_38362 = state_38347;
(statearr_38362[(17)] = inst_38244);

(statearr_38362[(12)] = inst_38250);

(statearr_38362[(18)] = inst_38246);

return statearr_38362;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38363_38444 = state_38347__$1;
(statearr_38363_38444[(1)] = (16));

} else {
var statearr_38364_38445 = state_38347__$1;
(statearr_38364_38445[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (15))){
var inst_38234 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
var statearr_38365_38446 = state_38347__$1;
(statearr_38365_38446[(2)] = inst_38234);

(statearr_38365_38446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (21))){
var inst_38260 = (state_38347[(19)]);
var inst_38260__$1 = (state_38347[(2)]);
var inst_38261 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38260__$1);
var state_38347__$1 = (function (){var statearr_38366 = state_38347;
(statearr_38366[(19)] = inst_38260__$1);

return statearr_38366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38347__$1,(22),inst_38261);
} else {
if((state_val_38348 === (31))){
var inst_38345 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38347__$1,inst_38345);
} else {
if((state_val_38348 === (32))){
var inst_38300 = (state_38347[(16)]);
var inst_38305 = inst_38300.cljs$lang$protocol_mask$partition0$;
var inst_38306 = (inst_38305 & (64));
var inst_38307 = inst_38300.cljs$core$ISeq$;
var inst_38308 = (cljs.core.PROTOCOL_SENTINEL === inst_38307);
var inst_38309 = (inst_38306) || (inst_38308);
var state_38347__$1 = state_38347;
if(cljs.core.truth_(inst_38309)){
var statearr_38367_38447 = state_38347__$1;
(statearr_38367_38447[(1)] = (35));

} else {
var statearr_38368_38448 = state_38347__$1;
(statearr_38368_38448[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (40))){
var inst_38322 = (state_38347[(20)]);
var inst_38321 = (state_38347[(2)]);
var inst_38322__$1 = cljs.core.get.call(null,inst_38321,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38323 = cljs.core.get.call(null,inst_38321,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38324 = cljs.core.not_empty.call(null,inst_38322__$1);
var state_38347__$1 = (function (){var statearr_38369 = state_38347;
(statearr_38369[(21)] = inst_38323);

(statearr_38369[(20)] = inst_38322__$1);

return statearr_38369;
})();
if(cljs.core.truth_(inst_38324)){
var statearr_38370_38449 = state_38347__$1;
(statearr_38370_38449[(1)] = (41));

} else {
var statearr_38371_38450 = state_38347__$1;
(statearr_38371_38450[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (33))){
var state_38347__$1 = state_38347;
var statearr_38372_38451 = state_38347__$1;
(statearr_38372_38451[(2)] = false);

(statearr_38372_38451[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (13))){
var inst_38220 = (state_38347[(22)]);
var inst_38224 = cljs.core.chunk_first.call(null,inst_38220);
var inst_38225 = cljs.core.chunk_rest.call(null,inst_38220);
var inst_38226 = cljs.core.count.call(null,inst_38224);
var inst_38207 = inst_38225;
var inst_38208 = inst_38224;
var inst_38209 = inst_38226;
var inst_38210 = (0);
var state_38347__$1 = (function (){var statearr_38373 = state_38347;
(statearr_38373[(7)] = inst_38209);

(statearr_38373[(8)] = inst_38207);

(statearr_38373[(9)] = inst_38208);

(statearr_38373[(10)] = inst_38210);

return statearr_38373;
})();
var statearr_38374_38452 = state_38347__$1;
(statearr_38374_38452[(2)] = null);

(statearr_38374_38452[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (22))){
var inst_38263 = (state_38347[(23)]);
var inst_38260 = (state_38347[(19)]);
var inst_38264 = (state_38347[(24)]);
var inst_38268 = (state_38347[(25)]);
var inst_38263__$1 = (state_38347[(2)]);
var inst_38264__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38263__$1);
var inst_38265 = (function (){var all_files = inst_38260;
var res_SINGLEQUOTE_ = inst_38263__$1;
var res = inst_38264__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38263,inst_38260,inst_38264,inst_38268,inst_38263__$1,inst_38264__$1,state_val_38348,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38189_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38189_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38263,inst_38260,inst_38264,inst_38268,inst_38263__$1,inst_38264__$1,state_val_38348,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38266 = cljs.core.filter.call(null,inst_38265,inst_38263__$1);
var inst_38267 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38268__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38267);
var inst_38269 = cljs.core.not_empty.call(null,inst_38268__$1);
var state_38347__$1 = (function (){var statearr_38375 = state_38347;
(statearr_38375[(23)] = inst_38263__$1);

(statearr_38375[(24)] = inst_38264__$1);

(statearr_38375[(26)] = inst_38266);

(statearr_38375[(25)] = inst_38268__$1);

return statearr_38375;
})();
if(cljs.core.truth_(inst_38269)){
var statearr_38376_38453 = state_38347__$1;
(statearr_38376_38453[(1)] = (23));

} else {
var statearr_38377_38454 = state_38347__$1;
(statearr_38377_38454[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (36))){
var state_38347__$1 = state_38347;
var statearr_38378_38455 = state_38347__$1;
(statearr_38378_38455[(2)] = false);

(statearr_38378_38455[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (41))){
var inst_38322 = (state_38347[(20)]);
var inst_38326 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38327 = cljs.core.map.call(null,inst_38326,inst_38322);
var inst_38328 = cljs.core.pr_str.call(null,inst_38327);
var inst_38329 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38328)].join('');
var inst_38330 = figwheel.client.utils.log.call(null,inst_38329);
var state_38347__$1 = state_38347;
var statearr_38379_38456 = state_38347__$1;
(statearr_38379_38456[(2)] = inst_38330);

(statearr_38379_38456[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (43))){
var inst_38323 = (state_38347[(21)]);
var inst_38333 = (state_38347[(2)]);
var inst_38334 = cljs.core.not_empty.call(null,inst_38323);
var state_38347__$1 = (function (){var statearr_38380 = state_38347;
(statearr_38380[(27)] = inst_38333);

return statearr_38380;
})();
if(cljs.core.truth_(inst_38334)){
var statearr_38381_38457 = state_38347__$1;
(statearr_38381_38457[(1)] = (44));

} else {
var statearr_38382_38458 = state_38347__$1;
(statearr_38382_38458[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (29))){
var inst_38263 = (state_38347[(23)]);
var inst_38260 = (state_38347[(19)]);
var inst_38264 = (state_38347[(24)]);
var inst_38300 = (state_38347[(16)]);
var inst_38266 = (state_38347[(26)]);
var inst_38268 = (state_38347[(25)]);
var inst_38296 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38299 = (function (){var all_files = inst_38260;
var res_SINGLEQUOTE_ = inst_38263;
var res = inst_38264;
var files_not_loaded = inst_38266;
var dependencies_that_loaded = inst_38268;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38263,inst_38260,inst_38264,inst_38300,inst_38266,inst_38268,inst_38296,state_val_38348,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38298){
var map__38383 = p__38298;
var map__38383__$1 = ((((!((map__38383 == null)))?((((map__38383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38383):map__38383);
var namespace = cljs.core.get.call(null,map__38383__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38263,inst_38260,inst_38264,inst_38300,inst_38266,inst_38268,inst_38296,state_val_38348,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38300__$1 = cljs.core.group_by.call(null,inst_38299,inst_38266);
var inst_38302 = (inst_38300__$1 == null);
var inst_38303 = cljs.core.not.call(null,inst_38302);
var state_38347__$1 = (function (){var statearr_38385 = state_38347;
(statearr_38385[(16)] = inst_38300__$1);

(statearr_38385[(28)] = inst_38296);

return statearr_38385;
})();
if(inst_38303){
var statearr_38386_38459 = state_38347__$1;
(statearr_38386_38459[(1)] = (32));

} else {
var statearr_38387_38460 = state_38347__$1;
(statearr_38387_38460[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (44))){
var inst_38323 = (state_38347[(21)]);
var inst_38336 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38323);
var inst_38337 = cljs.core.pr_str.call(null,inst_38336);
var inst_38338 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38337)].join('');
var inst_38339 = figwheel.client.utils.log.call(null,inst_38338);
var state_38347__$1 = state_38347;
var statearr_38388_38461 = state_38347__$1;
(statearr_38388_38461[(2)] = inst_38339);

(statearr_38388_38461[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (6))){
var inst_38241 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
var statearr_38389_38462 = state_38347__$1;
(statearr_38389_38462[(2)] = inst_38241);

(statearr_38389_38462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (28))){
var inst_38266 = (state_38347[(26)]);
var inst_38293 = (state_38347[(2)]);
var inst_38294 = cljs.core.not_empty.call(null,inst_38266);
var state_38347__$1 = (function (){var statearr_38390 = state_38347;
(statearr_38390[(29)] = inst_38293);

return statearr_38390;
})();
if(cljs.core.truth_(inst_38294)){
var statearr_38391_38463 = state_38347__$1;
(statearr_38391_38463[(1)] = (29));

} else {
var statearr_38392_38464 = state_38347__$1;
(statearr_38392_38464[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (25))){
var inst_38264 = (state_38347[(24)]);
var inst_38280 = (state_38347[(2)]);
var inst_38281 = cljs.core.not_empty.call(null,inst_38264);
var state_38347__$1 = (function (){var statearr_38393 = state_38347;
(statearr_38393[(30)] = inst_38280);

return statearr_38393;
})();
if(cljs.core.truth_(inst_38281)){
var statearr_38394_38465 = state_38347__$1;
(statearr_38394_38465[(1)] = (26));

} else {
var statearr_38395_38466 = state_38347__$1;
(statearr_38395_38466[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (34))){
var inst_38316 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
if(cljs.core.truth_(inst_38316)){
var statearr_38396_38467 = state_38347__$1;
(statearr_38396_38467[(1)] = (38));

} else {
var statearr_38397_38468 = state_38347__$1;
(statearr_38397_38468[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (17))){
var state_38347__$1 = state_38347;
var statearr_38398_38469 = state_38347__$1;
(statearr_38398_38469[(2)] = recompile_dependents);

(statearr_38398_38469[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (3))){
var state_38347__$1 = state_38347;
var statearr_38399_38470 = state_38347__$1;
(statearr_38399_38470[(2)] = null);

(statearr_38399_38470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (12))){
var inst_38237 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
var statearr_38400_38471 = state_38347__$1;
(statearr_38400_38471[(2)] = inst_38237);

(statearr_38400_38471[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (2))){
var inst_38199 = (state_38347[(13)]);
var inst_38206 = cljs.core.seq.call(null,inst_38199);
var inst_38207 = inst_38206;
var inst_38208 = null;
var inst_38209 = (0);
var inst_38210 = (0);
var state_38347__$1 = (function (){var statearr_38401 = state_38347;
(statearr_38401[(7)] = inst_38209);

(statearr_38401[(8)] = inst_38207);

(statearr_38401[(9)] = inst_38208);

(statearr_38401[(10)] = inst_38210);

return statearr_38401;
})();
var statearr_38402_38472 = state_38347__$1;
(statearr_38402_38472[(2)] = null);

(statearr_38402_38472[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (23))){
var inst_38263 = (state_38347[(23)]);
var inst_38260 = (state_38347[(19)]);
var inst_38264 = (state_38347[(24)]);
var inst_38266 = (state_38347[(26)]);
var inst_38268 = (state_38347[(25)]);
var inst_38271 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38273 = (function (){var all_files = inst_38260;
var res_SINGLEQUOTE_ = inst_38263;
var res = inst_38264;
var files_not_loaded = inst_38266;
var dependencies_that_loaded = inst_38268;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38263,inst_38260,inst_38264,inst_38266,inst_38268,inst_38271,state_val_38348,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38272){
var map__38403 = p__38272;
var map__38403__$1 = ((((!((map__38403 == null)))?((((map__38403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38403):map__38403);
var request_url = cljs.core.get.call(null,map__38403__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38263,inst_38260,inst_38264,inst_38266,inst_38268,inst_38271,state_val_38348,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38274 = cljs.core.reverse.call(null,inst_38268);
var inst_38275 = cljs.core.map.call(null,inst_38273,inst_38274);
var inst_38276 = cljs.core.pr_str.call(null,inst_38275);
var inst_38277 = figwheel.client.utils.log.call(null,inst_38276);
var state_38347__$1 = (function (){var statearr_38405 = state_38347;
(statearr_38405[(31)] = inst_38271);

return statearr_38405;
})();
var statearr_38406_38473 = state_38347__$1;
(statearr_38406_38473[(2)] = inst_38277);

(statearr_38406_38473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (35))){
var state_38347__$1 = state_38347;
var statearr_38407_38474 = state_38347__$1;
(statearr_38407_38474[(2)] = true);

(statearr_38407_38474[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (19))){
var inst_38250 = (state_38347[(12)]);
var inst_38256 = figwheel.client.file_reloading.expand_files.call(null,inst_38250);
var state_38347__$1 = state_38347;
var statearr_38408_38475 = state_38347__$1;
(statearr_38408_38475[(2)] = inst_38256);

(statearr_38408_38475[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (11))){
var state_38347__$1 = state_38347;
var statearr_38409_38476 = state_38347__$1;
(statearr_38409_38476[(2)] = null);

(statearr_38409_38476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (9))){
var inst_38239 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
var statearr_38410_38477 = state_38347__$1;
(statearr_38410_38477[(2)] = inst_38239);

(statearr_38410_38477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (5))){
var inst_38209 = (state_38347[(7)]);
var inst_38210 = (state_38347[(10)]);
var inst_38212 = (inst_38210 < inst_38209);
var inst_38213 = inst_38212;
var state_38347__$1 = state_38347;
if(cljs.core.truth_(inst_38213)){
var statearr_38411_38478 = state_38347__$1;
(statearr_38411_38478[(1)] = (7));

} else {
var statearr_38412_38479 = state_38347__$1;
(statearr_38412_38479[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (14))){
var inst_38220 = (state_38347[(22)]);
var inst_38229 = cljs.core.first.call(null,inst_38220);
var inst_38230 = figwheel.client.file_reloading.eval_body.call(null,inst_38229,opts);
var inst_38231 = cljs.core.next.call(null,inst_38220);
var inst_38207 = inst_38231;
var inst_38208 = null;
var inst_38209 = (0);
var inst_38210 = (0);
var state_38347__$1 = (function (){var statearr_38413 = state_38347;
(statearr_38413[(7)] = inst_38209);

(statearr_38413[(8)] = inst_38207);

(statearr_38413[(9)] = inst_38208);

(statearr_38413[(32)] = inst_38230);

(statearr_38413[(10)] = inst_38210);

return statearr_38413;
})();
var statearr_38414_38480 = state_38347__$1;
(statearr_38414_38480[(2)] = null);

(statearr_38414_38480[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (45))){
var state_38347__$1 = state_38347;
var statearr_38415_38481 = state_38347__$1;
(statearr_38415_38481[(2)] = null);

(statearr_38415_38481[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (26))){
var inst_38263 = (state_38347[(23)]);
var inst_38260 = (state_38347[(19)]);
var inst_38264 = (state_38347[(24)]);
var inst_38266 = (state_38347[(26)]);
var inst_38268 = (state_38347[(25)]);
var inst_38283 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38285 = (function (){var all_files = inst_38260;
var res_SINGLEQUOTE_ = inst_38263;
var res = inst_38264;
var files_not_loaded = inst_38266;
var dependencies_that_loaded = inst_38268;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38263,inst_38260,inst_38264,inst_38266,inst_38268,inst_38283,state_val_38348,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38284){
var map__38416 = p__38284;
var map__38416__$1 = ((((!((map__38416 == null)))?((((map__38416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38416):map__38416);
var namespace = cljs.core.get.call(null,map__38416__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38416__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38263,inst_38260,inst_38264,inst_38266,inst_38268,inst_38283,state_val_38348,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38286 = cljs.core.map.call(null,inst_38285,inst_38264);
var inst_38287 = cljs.core.pr_str.call(null,inst_38286);
var inst_38288 = figwheel.client.utils.log.call(null,inst_38287);
var inst_38289 = (function (){var all_files = inst_38260;
var res_SINGLEQUOTE_ = inst_38263;
var res = inst_38264;
var files_not_loaded = inst_38266;
var dependencies_that_loaded = inst_38268;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38263,inst_38260,inst_38264,inst_38266,inst_38268,inst_38283,inst_38285,inst_38286,inst_38287,inst_38288,state_val_38348,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38263,inst_38260,inst_38264,inst_38266,inst_38268,inst_38283,inst_38285,inst_38286,inst_38287,inst_38288,state_val_38348,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38290 = setTimeout(inst_38289,(10));
var state_38347__$1 = (function (){var statearr_38418 = state_38347;
(statearr_38418[(33)] = inst_38288);

(statearr_38418[(34)] = inst_38283);

return statearr_38418;
})();
var statearr_38419_38482 = state_38347__$1;
(statearr_38419_38482[(2)] = inst_38290);

(statearr_38419_38482[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (16))){
var state_38347__$1 = state_38347;
var statearr_38420_38483 = state_38347__$1;
(statearr_38420_38483[(2)] = reload_dependents);

(statearr_38420_38483[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (38))){
var inst_38300 = (state_38347[(16)]);
var inst_38318 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38300);
var state_38347__$1 = state_38347;
var statearr_38421_38484 = state_38347__$1;
(statearr_38421_38484[(2)] = inst_38318);

(statearr_38421_38484[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (30))){
var state_38347__$1 = state_38347;
var statearr_38422_38485 = state_38347__$1;
(statearr_38422_38485[(2)] = null);

(statearr_38422_38485[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (10))){
var inst_38220 = (state_38347[(22)]);
var inst_38222 = cljs.core.chunked_seq_QMARK_.call(null,inst_38220);
var state_38347__$1 = state_38347;
if(inst_38222){
var statearr_38423_38486 = state_38347__$1;
(statearr_38423_38486[(1)] = (13));

} else {
var statearr_38424_38487 = state_38347__$1;
(statearr_38424_38487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (18))){
var inst_38254 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
if(cljs.core.truth_(inst_38254)){
var statearr_38425_38488 = state_38347__$1;
(statearr_38425_38488[(1)] = (19));

} else {
var statearr_38426_38489 = state_38347__$1;
(statearr_38426_38489[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (42))){
var state_38347__$1 = state_38347;
var statearr_38427_38490 = state_38347__$1;
(statearr_38427_38490[(2)] = null);

(statearr_38427_38490[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (37))){
var inst_38313 = (state_38347[(2)]);
var state_38347__$1 = state_38347;
var statearr_38428_38491 = state_38347__$1;
(statearr_38428_38491[(2)] = inst_38313);

(statearr_38428_38491[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38348 === (8))){
var inst_38207 = (state_38347[(8)]);
var inst_38220 = (state_38347[(22)]);
var inst_38220__$1 = cljs.core.seq.call(null,inst_38207);
var state_38347__$1 = (function (){var statearr_38429 = state_38347;
(statearr_38429[(22)] = inst_38220__$1);

return statearr_38429;
})();
if(inst_38220__$1){
var statearr_38430_38492 = state_38347__$1;
(statearr_38430_38492[(1)] = (10));

} else {
var statearr_38431_38493 = state_38347__$1;
(statearr_38431_38493[(1)] = (11));

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
});})(c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33280__auto__,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____0 = (function (){
var statearr_38432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38432[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__);

(statearr_38432[(1)] = (1));

return statearr_38432;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____1 = (function (state_38347){
while(true){
var ret_value__33282__auto__ = (function (){try{while(true){
var result__33283__auto__ = switch__33280__auto__.call(null,state_38347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33283__auto__;
}
break;
}
}catch (e38433){if((e38433 instanceof Object)){
var ex__33284__auto__ = e38433;
var statearr_38434_38494 = state_38347;
(statearr_38434_38494[(5)] = ex__33284__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38495 = state_38347;
state_38347 = G__38495;
continue;
} else {
return ret_value__33282__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__ = function(state_38347){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____1.call(this,state_38347);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33281__auto__;
})()
;})(switch__33280__auto__,c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33667__auto__ = (function (){var statearr_38435 = f__33666__auto__.call(null);
(statearr_38435[(6)] = c__33665__auto__);

return statearr_38435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33667__auto__);
});})(c__33665__auto__,map__38192,map__38192__$1,opts,before_jsload,on_jsload,reload_dependents,map__38193,map__38193__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33665__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38498,link){
var map__38499 = p__38498;
var map__38499__$1 = ((((!((map__38499 == null)))?((((map__38499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38499):map__38499);
var file = cljs.core.get.call(null,map__38499__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__38499,map__38499__$1,file){
return (function (p1__38496_SHARP_,p2__38497_SHARP_){
if(cljs.core._EQ_.call(null,p1__38496_SHARP_,p2__38497_SHARP_)){
return p1__38496_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__38499,map__38499__$1,file))
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
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38502){
var map__38503 = p__38502;
var map__38503__$1 = ((((!((map__38503 == null)))?((((map__38503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38503):map__38503);
var match_length = cljs.core.get.call(null,map__38503__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38503__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38501_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38501_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38505_SHARP_,p2__38506_SHARP_){
return cljs.core.assoc.call(null,p1__38505_SHARP_,cljs.core.get.call(null,p2__38506_SHARP_,key),p2__38506_SHARP_);
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
var loaded_f_datas_38507 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38507);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38507);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38508,p__38509){
var map__38510 = p__38508;
var map__38510__$1 = ((((!((map__38510 == null)))?((((map__38510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38510):map__38510);
var on_cssload = cljs.core.get.call(null,map__38510__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38511 = p__38509;
var map__38511__$1 = ((((!((map__38511 == null)))?((((map__38511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38511):map__38511);
var files_msg = map__38511__$1;
var files = cljs.core.get.call(null,map__38511__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1510229216399
