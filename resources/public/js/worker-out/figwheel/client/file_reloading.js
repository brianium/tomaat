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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37672_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37672_SHARP_));
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
var seq__37673 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37674 = null;
var count__37675 = (0);
var i__37676 = (0);
while(true){
if((i__37676 < count__37675)){
var n = cljs.core._nth.call(null,chunk__37674,i__37676);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37682 = seq__37673;
var G__37683 = chunk__37674;
var G__37684 = count__37675;
var G__37685 = (i__37676 + (1));
seq__37673 = G__37682;
chunk__37674 = G__37683;
count__37675 = G__37684;
i__37676 = G__37685;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__37673);
if(temp__5278__auto__){
var seq__37673__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37673__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__37673__$1);
var G__37686 = cljs.core.chunk_rest.call(null,seq__37673__$1);
var G__37687 = c__31003__auto__;
var G__37688 = cljs.core.count.call(null,c__31003__auto__);
var G__37689 = (0);
seq__37673 = G__37686;
chunk__37674 = G__37687;
count__37675 = G__37688;
i__37676 = G__37689;
continue;
} else {
var n = cljs.core.first.call(null,seq__37673__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37694 = cljs.core.next.call(null,seq__37673__$1);
var G__37695 = null;
var G__37696 = (0);
var G__37697 = (0);
seq__37673 = G__37694;
chunk__37674 = G__37695;
count__37675 = G__37696;
i__37676 = G__37697;
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
return cljs.core.some.call(null,(function (p__37702){
var vec__37703 = p__37702;
var _ = cljs.core.nth.call(null,vec__37703,(0),null);
var v = cljs.core.nth.call(null,vec__37703,(1),null);
var and__30060__auto__ = v;
if(cljs.core.truth_(and__30060__auto__)){
return v.call(null,dep);
} else {
return and__30060__auto__;
}
}),cljs.core.filter.call(null,(function (p__37706){
var vec__37707 = p__37706;
var k = cljs.core.nth.call(null,vec__37707,(0),null);
var v = cljs.core.nth.call(null,vec__37707,(1),null);
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

var seq__37760_37772 = cljs.core.seq.call(null,deps);
var chunk__37761_37773 = null;
var count__37762_37774 = (0);
var i__37763_37775 = (0);
while(true){
if((i__37763_37775 < count__37762_37774)){
var dep_37776 = cljs.core._nth.call(null,chunk__37761_37773,i__37763_37775);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_37776;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37776));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37776,(depth + (1)),state);
} else {
}

var G__37777 = seq__37760_37772;
var G__37778 = chunk__37761_37773;
var G__37779 = count__37762_37774;
var G__37780 = (i__37763_37775 + (1));
seq__37760_37772 = G__37777;
chunk__37761_37773 = G__37778;
count__37762_37774 = G__37779;
i__37763_37775 = G__37780;
continue;
} else {
var temp__5278__auto___37781 = cljs.core.seq.call(null,seq__37760_37772);
if(temp__5278__auto___37781){
var seq__37760_37782__$1 = temp__5278__auto___37781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37760_37782__$1)){
var c__31003__auto___37783 = cljs.core.chunk_first.call(null,seq__37760_37782__$1);
var G__37784 = cljs.core.chunk_rest.call(null,seq__37760_37782__$1);
var G__37785 = c__31003__auto___37783;
var G__37786 = cljs.core.count.call(null,c__31003__auto___37783);
var G__37787 = (0);
seq__37760_37772 = G__37784;
chunk__37761_37773 = G__37785;
count__37762_37774 = G__37786;
i__37763_37775 = G__37787;
continue;
} else {
var dep_37788 = cljs.core.first.call(null,seq__37760_37782__$1);
if(cljs.core.truth_((function (){var and__30060__auto__ = dep_37788;
if(cljs.core.truth_(and__30060__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37788));
} else {
return and__30060__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37788,(depth + (1)),state);
} else {
}

var G__37789 = cljs.core.next.call(null,seq__37760_37782__$1);
var G__37790 = null;
var G__37791 = (0);
var G__37792 = (0);
seq__37760_37772 = G__37789;
chunk__37761_37773 = G__37790;
count__37762_37774 = G__37791;
i__37763_37775 = G__37792;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37768){
var vec__37769 = p__37768;
var seq__37770 = cljs.core.seq.call(null,vec__37769);
var first__37771 = cljs.core.first.call(null,seq__37770);
var seq__37770__$1 = cljs.core.next.call(null,seq__37770);
var x = first__37771;
var xs = seq__37770__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37769,seq__37770,first__37771,seq__37770__$1,x,xs,get_deps__$1){
return (function (p1__37718_SHARP_){
return clojure.set.difference.call(null,p1__37718_SHARP_,x);
});})(vec__37769,seq__37770,first__37771,seq__37770__$1,x,xs,get_deps__$1))
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
var seq__37801 = cljs.core.seq.call(null,provides);
var chunk__37802 = null;
var count__37803 = (0);
var i__37804 = (0);
while(true){
if((i__37804 < count__37803)){
var prov = cljs.core._nth.call(null,chunk__37802,i__37804);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37805_37819 = cljs.core.seq.call(null,requires);
var chunk__37806_37820 = null;
var count__37807_37821 = (0);
var i__37808_37822 = (0);
while(true){
if((i__37808_37822 < count__37807_37821)){
var req_37823 = cljs.core._nth.call(null,chunk__37806_37820,i__37808_37822);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37823,prov);

var G__37824 = seq__37805_37819;
var G__37825 = chunk__37806_37820;
var G__37826 = count__37807_37821;
var G__37827 = (i__37808_37822 + (1));
seq__37805_37819 = G__37824;
chunk__37806_37820 = G__37825;
count__37807_37821 = G__37826;
i__37808_37822 = G__37827;
continue;
} else {
var temp__5278__auto___37828 = cljs.core.seq.call(null,seq__37805_37819);
if(temp__5278__auto___37828){
var seq__37805_37829__$1 = temp__5278__auto___37828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37805_37829__$1)){
var c__31003__auto___37830 = cljs.core.chunk_first.call(null,seq__37805_37829__$1);
var G__37831 = cljs.core.chunk_rest.call(null,seq__37805_37829__$1);
var G__37832 = c__31003__auto___37830;
var G__37833 = cljs.core.count.call(null,c__31003__auto___37830);
var G__37834 = (0);
seq__37805_37819 = G__37831;
chunk__37806_37820 = G__37832;
count__37807_37821 = G__37833;
i__37808_37822 = G__37834;
continue;
} else {
var req_37845 = cljs.core.first.call(null,seq__37805_37829__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37845,prov);

var G__37853 = cljs.core.next.call(null,seq__37805_37829__$1);
var G__37854 = null;
var G__37855 = (0);
var G__37856 = (0);
seq__37805_37819 = G__37853;
chunk__37806_37820 = G__37854;
count__37807_37821 = G__37855;
i__37808_37822 = G__37856;
continue;
}
} else {
}
}
break;
}

var G__37857 = seq__37801;
var G__37858 = chunk__37802;
var G__37859 = count__37803;
var G__37860 = (i__37804 + (1));
seq__37801 = G__37857;
chunk__37802 = G__37858;
count__37803 = G__37859;
i__37804 = G__37860;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__37801);
if(temp__5278__auto__){
var seq__37801__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37801__$1)){
var c__31003__auto__ = cljs.core.chunk_first.call(null,seq__37801__$1);
var G__37862 = cljs.core.chunk_rest.call(null,seq__37801__$1);
var G__37863 = c__31003__auto__;
var G__37864 = cljs.core.count.call(null,c__31003__auto__);
var G__37865 = (0);
seq__37801 = G__37862;
chunk__37802 = G__37863;
count__37803 = G__37864;
i__37804 = G__37865;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37801__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37812_37867 = cljs.core.seq.call(null,requires);
var chunk__37813_37868 = null;
var count__37814_37869 = (0);
var i__37815_37870 = (0);
while(true){
if((i__37815_37870 < count__37814_37869)){
var req_37873 = cljs.core._nth.call(null,chunk__37813_37868,i__37815_37870);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37873,prov);

var G__37875 = seq__37812_37867;
var G__37876 = chunk__37813_37868;
var G__37877 = count__37814_37869;
var G__37878 = (i__37815_37870 + (1));
seq__37812_37867 = G__37875;
chunk__37813_37868 = G__37876;
count__37814_37869 = G__37877;
i__37815_37870 = G__37878;
continue;
} else {
var temp__5278__auto___37880__$1 = cljs.core.seq.call(null,seq__37812_37867);
if(temp__5278__auto___37880__$1){
var seq__37812_37881__$1 = temp__5278__auto___37880__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37812_37881__$1)){
var c__31003__auto___37882 = cljs.core.chunk_first.call(null,seq__37812_37881__$1);
var G__37883 = cljs.core.chunk_rest.call(null,seq__37812_37881__$1);
var G__37884 = c__31003__auto___37882;
var G__37885 = cljs.core.count.call(null,c__31003__auto___37882);
var G__37886 = (0);
seq__37812_37867 = G__37883;
chunk__37813_37868 = G__37884;
count__37814_37869 = G__37885;
i__37815_37870 = G__37886;
continue;
} else {
var req_37887 = cljs.core.first.call(null,seq__37812_37881__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37887,prov);

var G__37888 = cljs.core.next.call(null,seq__37812_37881__$1);
var G__37889 = null;
var G__37890 = (0);
var G__37891 = (0);
seq__37812_37867 = G__37888;
chunk__37813_37868 = G__37889;
count__37814_37869 = G__37890;
i__37815_37870 = G__37891;
continue;
}
} else {
}
}
break;
}

var G__37892 = cljs.core.next.call(null,seq__37801__$1);
var G__37893 = null;
var G__37894 = (0);
var G__37895 = (0);
seq__37801 = G__37892;
chunk__37802 = G__37893;
count__37803 = G__37894;
i__37804 = G__37895;
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
var seq__37896_37900 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37897_37901 = null;
var count__37898_37902 = (0);
var i__37899_37903 = (0);
while(true){
if((i__37899_37903 < count__37898_37902)){
var ns_37904 = cljs.core._nth.call(null,chunk__37897_37901,i__37899_37903);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37904);

var G__37905 = seq__37896_37900;
var G__37906 = chunk__37897_37901;
var G__37907 = count__37898_37902;
var G__37908 = (i__37899_37903 + (1));
seq__37896_37900 = G__37905;
chunk__37897_37901 = G__37906;
count__37898_37902 = G__37907;
i__37899_37903 = G__37908;
continue;
} else {
var temp__5278__auto___37909 = cljs.core.seq.call(null,seq__37896_37900);
if(temp__5278__auto___37909){
var seq__37896_37910__$1 = temp__5278__auto___37909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37896_37910__$1)){
var c__31003__auto___37912 = cljs.core.chunk_first.call(null,seq__37896_37910__$1);
var G__37913 = cljs.core.chunk_rest.call(null,seq__37896_37910__$1);
var G__37914 = c__31003__auto___37912;
var G__37915 = cljs.core.count.call(null,c__31003__auto___37912);
var G__37916 = (0);
seq__37896_37900 = G__37913;
chunk__37897_37901 = G__37914;
count__37898_37902 = G__37915;
i__37899_37903 = G__37916;
continue;
} else {
var ns_37918 = cljs.core.first.call(null,seq__37896_37910__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37918);

var G__37919 = cljs.core.next.call(null,seq__37896_37910__$1);
var G__37920 = null;
var G__37921 = (0);
var G__37922 = (0);
seq__37896_37900 = G__37919;
chunk__37897_37901 = G__37920;
count__37898_37902 = G__37921;
i__37899_37903 = G__37922;
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
var G__37926__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37927__i = 0, G__37927__a = new Array(arguments.length -  0);
while (G__37927__i < G__37927__a.length) {G__37927__a[G__37927__i] = arguments[G__37927__i + 0]; ++G__37927__i;}
  args = new cljs.core.IndexedSeq(G__37927__a,0,null);
} 
return G__37926__delegate.call(this,args);};
G__37926.cljs$lang$maxFixedArity = 0;
G__37926.cljs$lang$applyTo = (function (arglist__37928){
var args = cljs.core.seq(arglist__37928);
return G__37926__delegate(args);
});
G__37926.cljs$core$IFn$_invoke$arity$variadic = G__37926__delegate;
return G__37926;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37932_SHARP_,p2__37933_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37932_SHARP_)].join('')),p2__37933_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37934_SHARP_,p2__37935_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37934_SHARP_)].join(''),p2__37935_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37936 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37936.addCallback(((function (G__37936){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37936))
);

G__37936.addErrback(((function (G__37936){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37936))
);

return G__37936;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37944){if((e37944 instanceof Error)){
var e = e37944;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37944;

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
}catch (e37946){if((e37946 instanceof Error)){
var e = e37946;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37946;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37951 = cljs.core._EQ_;
var expr__37952 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37951.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37952))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37951.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37952))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37951.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37952))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37951,expr__37952){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37951,expr__37952))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37956,callback){
var map__37957 = p__37956;
var map__37957__$1 = ((((!((map__37957 == null)))?((((map__37957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37957):map__37957);
var file_msg = map__37957__$1;
var request_url = cljs.core.get.call(null,map__37957__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30072__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37957,map__37957__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37957,map__37957__$1,file_msg,request_url))
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
return (function (state_38000){
var state_val_38001 = (state_38000[(1)]);
if((state_val_38001 === (7))){
var inst_37996 = (state_38000[(2)]);
var state_38000__$1 = state_38000;
var statearr_38002_38036 = state_38000__$1;
(statearr_38002_38036[(2)] = inst_37996);

(statearr_38002_38036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38001 === (1))){
var state_38000__$1 = state_38000;
var statearr_38003_38037 = state_38000__$1;
(statearr_38003_38037[(2)] = null);

(statearr_38003_38037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38001 === (4))){
var inst_37961 = (state_38000[(7)]);
var inst_37961__$1 = (state_38000[(2)]);
var state_38000__$1 = (function (){var statearr_38004 = state_38000;
(statearr_38004[(7)] = inst_37961__$1);

return statearr_38004;
})();
if(cljs.core.truth_(inst_37961__$1)){
var statearr_38005_38038 = state_38000__$1;
(statearr_38005_38038[(1)] = (5));

} else {
var statearr_38006_38039 = state_38000__$1;
(statearr_38006_38039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38001 === (15))){
var inst_37975 = (state_38000[(8)]);
var inst_37979 = (state_38000[(9)]);
var inst_37983 = inst_37979.call(null,inst_37975);
var state_38000__$1 = state_38000;
var statearr_38007_38040 = state_38000__$1;
(statearr_38007_38040[(2)] = inst_37983);

(statearr_38007_38040[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38001 === (13))){
var inst_37990 = (state_38000[(2)]);
var state_38000__$1 = state_38000;
var statearr_38008_38041 = state_38000__$1;
(statearr_38008_38041[(2)] = inst_37990);

(statearr_38008_38041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38001 === (6))){
var state_38000__$1 = state_38000;
var statearr_38010_38042 = state_38000__$1;
(statearr_38010_38042[(2)] = null);

(statearr_38010_38042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38001 === (17))){
var inst_37987 = (state_38000[(2)]);
var state_38000__$1 = state_38000;
var statearr_38013_38043 = state_38000__$1;
(statearr_38013_38043[(2)] = inst_37987);

(statearr_38013_38043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38001 === (3))){
var inst_37998 = (state_38000[(2)]);
var state_38000__$1 = state_38000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38000__$1,inst_37998);
} else {
if((state_val_38001 === (12))){
var state_38000__$1 = state_38000;
var statearr_38014_38045 = state_38000__$1;
(statearr_38014_38045[(2)] = null);

(statearr_38014_38045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38001 === (2))){
var state_38000__$1 = state_38000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38000__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38001 === (11))){
var inst_37966 = (state_38000[(10)]);
var inst_37973 = figwheel.client.file_reloading.blocking_load.call(null,inst_37966);
var state_38000__$1 = state_38000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38000__$1,(14),inst_37973);
} else {
if((state_val_38001 === (9))){
var inst_37966 = (state_38000[(10)]);
var state_38000__$1 = state_38000;
if(cljs.core.truth_(inst_37966)){
var statearr_38015_38047 = state_38000__$1;
(statearr_38015_38047[(1)] = (11));

} else {
var statearr_38016_38048 = state_38000__$1;
(statearr_38016_38048[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38001 === (5))){
var inst_37967 = (state_38000[(11)]);
var inst_37961 = (state_38000[(7)]);
var inst_37966 = cljs.core.nth.call(null,inst_37961,(0),null);
var inst_37967__$1 = cljs.core.nth.call(null,inst_37961,(1),null);
var state_38000__$1 = (function (){var statearr_38017 = state_38000;
(statearr_38017[(11)] = inst_37967__$1);

(statearr_38017[(10)] = inst_37966);

return statearr_38017;
})();
if(cljs.core.truth_(inst_37967__$1)){
var statearr_38018_38049 = state_38000__$1;
(statearr_38018_38049[(1)] = (8));

} else {
var statearr_38019_38050 = state_38000__$1;
(statearr_38019_38050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38001 === (14))){
var inst_37979 = (state_38000[(9)]);
var inst_37966 = (state_38000[(10)]);
var inst_37975 = (state_38000[(2)]);
var inst_37976 = console.log("Loading!",inst_37966);
var inst_37978 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37979__$1 = cljs.core.get.call(null,inst_37978,inst_37966);
var state_38000__$1 = (function (){var statearr_38020 = state_38000;
(statearr_38020[(8)] = inst_37975);

(statearr_38020[(9)] = inst_37979__$1);

(statearr_38020[(12)] = inst_37976);

return statearr_38020;
})();
if(cljs.core.truth_(inst_37979__$1)){
var statearr_38021_38054 = state_38000__$1;
(statearr_38021_38054[(1)] = (15));

} else {
var statearr_38022_38055 = state_38000__$1;
(statearr_38022_38055[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38001 === (16))){
var inst_37975 = (state_38000[(8)]);
var inst_37985 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37975);
var state_38000__$1 = state_38000;
var statearr_38023_38057 = state_38000__$1;
(statearr_38023_38057[(2)] = inst_37985);

(statearr_38023_38057[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38001 === (10))){
var inst_37992 = (state_38000[(2)]);
var state_38000__$1 = (function (){var statearr_38024 = state_38000;
(statearr_38024[(13)] = inst_37992);

return statearr_38024;
})();
var statearr_38025_38058 = state_38000__$1;
(statearr_38025_38058[(2)] = null);

(statearr_38025_38058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38001 === (8))){
var inst_37967 = (state_38000[(11)]);
var inst_37969 = console.log("Evaling!",inst_37967);
var inst_37970 = eval(inst_37967);
var state_38000__$1 = (function (){var statearr_38026 = state_38000;
(statearr_38026[(14)] = inst_37969);

return statearr_38026;
})();
var statearr_38028_38059 = state_38000__$1;
(statearr_38028_38059[(2)] = inst_37970);

(statearr_38028_38059[(1)] = (10));


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
var statearr_38032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38032[(0)] = figwheel$client$file_reloading$state_machine__33335__auto__);

(statearr_38032[(1)] = (1));

return statearr_38032;
});
var figwheel$client$file_reloading$state_machine__33335__auto____1 = (function (state_38000){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_38000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e38033){if((e38033 instanceof Object)){
var ex__33338__auto__ = e38033;
var statearr_38034_38063 = state_38000;
(statearr_38034_38063[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38066 = state_38000;
state_38000 = G__38066;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33335__auto__ = function(state_38000){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33335__auto____1.call(this,state_38000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33335__auto____0;
figwheel$client$file_reloading$state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33335__auto____1;
return figwheel$client$file_reloading$state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__))
})();
var state__33730__auto__ = (function (){var statearr_38035 = f__33729__auto__.call(null);
(statearr_38035[(6)] = c__33728__auto__);

return statearr_38035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto__))
);

return c__33728__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__38068 = arguments.length;
switch (G__38068) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38070,callback){
var map__38071 = p__38070;
var map__38071__$1 = ((((!((map__38071 == null)))?((((map__38071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38071):map__38071);
var file_msg = map__38071__$1;
var namespace = cljs.core.get.call(null,map__38071__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38071,map__38071__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38071,map__38071__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__38092){
var map__38093 = p__38092;
var map__38093__$1 = ((((!((map__38093 == null)))?((((map__38093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38093):map__38093);
var file_msg = map__38093__$1;
var namespace = cljs.core.get.call(null,map__38093__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38102){
var map__38103 = p__38102;
var map__38103__$1 = ((((!((map__38103 == null)))?((((map__38103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38103):map__38103);
var file_msg = map__38103__$1;
var namespace = cljs.core.get.call(null,map__38103__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38105,callback){
var map__38106 = p__38105;
var map__38106__$1 = ((((!((map__38106 == null)))?((((map__38106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38106):map__38106);
var file_msg = map__38106__$1;
var request_url = cljs.core.get.call(null,map__38106__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38106__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33728__auto___38176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto___38176,out){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto___38176,out){
return (function (state_38155){
var state_val_38156 = (state_38155[(1)]);
if((state_val_38156 === (1))){
var inst_38127 = cljs.core.seq.call(null,files);
var inst_38128 = cljs.core.first.call(null,inst_38127);
var inst_38130 = cljs.core.next.call(null,inst_38127);
var inst_38132 = files;
var state_38155__$1 = (function (){var statearr_38159 = state_38155;
(statearr_38159[(7)] = inst_38128);

(statearr_38159[(8)] = inst_38130);

(statearr_38159[(9)] = inst_38132);

return statearr_38159;
})();
var statearr_38160_38178 = state_38155__$1;
(statearr_38160_38178[(2)] = null);

(statearr_38160_38178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38156 === (2))){
var inst_38132 = (state_38155[(9)]);
var inst_38138 = (state_38155[(10)]);
var inst_38137 = cljs.core.seq.call(null,inst_38132);
var inst_38138__$1 = cljs.core.first.call(null,inst_38137);
var inst_38139 = cljs.core.next.call(null,inst_38137);
var inst_38140 = (inst_38138__$1 == null);
var inst_38141 = cljs.core.not.call(null,inst_38140);
var state_38155__$1 = (function (){var statearr_38163 = state_38155;
(statearr_38163[(11)] = inst_38139);

(statearr_38163[(10)] = inst_38138__$1);

return statearr_38163;
})();
if(inst_38141){
var statearr_38165_38180 = state_38155__$1;
(statearr_38165_38180[(1)] = (4));

} else {
var statearr_38166_38181 = state_38155__$1;
(statearr_38166_38181[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38156 === (3))){
var inst_38153 = (state_38155[(2)]);
var state_38155__$1 = state_38155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38155__$1,inst_38153);
} else {
if((state_val_38156 === (4))){
var inst_38138 = (state_38155[(10)]);
var inst_38143 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38138);
var state_38155__$1 = state_38155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38155__$1,(7),inst_38143);
} else {
if((state_val_38156 === (5))){
var inst_38149 = cljs.core.async.close_BANG_.call(null,out);
var state_38155__$1 = state_38155;
var statearr_38168_38182 = state_38155__$1;
(statearr_38168_38182[(2)] = inst_38149);

(statearr_38168_38182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38156 === (6))){
var inst_38151 = (state_38155[(2)]);
var state_38155__$1 = state_38155;
var statearr_38169_38183 = state_38155__$1;
(statearr_38169_38183[(2)] = inst_38151);

(statearr_38169_38183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38156 === (7))){
var inst_38139 = (state_38155[(11)]);
var inst_38145 = (state_38155[(2)]);
var inst_38146 = cljs.core.async.put_BANG_.call(null,out,inst_38145);
var inst_38132 = inst_38139;
var state_38155__$1 = (function (){var statearr_38170 = state_38155;
(statearr_38170[(12)] = inst_38146);

(statearr_38170[(9)] = inst_38132);

return statearr_38170;
})();
var statearr_38171_38184 = state_38155__$1;
(statearr_38171_38184[(2)] = null);

(statearr_38171_38184[(1)] = (2));


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
});})(c__33728__auto___38176,out))
;
return ((function (switch__33334__auto__,c__33728__auto___38176,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto____0 = (function (){
var statearr_38172 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38172[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto__);

(statearr_38172[(1)] = (1));

return statearr_38172;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto____1 = (function (state_38155){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_38155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e38173){if((e38173 instanceof Object)){
var ex__33338__auto__ = e38173;
var statearr_38174_38185 = state_38155;
(statearr_38174_38185[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38186 = state_38155;
state_38155 = G__38186;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto__ = function(state_38155){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto____1.call(this,state_38155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto___38176,out))
})();
var state__33730__auto__ = (function (){var statearr_38175 = f__33729__auto__.call(null);
(statearr_38175[(6)] = c__33728__auto___38176);

return statearr_38175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto___38176,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38187,opts){
var map__38188 = p__38187;
var map__38188__$1 = ((((!((map__38188 == null)))?((((map__38188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38188):map__38188);
var eval_body = cljs.core.get.call(null,map__38188__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38188__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e38190){var e = e38190;
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
return (function (p1__38191_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38191_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__38192){
var vec__38193 = p__38192;
var k = cljs.core.nth.call(null,vec__38193,(0),null);
var v = cljs.core.nth.call(null,vec__38193,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38196){
var vec__38197 = p__38196;
var k = cljs.core.nth.call(null,vec__38197,(0),null);
var v = cljs.core.nth.call(null,vec__38197,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38203,p__38204){
var map__38205 = p__38203;
var map__38205__$1 = ((((!((map__38205 == null)))?((((map__38205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38205):map__38205);
var opts = map__38205__$1;
var before_jsload = cljs.core.get.call(null,map__38205__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38205__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38205__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38206 = p__38204;
var map__38206__$1 = ((((!((map__38206 == null)))?((((map__38206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38206):map__38206);
var msg = map__38206__$1;
var files = cljs.core.get.call(null,map__38206__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38206__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38206__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33728__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33729__auto__ = (function (){var switch__33334__auto__ = ((function (c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38360){
var state_val_38361 = (state_38360[(1)]);
if((state_val_38361 === (7))){
var inst_38222 = (state_38360[(7)]);
var inst_38221 = (state_38360[(8)]);
var inst_38220 = (state_38360[(9)]);
var inst_38223 = (state_38360[(10)]);
var inst_38228 = cljs.core._nth.call(null,inst_38221,inst_38223);
var inst_38229 = figwheel.client.file_reloading.eval_body.call(null,inst_38228,opts);
var inst_38230 = (inst_38223 + (1));
var tmp38362 = inst_38222;
var tmp38363 = inst_38221;
var tmp38364 = inst_38220;
var inst_38220__$1 = tmp38364;
var inst_38221__$1 = tmp38363;
var inst_38222__$1 = tmp38362;
var inst_38223__$1 = inst_38230;
var state_38360__$1 = (function (){var statearr_38365 = state_38360;
(statearr_38365[(7)] = inst_38222__$1);

(statearr_38365[(8)] = inst_38221__$1);

(statearr_38365[(9)] = inst_38220__$1);

(statearr_38365[(11)] = inst_38229);

(statearr_38365[(10)] = inst_38223__$1);

return statearr_38365;
})();
var statearr_38366_38449 = state_38360__$1;
(statearr_38366_38449[(2)] = null);

(statearr_38366_38449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (20))){
var inst_38263 = (state_38360[(12)]);
var inst_38271 = figwheel.client.file_reloading.sort_files.call(null,inst_38263);
var state_38360__$1 = state_38360;
var statearr_38367_38450 = state_38360__$1;
(statearr_38367_38450[(2)] = inst_38271);

(statearr_38367_38450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (27))){
var state_38360__$1 = state_38360;
var statearr_38368_38451 = state_38360__$1;
(statearr_38368_38451[(2)] = null);

(statearr_38368_38451[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (1))){
var inst_38212 = (state_38360[(13)]);
var inst_38209 = before_jsload.call(null,files);
var inst_38210 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38211 = (function (){return ((function (inst_38212,inst_38209,inst_38210,state_val_38361,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38200_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38200_SHARP_);
});
;})(inst_38212,inst_38209,inst_38210,state_val_38361,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38212__$1 = cljs.core.filter.call(null,inst_38211,files);
var inst_38213 = cljs.core.not_empty.call(null,inst_38212__$1);
var state_38360__$1 = (function (){var statearr_38369 = state_38360;
(statearr_38369[(14)] = inst_38209);

(statearr_38369[(15)] = inst_38210);

(statearr_38369[(13)] = inst_38212__$1);

return statearr_38369;
})();
if(cljs.core.truth_(inst_38213)){
var statearr_38370_38452 = state_38360__$1;
(statearr_38370_38452[(1)] = (2));

} else {
var statearr_38371_38453 = state_38360__$1;
(statearr_38371_38453[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (24))){
var state_38360__$1 = state_38360;
var statearr_38372_38454 = state_38360__$1;
(statearr_38372_38454[(2)] = null);

(statearr_38372_38454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (39))){
var inst_38313 = (state_38360[(16)]);
var state_38360__$1 = state_38360;
var statearr_38373_38455 = state_38360__$1;
(statearr_38373_38455[(2)] = inst_38313);

(statearr_38373_38455[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (46))){
var inst_38355 = (state_38360[(2)]);
var state_38360__$1 = state_38360;
var statearr_38374_38456 = state_38360__$1;
(statearr_38374_38456[(2)] = inst_38355);

(statearr_38374_38456[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (4))){
var inst_38257 = (state_38360[(2)]);
var inst_38258 = cljs.core.List.EMPTY;
var inst_38259 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38258);
var inst_38260 = (function (){return ((function (inst_38257,inst_38258,inst_38259,state_val_38361,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38201_SHARP_){
var and__30060__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38201_SHARP_);
if(cljs.core.truth_(and__30060__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38201_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__38201_SHARP_)));
} else {
return and__30060__auto__;
}
});
;})(inst_38257,inst_38258,inst_38259,state_val_38361,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38261 = cljs.core.filter.call(null,inst_38260,files);
var inst_38262 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38263 = cljs.core.concat.call(null,inst_38261,inst_38262);
var state_38360__$1 = (function (){var statearr_38375 = state_38360;
(statearr_38375[(12)] = inst_38263);

(statearr_38375[(17)] = inst_38257);

(statearr_38375[(18)] = inst_38259);

return statearr_38375;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38376_38457 = state_38360__$1;
(statearr_38376_38457[(1)] = (16));

} else {
var statearr_38377_38458 = state_38360__$1;
(statearr_38377_38458[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (15))){
var inst_38247 = (state_38360[(2)]);
var state_38360__$1 = state_38360;
var statearr_38378_38459 = state_38360__$1;
(statearr_38378_38459[(2)] = inst_38247);

(statearr_38378_38459[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (21))){
var inst_38273 = (state_38360[(19)]);
var inst_38273__$1 = (state_38360[(2)]);
var inst_38274 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38273__$1);
var state_38360__$1 = (function (){var statearr_38379 = state_38360;
(statearr_38379[(19)] = inst_38273__$1);

return statearr_38379;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38360__$1,(22),inst_38274);
} else {
if((state_val_38361 === (31))){
var inst_38358 = (state_38360[(2)]);
var state_38360__$1 = state_38360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38360__$1,inst_38358);
} else {
if((state_val_38361 === (32))){
var inst_38313 = (state_38360[(16)]);
var inst_38318 = inst_38313.cljs$lang$protocol_mask$partition0$;
var inst_38319 = (inst_38318 & (64));
var inst_38320 = inst_38313.cljs$core$ISeq$;
var inst_38321 = (cljs.core.PROTOCOL_SENTINEL === inst_38320);
var inst_38322 = (inst_38319) || (inst_38321);
var state_38360__$1 = state_38360;
if(cljs.core.truth_(inst_38322)){
var statearr_38380_38460 = state_38360__$1;
(statearr_38380_38460[(1)] = (35));

} else {
var statearr_38381_38461 = state_38360__$1;
(statearr_38381_38461[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (40))){
var inst_38335 = (state_38360[(20)]);
var inst_38334 = (state_38360[(2)]);
var inst_38335__$1 = cljs.core.get.call(null,inst_38334,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38336 = cljs.core.get.call(null,inst_38334,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38337 = cljs.core.not_empty.call(null,inst_38335__$1);
var state_38360__$1 = (function (){var statearr_38382 = state_38360;
(statearr_38382[(20)] = inst_38335__$1);

(statearr_38382[(21)] = inst_38336);

return statearr_38382;
})();
if(cljs.core.truth_(inst_38337)){
var statearr_38383_38462 = state_38360__$1;
(statearr_38383_38462[(1)] = (41));

} else {
var statearr_38384_38463 = state_38360__$1;
(statearr_38384_38463[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (33))){
var state_38360__$1 = state_38360;
var statearr_38385_38464 = state_38360__$1;
(statearr_38385_38464[(2)] = false);

(statearr_38385_38464[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (13))){
var inst_38233 = (state_38360[(22)]);
var inst_38237 = cljs.core.chunk_first.call(null,inst_38233);
var inst_38238 = cljs.core.chunk_rest.call(null,inst_38233);
var inst_38239 = cljs.core.count.call(null,inst_38237);
var inst_38220 = inst_38238;
var inst_38221 = inst_38237;
var inst_38222 = inst_38239;
var inst_38223 = (0);
var state_38360__$1 = (function (){var statearr_38386 = state_38360;
(statearr_38386[(7)] = inst_38222);

(statearr_38386[(8)] = inst_38221);

(statearr_38386[(9)] = inst_38220);

(statearr_38386[(10)] = inst_38223);

return statearr_38386;
})();
var statearr_38387_38465 = state_38360__$1;
(statearr_38387_38465[(2)] = null);

(statearr_38387_38465[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (22))){
var inst_38276 = (state_38360[(23)]);
var inst_38277 = (state_38360[(24)]);
var inst_38273 = (state_38360[(19)]);
var inst_38281 = (state_38360[(25)]);
var inst_38276__$1 = (state_38360[(2)]);
var inst_38277__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38276__$1);
var inst_38278 = (function (){var all_files = inst_38273;
var res_SINGLEQUOTE_ = inst_38276__$1;
var res = inst_38277__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38276,inst_38277,inst_38273,inst_38281,inst_38276__$1,inst_38277__$1,state_val_38361,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38202_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38202_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38276,inst_38277,inst_38273,inst_38281,inst_38276__$1,inst_38277__$1,state_val_38361,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38279 = cljs.core.filter.call(null,inst_38278,inst_38276__$1);
var inst_38280 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38281__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38280);
var inst_38282 = cljs.core.not_empty.call(null,inst_38281__$1);
var state_38360__$1 = (function (){var statearr_38388 = state_38360;
(statearr_38388[(23)] = inst_38276__$1);

(statearr_38388[(24)] = inst_38277__$1);

(statearr_38388[(25)] = inst_38281__$1);

(statearr_38388[(26)] = inst_38279);

return statearr_38388;
})();
if(cljs.core.truth_(inst_38282)){
var statearr_38389_38466 = state_38360__$1;
(statearr_38389_38466[(1)] = (23));

} else {
var statearr_38390_38467 = state_38360__$1;
(statearr_38390_38467[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (36))){
var state_38360__$1 = state_38360;
var statearr_38391_38468 = state_38360__$1;
(statearr_38391_38468[(2)] = false);

(statearr_38391_38468[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (41))){
var inst_38335 = (state_38360[(20)]);
var inst_38339 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38340 = cljs.core.map.call(null,inst_38339,inst_38335);
var inst_38341 = cljs.core.pr_str.call(null,inst_38340);
var inst_38342 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38341)].join('');
var inst_38343 = figwheel.client.utils.log.call(null,inst_38342);
var state_38360__$1 = state_38360;
var statearr_38392_38469 = state_38360__$1;
(statearr_38392_38469[(2)] = inst_38343);

(statearr_38392_38469[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (43))){
var inst_38336 = (state_38360[(21)]);
var inst_38346 = (state_38360[(2)]);
var inst_38347 = cljs.core.not_empty.call(null,inst_38336);
var state_38360__$1 = (function (){var statearr_38393 = state_38360;
(statearr_38393[(27)] = inst_38346);

return statearr_38393;
})();
if(cljs.core.truth_(inst_38347)){
var statearr_38394_38470 = state_38360__$1;
(statearr_38394_38470[(1)] = (44));

} else {
var statearr_38395_38471 = state_38360__$1;
(statearr_38395_38471[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (29))){
var inst_38276 = (state_38360[(23)]);
var inst_38277 = (state_38360[(24)]);
var inst_38273 = (state_38360[(19)]);
var inst_38281 = (state_38360[(25)]);
var inst_38279 = (state_38360[(26)]);
var inst_38313 = (state_38360[(16)]);
var inst_38309 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38312 = (function (){var all_files = inst_38273;
var res_SINGLEQUOTE_ = inst_38276;
var res = inst_38277;
var files_not_loaded = inst_38279;
var dependencies_that_loaded = inst_38281;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38276,inst_38277,inst_38273,inst_38281,inst_38279,inst_38313,inst_38309,state_val_38361,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38311){
var map__38396 = p__38311;
var map__38396__$1 = ((((!((map__38396 == null)))?((((map__38396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38396):map__38396);
var namespace = cljs.core.get.call(null,map__38396__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38276,inst_38277,inst_38273,inst_38281,inst_38279,inst_38313,inst_38309,state_val_38361,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38313__$1 = cljs.core.group_by.call(null,inst_38312,inst_38279);
var inst_38315 = (inst_38313__$1 == null);
var inst_38316 = cljs.core.not.call(null,inst_38315);
var state_38360__$1 = (function (){var statearr_38398 = state_38360;
(statearr_38398[(28)] = inst_38309);

(statearr_38398[(16)] = inst_38313__$1);

return statearr_38398;
})();
if(inst_38316){
var statearr_38399_38472 = state_38360__$1;
(statearr_38399_38472[(1)] = (32));

} else {
var statearr_38400_38473 = state_38360__$1;
(statearr_38400_38473[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (44))){
var inst_38336 = (state_38360[(21)]);
var inst_38349 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38336);
var inst_38350 = cljs.core.pr_str.call(null,inst_38349);
var inst_38351 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38350)].join('');
var inst_38352 = figwheel.client.utils.log.call(null,inst_38351);
var state_38360__$1 = state_38360;
var statearr_38401_38474 = state_38360__$1;
(statearr_38401_38474[(2)] = inst_38352);

(statearr_38401_38474[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (6))){
var inst_38254 = (state_38360[(2)]);
var state_38360__$1 = state_38360;
var statearr_38402_38475 = state_38360__$1;
(statearr_38402_38475[(2)] = inst_38254);

(statearr_38402_38475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (28))){
var inst_38279 = (state_38360[(26)]);
var inst_38306 = (state_38360[(2)]);
var inst_38307 = cljs.core.not_empty.call(null,inst_38279);
var state_38360__$1 = (function (){var statearr_38403 = state_38360;
(statearr_38403[(29)] = inst_38306);

return statearr_38403;
})();
if(cljs.core.truth_(inst_38307)){
var statearr_38404_38476 = state_38360__$1;
(statearr_38404_38476[(1)] = (29));

} else {
var statearr_38405_38477 = state_38360__$1;
(statearr_38405_38477[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (25))){
var inst_38277 = (state_38360[(24)]);
var inst_38293 = (state_38360[(2)]);
var inst_38294 = cljs.core.not_empty.call(null,inst_38277);
var state_38360__$1 = (function (){var statearr_38406 = state_38360;
(statearr_38406[(30)] = inst_38293);

return statearr_38406;
})();
if(cljs.core.truth_(inst_38294)){
var statearr_38407_38478 = state_38360__$1;
(statearr_38407_38478[(1)] = (26));

} else {
var statearr_38408_38479 = state_38360__$1;
(statearr_38408_38479[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (34))){
var inst_38329 = (state_38360[(2)]);
var state_38360__$1 = state_38360;
if(cljs.core.truth_(inst_38329)){
var statearr_38409_38480 = state_38360__$1;
(statearr_38409_38480[(1)] = (38));

} else {
var statearr_38410_38481 = state_38360__$1;
(statearr_38410_38481[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (17))){
var state_38360__$1 = state_38360;
var statearr_38411_38482 = state_38360__$1;
(statearr_38411_38482[(2)] = recompile_dependents);

(statearr_38411_38482[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (3))){
var state_38360__$1 = state_38360;
var statearr_38412_38483 = state_38360__$1;
(statearr_38412_38483[(2)] = null);

(statearr_38412_38483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (12))){
var inst_38250 = (state_38360[(2)]);
var state_38360__$1 = state_38360;
var statearr_38413_38484 = state_38360__$1;
(statearr_38413_38484[(2)] = inst_38250);

(statearr_38413_38484[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (2))){
var inst_38212 = (state_38360[(13)]);
var inst_38219 = cljs.core.seq.call(null,inst_38212);
var inst_38220 = inst_38219;
var inst_38221 = null;
var inst_38222 = (0);
var inst_38223 = (0);
var state_38360__$1 = (function (){var statearr_38414 = state_38360;
(statearr_38414[(7)] = inst_38222);

(statearr_38414[(8)] = inst_38221);

(statearr_38414[(9)] = inst_38220);

(statearr_38414[(10)] = inst_38223);

return statearr_38414;
})();
var statearr_38415_38485 = state_38360__$1;
(statearr_38415_38485[(2)] = null);

(statearr_38415_38485[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (23))){
var inst_38276 = (state_38360[(23)]);
var inst_38277 = (state_38360[(24)]);
var inst_38273 = (state_38360[(19)]);
var inst_38281 = (state_38360[(25)]);
var inst_38279 = (state_38360[(26)]);
var inst_38284 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38286 = (function (){var all_files = inst_38273;
var res_SINGLEQUOTE_ = inst_38276;
var res = inst_38277;
var files_not_loaded = inst_38279;
var dependencies_that_loaded = inst_38281;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38276,inst_38277,inst_38273,inst_38281,inst_38279,inst_38284,state_val_38361,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38285){
var map__38416 = p__38285;
var map__38416__$1 = ((((!((map__38416 == null)))?((((map__38416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38416):map__38416);
var request_url = cljs.core.get.call(null,map__38416__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38276,inst_38277,inst_38273,inst_38281,inst_38279,inst_38284,state_val_38361,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38287 = cljs.core.reverse.call(null,inst_38281);
var inst_38288 = cljs.core.map.call(null,inst_38286,inst_38287);
var inst_38289 = cljs.core.pr_str.call(null,inst_38288);
var inst_38290 = figwheel.client.utils.log.call(null,inst_38289);
var state_38360__$1 = (function (){var statearr_38418 = state_38360;
(statearr_38418[(31)] = inst_38284);

return statearr_38418;
})();
var statearr_38419_38486 = state_38360__$1;
(statearr_38419_38486[(2)] = inst_38290);

(statearr_38419_38486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (35))){
var state_38360__$1 = state_38360;
var statearr_38420_38487 = state_38360__$1;
(statearr_38420_38487[(2)] = true);

(statearr_38420_38487[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (19))){
var inst_38263 = (state_38360[(12)]);
var inst_38269 = figwheel.client.file_reloading.expand_files.call(null,inst_38263);
var state_38360__$1 = state_38360;
var statearr_38421_38488 = state_38360__$1;
(statearr_38421_38488[(2)] = inst_38269);

(statearr_38421_38488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (11))){
var state_38360__$1 = state_38360;
var statearr_38422_38489 = state_38360__$1;
(statearr_38422_38489[(2)] = null);

(statearr_38422_38489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (9))){
var inst_38252 = (state_38360[(2)]);
var state_38360__$1 = state_38360;
var statearr_38423_38490 = state_38360__$1;
(statearr_38423_38490[(2)] = inst_38252);

(statearr_38423_38490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (5))){
var inst_38222 = (state_38360[(7)]);
var inst_38223 = (state_38360[(10)]);
var inst_38225 = (inst_38223 < inst_38222);
var inst_38226 = inst_38225;
var state_38360__$1 = state_38360;
if(cljs.core.truth_(inst_38226)){
var statearr_38424_38491 = state_38360__$1;
(statearr_38424_38491[(1)] = (7));

} else {
var statearr_38425_38492 = state_38360__$1;
(statearr_38425_38492[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (14))){
var inst_38233 = (state_38360[(22)]);
var inst_38242 = cljs.core.first.call(null,inst_38233);
var inst_38243 = figwheel.client.file_reloading.eval_body.call(null,inst_38242,opts);
var inst_38244 = cljs.core.next.call(null,inst_38233);
var inst_38220 = inst_38244;
var inst_38221 = null;
var inst_38222 = (0);
var inst_38223 = (0);
var state_38360__$1 = (function (){var statearr_38426 = state_38360;
(statearr_38426[(7)] = inst_38222);

(statearr_38426[(8)] = inst_38221);

(statearr_38426[(9)] = inst_38220);

(statearr_38426[(32)] = inst_38243);

(statearr_38426[(10)] = inst_38223);

return statearr_38426;
})();
var statearr_38427_38493 = state_38360__$1;
(statearr_38427_38493[(2)] = null);

(statearr_38427_38493[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (45))){
var state_38360__$1 = state_38360;
var statearr_38428_38494 = state_38360__$1;
(statearr_38428_38494[(2)] = null);

(statearr_38428_38494[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (26))){
var inst_38276 = (state_38360[(23)]);
var inst_38277 = (state_38360[(24)]);
var inst_38273 = (state_38360[(19)]);
var inst_38281 = (state_38360[(25)]);
var inst_38279 = (state_38360[(26)]);
var inst_38296 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38298 = (function (){var all_files = inst_38273;
var res_SINGLEQUOTE_ = inst_38276;
var res = inst_38277;
var files_not_loaded = inst_38279;
var dependencies_that_loaded = inst_38281;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38276,inst_38277,inst_38273,inst_38281,inst_38279,inst_38296,state_val_38361,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38297){
var map__38429 = p__38297;
var map__38429__$1 = ((((!((map__38429 == null)))?((((map__38429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38429):map__38429);
var namespace = cljs.core.get.call(null,map__38429__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38429__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38276,inst_38277,inst_38273,inst_38281,inst_38279,inst_38296,state_val_38361,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38299 = cljs.core.map.call(null,inst_38298,inst_38277);
var inst_38300 = cljs.core.pr_str.call(null,inst_38299);
var inst_38301 = figwheel.client.utils.log.call(null,inst_38300);
var inst_38302 = (function (){var all_files = inst_38273;
var res_SINGLEQUOTE_ = inst_38276;
var res = inst_38277;
var files_not_loaded = inst_38279;
var dependencies_that_loaded = inst_38281;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38276,inst_38277,inst_38273,inst_38281,inst_38279,inst_38296,inst_38298,inst_38299,inst_38300,inst_38301,state_val_38361,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38276,inst_38277,inst_38273,inst_38281,inst_38279,inst_38296,inst_38298,inst_38299,inst_38300,inst_38301,state_val_38361,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38303 = setTimeout(inst_38302,(10));
var state_38360__$1 = (function (){var statearr_38431 = state_38360;
(statearr_38431[(33)] = inst_38296);

(statearr_38431[(34)] = inst_38301);

return statearr_38431;
})();
var statearr_38432_38495 = state_38360__$1;
(statearr_38432_38495[(2)] = inst_38303);

(statearr_38432_38495[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (16))){
var state_38360__$1 = state_38360;
var statearr_38433_38496 = state_38360__$1;
(statearr_38433_38496[(2)] = reload_dependents);

(statearr_38433_38496[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (38))){
var inst_38313 = (state_38360[(16)]);
var inst_38331 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38313);
var state_38360__$1 = state_38360;
var statearr_38434_38497 = state_38360__$1;
(statearr_38434_38497[(2)] = inst_38331);

(statearr_38434_38497[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (30))){
var state_38360__$1 = state_38360;
var statearr_38435_38498 = state_38360__$1;
(statearr_38435_38498[(2)] = null);

(statearr_38435_38498[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (10))){
var inst_38233 = (state_38360[(22)]);
var inst_38235 = cljs.core.chunked_seq_QMARK_.call(null,inst_38233);
var state_38360__$1 = state_38360;
if(inst_38235){
var statearr_38436_38499 = state_38360__$1;
(statearr_38436_38499[(1)] = (13));

} else {
var statearr_38437_38500 = state_38360__$1;
(statearr_38437_38500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (18))){
var inst_38267 = (state_38360[(2)]);
var state_38360__$1 = state_38360;
if(cljs.core.truth_(inst_38267)){
var statearr_38438_38501 = state_38360__$1;
(statearr_38438_38501[(1)] = (19));

} else {
var statearr_38439_38502 = state_38360__$1;
(statearr_38439_38502[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (42))){
var state_38360__$1 = state_38360;
var statearr_38440_38503 = state_38360__$1;
(statearr_38440_38503[(2)] = null);

(statearr_38440_38503[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (37))){
var inst_38326 = (state_38360[(2)]);
var state_38360__$1 = state_38360;
var statearr_38441_38504 = state_38360__$1;
(statearr_38441_38504[(2)] = inst_38326);

(statearr_38441_38504[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38361 === (8))){
var inst_38220 = (state_38360[(9)]);
var inst_38233 = (state_38360[(22)]);
var inst_38233__$1 = cljs.core.seq.call(null,inst_38220);
var state_38360__$1 = (function (){var statearr_38442 = state_38360;
(statearr_38442[(22)] = inst_38233__$1);

return statearr_38442;
})();
if(inst_38233__$1){
var statearr_38443_38505 = state_38360__$1;
(statearr_38443_38505[(1)] = (10));

} else {
var statearr_38444_38506 = state_38360__$1;
(statearr_38444_38506[(1)] = (11));

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
});})(c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33334__auto__,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto____0 = (function (){
var statearr_38445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38445[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto__);

(statearr_38445[(1)] = (1));

return statearr_38445;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto____1 = (function (state_38360){
while(true){
var ret_value__33336__auto__ = (function (){try{while(true){
var result__33337__auto__ = switch__33334__auto__.call(null,state_38360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33337__auto__;
}
break;
}
}catch (e38446){if((e38446 instanceof Object)){
var ex__33338__auto__ = e38446;
var statearr_38447_38507 = state_38360;
(statearr_38447_38507[(5)] = ex__33338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38508 = state_38360;
state_38360 = G__38508;
continue;
} else {
return ret_value__33336__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto__ = function(state_38360){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto____1.call(this,state_38360);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33335__auto__;
})()
;})(switch__33334__auto__,c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33730__auto__ = (function (){var statearr_38448 = f__33729__auto__.call(null);
(statearr_38448[(6)] = c__33728__auto__);

return statearr_38448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33730__auto__);
});})(c__33728__auto__,map__38205,map__38205__$1,opts,before_jsload,on_jsload,reload_dependents,map__38206,map__38206__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33728__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38511,link){
var map__38512 = p__38511;
var map__38512__$1 = ((((!((map__38512 == null)))?((((map__38512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38512):map__38512);
var file = cljs.core.get.call(null,map__38512__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__38512,map__38512__$1,file){
return (function (p1__38509_SHARP_,p2__38510_SHARP_){
if(cljs.core._EQ_.call(null,p1__38509_SHARP_,p2__38510_SHARP_)){
return p1__38509_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__38512,map__38512__$1,file))
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
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38515){
var map__38516 = p__38515;
var map__38516__$1 = ((((!((map__38516 == null)))?((((map__38516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38516):map__38516);
var match_length = cljs.core.get.call(null,map__38516__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38516__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38514_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38514_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38518_SHARP_,p2__38519_SHARP_){
return cljs.core.assoc.call(null,p1__38518_SHARP_,cljs.core.get.call(null,p2__38519_SHARP_,key),p2__38519_SHARP_);
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
var loaded_f_datas_38520 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38520);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38520);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38521,p__38522){
var map__38523 = p__38521;
var map__38523__$1 = ((((!((map__38523 == null)))?((((map__38523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38523):map__38523);
var on_cssload = cljs.core.get.call(null,map__38523__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38524 = p__38522;
var map__38524__$1 = ((((!((map__38524 == null)))?((((map__38524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38524):map__38524);
var files_msg = map__38524__$1;
var files = cljs.core.get.call(null,map__38524__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1510143300143
