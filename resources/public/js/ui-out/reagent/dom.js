// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__32771__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__32771__auto__)){
return or__32771__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_41219 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_41219){
return (function (){
var _STAR_always_update_STAR_41220 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_41220;
}});})(_STAR_always_update_STAR_41219))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_41219;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__41222 = arguments.length;
switch (G__41222) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__41224_41228 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__41225_41229 = null;
var count__41226_41230 = (0);
var i__41227_41231 = (0);
while(true){
if((i__41227_41231 < count__41226_41230)){
var v_41232 = cljs.core._nth.call(null,chunk__41225_41229,i__41227_41231);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_41232);

var G__41233 = seq__41224_41228;
var G__41234 = chunk__41225_41229;
var G__41235 = count__41226_41230;
var G__41236 = (i__41227_41231 + (1));
seq__41224_41228 = G__41233;
chunk__41225_41229 = G__41234;
count__41226_41230 = G__41235;
i__41227_41231 = G__41236;
continue;
} else {
var temp__5278__auto___41237 = cljs.core.seq.call(null,seq__41224_41228);
if(temp__5278__auto___41237){
var seq__41224_41238__$1 = temp__5278__auto___41237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41224_41238__$1)){
var c__33702__auto___41239 = cljs.core.chunk_first.call(null,seq__41224_41238__$1);
var G__41240 = cljs.core.chunk_rest.call(null,seq__41224_41238__$1);
var G__41241 = c__33702__auto___41239;
var G__41242 = cljs.core.count.call(null,c__33702__auto___41239);
var G__41243 = (0);
seq__41224_41228 = G__41240;
chunk__41225_41229 = G__41241;
count__41226_41230 = G__41242;
i__41227_41231 = G__41243;
continue;
} else {
var v_41244 = cljs.core.first.call(null,seq__41224_41238__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_41244);

var G__41245 = cljs.core.next.call(null,seq__41224_41238__$1);
var G__41246 = null;
var G__41247 = (0);
var G__41248 = (0);
seq__41224_41228 = G__41245;
chunk__41225_41229 = G__41246;
count__41226_41230 = G__41247;
i__41227_41231 = G__41248;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
