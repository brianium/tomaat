// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.node$module$react_dom = require('react-dom');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.node$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_46228 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return reagent.dom.node$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_46228){
return (function (){
var _STAR_always_update_STAR_46229 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_46229;
}});})(_STAR_always_update_STAR_46228))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_46228;
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
var G__46231 = arguments.length;
switch (G__46231) {
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
return reagent.dom.node$module$react_dom.findDOMNode.call(null,this$);
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

var seq__46233_46237 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__46234_46238 = null;
var count__46235_46239 = (0);
var i__46236_46240 = (0);
while(true){
if((i__46236_46240 < count__46235_46239)){
var v_46241 = cljs.core._nth.call(null,chunk__46234_46238,i__46236_46240);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_46241);

var G__46242 = seq__46233_46237;
var G__46243 = chunk__46234_46238;
var G__46244 = count__46235_46239;
var G__46245 = (i__46236_46240 + (1));
seq__46233_46237 = G__46242;
chunk__46234_46238 = G__46243;
count__46235_46239 = G__46244;
i__46236_46240 = G__46245;
continue;
} else {
var temp__5278__auto___46246 = cljs.core.seq.call(null,seq__46233_46237);
if(temp__5278__auto___46246){
var seq__46233_46247__$1 = temp__5278__auto___46246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46233_46247__$1)){
var c__31003__auto___46248 = cljs.core.chunk_first.call(null,seq__46233_46247__$1);
var G__46249 = cljs.core.chunk_rest.call(null,seq__46233_46247__$1);
var G__46250 = c__31003__auto___46248;
var G__46251 = cljs.core.count.call(null,c__31003__auto___46248);
var G__46252 = (0);
seq__46233_46237 = G__46249;
chunk__46234_46238 = G__46250;
count__46235_46239 = G__46251;
i__46236_46240 = G__46252;
continue;
} else {
var v_46253 = cljs.core.first.call(null,seq__46233_46247__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_46253);

var G__46254 = cljs.core.next.call(null,seq__46233_46247__$1);
var G__46255 = null;
var G__46256 = (0);
var G__46257 = (0);
seq__46233_46237 = G__46254;
chunk__46234_46238 = G__46255;
count__46235_46239 = G__46256;
i__46236_46240 = G__46257;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1510360395704
