// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('tomaat.ui.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.dom');
goog.require('tomaat.data');
goog.require('tomaat.ui.worker');
goog.require('tomaat.ui.timer');
goog.require('tomaat.ui.settings');
goog.require('tomaat.ui.config');
goog.require('tomaat.ui.main');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof tomaat.ui.core._STAR_state !== 'undefined'){
} else {
tomaat.ui.core._STAR_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978),false,new cljs.core.Keyword(null,"started?","started?",-1301062863),false,new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),(0)], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY], null));
}
/**
 * Changes the focused screen between the main and config screen
 */
tomaat.ui.core.toggle_screen = (function tomaat$ui$core$toggle_screen(e){
var flipped_QMARK_ = new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tomaat.ui.core._STAR_state));
e.preventDefault();

if(cljs.core.truth_(flipped_QMARK_)){
return cljs.core.swap_BANG_.call(null,tomaat.ui.core._STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978),false);
} else {
return cljs.core.swap_BANG_.call(null,tomaat.ui.core._STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978),true);
}
});
tomaat.ui.core.start = (function tomaat$ui$core$start(){
cljs.core.swap_BANG_.call(null,tomaat.ui.core._STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"started?","started?",-1301062863),true);

return tomaat.ui.timer.start_timer.call(null);
});
tomaat.ui.core.stop = (function tomaat$ui$core$stop(){
cljs.core.swap_BANG_.call(null,tomaat.ui.core._STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"started?","started?",-1301062863),false);

return tomaat.ui.timer.stop_timer.call(null);
});
tomaat.ui.core.update_setting = (function tomaat$ui$core$update_setting(k,v){
cljs.core.swap_BANG_.call(null,tomaat.ui.core._STAR_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),k], null),v);

return tomaat.ui.settings.update_setting.call(null,k,v);
});
tomaat.ui.worker.on.call(null,"time-changed",(function (p1__59838_SHARP_,p2__59837_SHARP_){
return cljs.core.swap_BANG_.call(null,tomaat.ui.core._STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.js__GT_clj.call(null,p2__59837_SHARP_));
}));
tomaat.ui.worker.on.call(null,"timer-complete",(function (){
return cljs.core.swap_BANG_.call(null,tomaat.ui.core._STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"started?","started?",-1301062863),false);
}));
tomaat.ui.core.tomaat = (function tomaat$ui$core$tomaat(){
var state = cljs.core.deref.call(null,tomaat.ui.core._STAR_state);
var started_QMARK_ = new cljs.core.Keyword(null,"started?","started?",-1301062863).cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["screen",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978).cljs$core$IFn$_invoke$arity$1(state))?" screen--flipped":null))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tomaat.ui.main.main_screen,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),tomaat.ui.core.toggle_screen,new cljs.core.Keyword(null,"start","start",-355208981),tomaat.ui.core.start,new cljs.core.Keyword(null,"stop","stop",-2140911342),tomaat.ui.core.stop,new cljs.core.Keyword(null,"started?","started?",-1301062863),started_QMARK_,new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(state)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tomaat.ui.config.config_screen,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),tomaat.ui.core.toggle_screen,new cljs.core.Keyword(null,"started?","started?",-1301062863),started_QMARK_,new cljs.core.Keyword(null,"update","update",1045576396),tomaat.ui.core.update_setting,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(state)], null)], null)], null)], null);
});
tomaat.ui.core.app = cljs.core.with_meta.call(null,tomaat.ui.core.tomaat,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),cljs.core.swap_BANG_.call(null,tomaat.ui.core._STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),tomaat.data.read.call(null))], null));
tomaat.ui.core._main = (function tomaat$ui$core$_main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tomaat.ui.core.app], null),goog.dom.getElement("tomaat"));
});
cljs.core._STAR_main_cli_fn_STAR_ = tomaat.ui.core._main;

//# sourceMappingURL=core.js.map?rel=1510361079965
