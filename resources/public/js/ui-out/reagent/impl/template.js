// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.template.node$module$react = require('react');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (){
});

reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

reagent.impl.template.NativeWrapper.cljs$lang$type = true;

reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";

reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__30743__auto__,writer__30744__auto__,opt__30745__auto__){
return cljs.core._write.call(null,writer__30744__auto__,"reagent.impl.template/NativeWrapper");
});

reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(){
return (new reagent.impl.template.NativeWrapper());
});

reagent.impl.template.named_QMARK_ = (function reagent$impl$template$named_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return (reagent.impl.template.named_QMARK_.call(null,x)) || (typeof x === 'string');
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return (reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (cljs.core.ifn_QMARK_.call(null,x)) || ((x instanceof reagent.impl.template.NativeWrapper));
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.template.named_QMARK_.call(null,k)){
var temp__5280__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k));
if((temp__5280__auto__ == null)){
return (reagent.impl.template.prop_name_cache[cljs.core.name.call(null,k)] = reagent.impl.util.dash_to_camel.call(null,k));
} else {
var k_SINGLEQUOTE_ = temp__5280__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.js_val_QMARK_ = (function reagent$impl$template$js_val_QMARK_(x){
return !(("object" === goog.typeOf(x)));
});
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__46620 = o;
(G__46620[reagent.impl.template.cached_prop_name.call(null,k)] = reagent.impl.template.convert_prop_value.call(null,v));

return G__46620;
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__46625__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__46625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46630__i = 0, G__46630__a = new Array(arguments.length -  0);
while (G__46630__i < G__46630__a.length) {G__46630__a[G__46630__i] = arguments[G__46630__i + 0]; ++G__46630__i;}
  args = new cljs.core.IndexedSeq(G__46630__a,0,null);
} 
return G__46625__delegate.call(this,args);};
G__46625.cljs$lang$maxFixedArity = 0;
G__46625.cljs$lang$applyTo = (function (arglist__46631){
var args = cljs.core.seq(arglist__46631);
return G__46625__delegate(args);
});
G__46625.cljs$core$IFn$_invoke$arity$variadic = G__46625__delegate;
return G__46625;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
reagent.impl.template.oset = (function reagent$impl$template$oset(o,k,v){
var G__46636 = (((o == null))?({}):o);
(G__46636[k] = v);

return G__46636;
});
reagent.impl.template.oget = (function reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
});
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(p,id_class){
var id = (id_class["id"]);
var p__$1 = (((!((id == null))) && ((reagent.impl.template.oget.call(null,p,"id") == null)))?reagent.impl.template.oset.call(null,p,"id",id):p);
var temp__5280__auto__ = (id_class["className"]);
if((temp__5280__auto__ == null)){
return p__$1;
} else {
var class$ = temp__5280__auto__;
var old = reagent.impl.template.oget.call(null,p__$1,"className");
return reagent.impl.template.oset.call(null,p__$1,"className",(((old == null))?class$:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old)].join('')));
}
});
reagent.impl.template.stringify_class = (function reagent$impl$template$stringify_class(p__46643){
var map__46644 = p__46643;
var map__46644__$1 = ((((!((map__46644 == null)))?((((map__46644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46644):map__46644);
var props = map__46644__$1;
var class$ = cljs.core.get.call(null,map__46644__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.coll_QMARK_.call(null,class$)){
return cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",cljs.core.filter.call(null,cljs.core.identity,class$)));
} else {
return props;
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
return reagent.impl.template.set_id_class.call(null,reagent.impl.template.convert_prop_value.call(null,reagent.impl.template.stringify_class.call(null,props)),id_class);
});
if(typeof reagent.impl.template.find_dom_node !== 'undefined'){
} else {
reagent.impl.template.find_dom_node = null;
}
reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
reagent.impl.template.has_selection_api_QMARK_ = (function reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_.call(null,reagent.impl.template.these_inputs_have_selection_api,input_type);
});
reagent.impl.template.input_node_set_value = (function reagent$impl$template$input_node_set_value(node,rendered_value,dom_value,component,p__46659){
var map__46660 = p__46659;
var map__46660__$1 = ((((!((map__46660 == null)))?((((map__46660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46660):map__46660);
var on_write = cljs.core.get.call(null,map__46660__$1,new cljs.core.Keyword(null,"on-write","on-write",31519475));
if(!(((node === (document["activeElement"]))) && (reagent.impl.template.has_selection_api_QMARK_.call(null,(node["type"]))) && (typeof rendered_value === 'string') && (typeof dom_value === 'string'))){
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_.call(null,on_write)){
return on_write.call(null,rendered_value);
} else {
return null;
}
} else {
var node_value = (node["value"]);
if(cljs.core.not_EQ_.call(null,node_value,dom_value)){
return reagent.impl.batching.do_after_render.call(null,((function (node_value,map__46660,map__46660__$1,on_write){
return (function (){
return reagent.impl.template.input_component_set_value.call(null,component);
});})(node_value,map__46660,map__46660__$1,on_write))
);
} else {
var existing_offset_from_end = (cljs.core.count.call(null,node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count.call(null,rendered_value) - existing_offset_from_end);
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_.call(null,on_write)){
on_write.call(null,rendered_value);
} else {
}

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
}
});
reagent.impl.template.input_component_set_value = (function reagent$impl$template$input_component_set_value(this$){
if(cljs.core.truth_((this$["cljsInputLive"]))){
(this$["cljsInputDirty"] = false);

var rendered_value = (this$["cljsRenderedValue"]);
var dom_value = (this$["cljsDOMValue"]);
var node = reagent.impl.template.find_dom_node.call(null,this$);
var synthetic_on_update = (this$["cljsSyntheticOnUpdate"]);
if(cljs.core.not_EQ_.call(null,rendered_value,dom_value)){
if(cljs.core.fn_QMARK_.call(null,synthetic_on_update)){
return synthetic_on_update.call(null,reagent.impl.template.input_node_set_value,node,rendered_value,dom_value,this$);
} else {
return reagent.impl.template.input_node_set_value.call(null,node,rendered_value,dom_value,this$,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return null;
}
} else {
return null;
}
});
reagent.impl.template.input_handle_change = (function reagent$impl$template$input_handle_change(this$,on_change,e){
(this$["cljsDOMValue"] = e.target.value);

if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

reagent.impl.batching.do_after_render.call(null,(function (){
return reagent.impl.template.input_component_set_value.call(null,this$);
}));
}

return on_change.call(null,e);
});
reagent.impl.template.input_render_setup = (function reagent$impl$template$input_render_setup(var_args){
var G__46678 = arguments.length;
switch (G__46678) {
case 3:
return reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$3 = (function (this$,jsprops,p__46681){
var map__46682 = p__46681;
var map__46682__$1 = ((((!((map__46682 == null)))?((((map__46682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46682):map__46682);
var synthetic_on_update = cljs.core.get.call(null,map__46682__$1,new cljs.core.Keyword(null,"synthetic-on-update","synthetic-on-update",1615571932));
var synthetic_on_change = cljs.core.get.call(null,map__46682__$1,new cljs.core.Keyword(null,"synthetic-on-change","synthetic-on-change",-2073813537));
if(cljs.core.truth_((function (){var and__30060__auto__ = !((jsprops == null));
if(and__30060__auto__){
var and__30060__auto____$1 = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__30060__auto____$1)){
return jsprops.hasOwnProperty("value");
} else {
return and__30060__auto____$1;
}
} else {
return and__30060__auto__;
}
})())){
if(cljs.core.truth_(reagent.impl.template.find_dom_node)){
} else {
throw (new Error(["Assert failed: ","reagent.dom needs to be loaded for controlled input to work","\n","find-dom-node"].join('')));
}

if(cljs.core.truth_(synthetic_on_update)){
(this$["cljsSyntheticOnUpdate"] = synthetic_on_update);
} else {
}

var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
var on_change__$1 = (cljs.core.truth_(synthetic_on_change)?cljs.core.partial.call(null,synthetic_on_change,on_change):on_change);
if(cljs.core.truth_((this$["cljsInputLive"]))){
} else {
(this$["cljsInputLive"] = true);

(this$["cljsDOMValue"] = value);
}

(this$["cljsRenderedValue"] = value);

delete jsprops["value"];

var G__46685 = jsprops;
(G__46685["defaultValue"] = value);

(G__46685["onChange"] = ((function (G__46685,v,value,on_change,on_change__$1,map__46682,map__46682__$1,synthetic_on_update,synthetic_on_change){
return (function (p1__46676_SHARP_){
return reagent.impl.template.input_handle_change.call(null,this$,on_change__$1,p1__46676_SHARP_);
});})(G__46685,v,value,on_change,on_change__$1,map__46682,map__46682__$1,synthetic_on_update,synthetic_on_change))
);

return G__46685;
} else {
return null;
}
});

reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$2 = (function (this$,jsprops){
return reagent.impl.template.input_render_setup.call(null,this$,jsprops,cljs.core.PersistentArrayMap.EMPTY);
});

reagent.impl.template.input_render_setup.cljs$lang$maxFixedArity = 3;

reagent.impl.template.input_unmount = (function reagent$impl$template$input_unmount(this$){
return (this$["cljsInputLive"] = null);
});
reagent.impl.template.input_component_QMARK_ = (function reagent$impl$template$input_component_QMARK_(x){
var G__46690 = x;
switch (G__46690) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.reagent_synthetic_input_class = null;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.template.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup.call(null,this$,jsprops);

return reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child);
})], null);
reagent.impl.template.synthetic_input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentSyntheticInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.template.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (on_update,on_change,argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup.call(null,this$,jsprops,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"synthetic-on-update","synthetic-on-update",1615571932),on_update,new cljs.core.Keyword(null,"synthetic-on-change","synthetic-on-change",-2073813537),on_change], null));

return reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child);
})], null);
reagent.impl.template.reagent_input = (function reagent$impl$template$reagent_input(){
if((reagent.impl.template.reagent_input_class == null)){
reagent.impl.template.reagent_input_class = reagent.impl.component.create_class.call(null,reagent.impl.template.input_spec);
} else {
}

return reagent.impl.template.reagent_input_class;
});
reagent.impl.template.reagent_synthetic_input = (function reagent$impl$template$reagent_synthetic_input(){
if((reagent.impl.template.reagent_synthetic_input_class == null)){
reagent.impl.template.reagent_synthetic_input_class = reagent.impl.component.create_class.call(null,reagent.impl.template.synthetic_input_spec);
} else {
}

return reagent.impl.template.reagent_synthetic_input_class;
});
reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__46743 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__46743,(0),null);
var id = cljs.core.nth.call(null,vec__46743,(1),null);
var class$ = cljs.core.nth.call(null,vec__46743,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace.call(null,class$,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))].join('')),"\n","tag"].join('')));
}

return ({"name": tag, "id": id, "className": class$__$1});
});
reagent.impl.template.try_get_key = (function reagent$impl$template$try_get_key(x){
try{return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e46754){var e = e46754;
return null;
}});
reagent.impl.template.get_key = (function reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
return reagent.impl.template.try_get_key.call(null,x);
} else {
return null;
}
});
reagent.impl.template.key_from_vec = (function reagent$impl$template$key_from_vec(v){
var temp__5280__auto__ = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,v));
if((temp__5280__auto__ == null)){
return reagent.impl.template.get_key.call(null,cljs.core.nth.call(null,v,(1),null));
} else {
var k = temp__5280__auto__;
return k;
}
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v){
var c = reagent.impl.component.as_class.call(null,tag);
var jsprops = ({"argv": v});
var temp__5282__auto___46762 = reagent.impl.template.key_from_vec.call(null,v);
if((temp__5282__auto___46762 == null)){
} else {
var key_46763 = temp__5282__auto___46762;
(jsprops["key"] = key_46763);
}

return reagent.impl.template.node$module$react.createElement.call(null,c,jsprops);
});
reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(var_args){
var G__46767 = arguments.length;
switch (G__46767) {
case 2:
return reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$2 = (function (c,p__46769){
var map__46770 = p__46769;
var map__46770__$1 = ((((!((map__46770 == null)))?((((map__46770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46770):map__46770);
var synthetic_input = cljs.core.get.call(null,map__46770__$1,new cljs.core.Keyword(null,"synthetic-input","synthetic-input",-135147697));
var on_update = new cljs.core.Keyword(null,"on-update","on-update",1680216496).cljs$core$IFn$_invoke$arity$1(synthetic_input);
var on_change = new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(synthetic_input);
if(cljs.core.truth_(synthetic_input)){
if(cljs.core.fn_QMARK_.call(null,on_update)){
} else {
throw (new Error("Assert failed: (fn? on-update)"));
}

if(cljs.core.fn_QMARK_.call(null,on_change)){
} else {
throw (new Error("Assert failed: (fn? on-change)"));
}
} else {
}

var wrapped = (function (){var G__46773 = reagent.impl.template.__GT_NativeWrapper.call(null);
(G__46773["name"] = c);

(G__46773["id"] = null);

(G__46773["class"] = null);

return G__46773;
})();
var wrapped__$1 = (cljs.core.truth_(synthetic_input)?(function (){var G__46774 = wrapped;
(G__46774["syntheticInput"] = true);

return G__46774;
})():wrapped);
var wrapped__$2 = (cljs.core.truth_(synthetic_input)?(function (){var G__46775 = wrapped__$1;
(G__46775["syntheticOnChange"] = on_change);

return G__46775;
})():wrapped__$1);
var wrapped__$3 = (cljs.core.truth_(synthetic_input)?(function (){var G__46776 = wrapped__$2;
(G__46776["syntheticOnUpdate"] = on_update);

return G__46776;
})():wrapped__$2);
return wrapped__$3;
});

reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$1 = (function (c){
return reagent.impl.template.adapt_react_class.call(null,c,cljs.core.PersistentArrayMap.EMPTY);
});

reagent.impl.template.adapt_react_class.cljs$lang$maxFixedArity = 2;

reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(x){
var temp__5280__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.tag_name_cache,x);
if((temp__5280__auto__ == null)){
return (reagent.impl.template.tag_name_cache[x] = reagent.impl.template.parse_tag.call(null,x));
} else {
var s = temp__5280__auto__;
return s;
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var synthetic_input = (parsed["syntheticInput"]);
var props = cljs.core.nth.call(null,argv,first,null);
var hasprops = ((props == null)) || (cljs.core.map_QMARK_.call(null,props));
var jsprops = reagent.impl.template.convert_props.call(null,((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(cljs.core.truth_((function (){var or__30072__auto__ = synthetic_input;
if(cljs.core.truth_(or__30072__auto__)){
return or__30072__auto__;
} else {
return reagent.impl.template.input_component_QMARK_.call(null,comp);
}
})())){
return reagent.impl.template.as_element.call(null,cljs.core.with_meta.call(null,(cljs.core.truth_(synthetic_input)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_synthetic_input.call(null),(parsed["syntheticOnUpdate"]),(parsed["syntheticOnChange"]),argv,comp,jsprops,first_child], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input.call(null),argv,comp,jsprops,first_child], null)),cljs.core.meta.call(null,argv)));
} else {
var key = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,argv));
var p = (((key == null))?jsprops:reagent.impl.template.oset.call(null,jsprops,"key",key));
return reagent.impl.template.make_element.call(null,argv,comp,p,first_child);
}
});
reagent.impl.template.str_coll = (function reagent$impl$template$str_coll(coll){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk.call(null,(function (x){
if(cljs.core.fn_QMARK_.call(null,x)){
var n = reagent.impl.util.fun_name.call(null,x);
var G__46831 = n;
switch (G__46831) {
case "":
return x;

break;
default:
return cljs.core.symbol.call(null,n);

}
} else {
return x;
}
}),coll))].join('');

});
reagent.impl.template.hiccup_err = (function reagent$impl$template$hiccup_err(var_args){
var args__31356__auto__ = [];
var len__31349__auto___46847 = arguments.length;
var i__31350__auto___46848 = (0);
while(true){
if((i__31350__auto___46848 < len__31349__auto___46847)){
args__31356__auto__.push((arguments[i__31350__auto___46848]));

var G__46849 = (i__31350__auto___46848 + (1));
i__31350__auto___46848 = G__46849;
continue;
} else {
}
break;
}

var argseq__31357__auto__ = ((((1) < args__31356__auto__.length))?(new cljs.core.IndexedSeq(args__31356__auto__.slice((1)),(0),null)):null);
return reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31357__auto__);
});

reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,msg)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.template.str_coll.call(null,v)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))].join('');
});

reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1);

reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq46838){
var G__46839 = cljs.core.first.call(null,seq46838);
var seq46838__$1 = cljs.core.next.call(null,seq46838);
return reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(G__46839,seq46838__$1);
});

reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count.call(null,v) > (0))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.template.hiccup_err.call(null,v,"Hiccup form should not be empty")),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.call(null,v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_.call(null,tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup form")),"\n","(valid-tag? tag)"].join('')));
}

if(reagent.impl.template.hiccup_tag_QMARK_.call(null,tag)){
var n = cljs.core.name.call(null,tag);
var pos = n.indexOf(">");
var G__46855 = pos;
switch (G__46855) {
case (-1):
return reagent.impl.template.native_element.call(null,reagent.impl.template.cached_parse.call(null,n),v,(1));

break;
case (0):
var comp = cljs.core.nth.call(null,v,(1),null);
if(cljs.core._EQ_.call(null,">",n)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup tag")),"\n","(= \">\" n)"].join('')));
}

if((typeof comp === 'string') || (cljs.core.fn_QMARK_.call(null,comp))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.template.hiccup_err.call(null,v,"Expected React component in")),"\n","(or (string? comp) (fn? comp))"].join('')));
}

return reagent.impl.template.native_element.call(null,({"name": comp}),v,(2));

break;
default:
var G__46867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,n,(0),pos),cljs.core.assoc.call(null,v,(0),cljs.core.subs.call(null,n,(pos + (1))))], null);
v = G__46867;
continue;

}
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element.call(null,tag,v,(1));
} else {
return reagent.impl.template.reag_element.call(null,tag,v);

}
}
break;
}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(x){
if(reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return reagent.impl.template.vec_to_elem.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return reagent.impl.template.expand_seq_check.call(null,x);

} else {
if(reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.call(null,x);
} else {
return x;

}
}
}
}
}
});
reagent.impl.component.as_element = reagent.impl.template.as_element;
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.call(null,s);
var n__31115__auto___46885 = a.length;
var i_46886 = (0);
while(true){
if((i_46886 < n__31115__auto___46885)){
(a[i_46886] = reagent.impl.template.as_element.call(null,(a[i_46886])));

var G__46887 = (i_46886 + (1));
i_46886 = G__46887;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.call(null,s);
var n__31115__auto___46890 = a.length;
var i_46891 = (0);
while(true){
if((i_46891 < n__31115__auto___46890)){
var val_46892 = (a[i_46891]);
if((cljs.core.vector_QMARK_.call(null,val_46892)) && ((reagent.impl.template.key_from_vec.call(null,val_46892) == null))){
(o["no-key"] = true);
} else {
}

(a[i_46891] = reagent.impl.template.as_element.call(null,val_46892));

var G__46895 = (i_46891 + (1));
i_46891 = G__46895;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__46896 = reagent.ratom.check_derefs.call(null,((function (ctx){
return (function (){
return reagent.impl.template.expand_seq_dev.call(null,x,ctx);
});})(ctx))
);
var res = cljs.core.nth.call(null,vec__46896,(0),null);
var derefed = cljs.core.nth.call(null,vec__46896,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.template.hiccup_err.call(null,x,"Reactive deref not supported in lazy seq, ","it should be wrapped in doall"))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.template.hiccup_err.call(null,x,"Every element in a seq should have a unique :key"))].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__46932 = (cljs.core.count.call(null,argv) - first_child);
switch (G__46932) {
case (0):
return reagent.impl.template.node$module$react.createElement.call(null,comp,jsprops);

break;
case (1):
return reagent.impl.template.node$module$react.createElement.call(null,comp,jsprops,reagent.impl.template.as_element.call(null,cljs.core.nth.call(null,argv,first_child,null)));

break;
default:
return reagent.impl.template.node$module$react.createElement.apply(null,cljs.core.reduce_kv.call(null,((function (G__46932){
return (function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element.call(null,v));
} else {
}

return a;
});})(G__46932))
,[comp,jsprops],argv));

}
});

//# sourceMappingURL=template.js.map?rel=1510229231306
