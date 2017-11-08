// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('ui.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('data.core');
goog.require('ui.worker');
goog.require('ui.timer');
goog.require('ui.settings');
goog.require('ui.config');
goog.require('ui.main');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof ui.core._STAR_state !== 'undefined'){
} else {
ui.core._STAR_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978),false,new cljs.core.Keyword(null,"started?","started?",-1301062863),false,new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),(0)], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY], null));
}
/**
 * Changes the focused screen between the main and config screen
 */
ui.core.toggle_screen = (function ui$core$toggle_screen(e){
var flipped_QMARK_ = new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.core._STAR_state));
e.preventDefault();

if(cljs.core.truth_(flipped_QMARK_)){
return cljs.core.swap_BANG_.call(null,ui.core._STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978),false);
} else {
return cljs.core.swap_BANG_.call(null,ui.core._STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978),true);
}
});
ui.core.start = (function ui$core$start(){
cljs.core.swap_BANG_.call(null,ui.core._STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"started?","started?",-1301062863),true);

return ui.timer.start_timer.call(null);
});
ui.core.stop = (function ui$core$stop(){
cljs.core.swap_BANG_.call(null,ui.core._STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"started?","started?",-1301062863),false);

return ui.timer.stop_timer.call(null);
});
ui.core.update_setting = (function ui$core$update_setting(k,v){
cljs.core.swap_BANG_.call(null,ui.core._STAR_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),k], null),v);

return ui.settings.update_setting.call(null,k,v);
});
ui.worker.on.call(null,"time-changed",(function (p1__54678_SHARP_,p2__54677_SHARP_){
return cljs.core.swap_BANG_.call(null,ui.core._STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.js__GT_clj.call(null,p2__54677_SHARP_));
}));
ui.worker.on.call(null,"timer-complete",(function (){
return cljs.core.swap_BANG_.call(null,ui.core._STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"started?","started?",-1301062863),false);
}));
ui.core.tomaat = (function ui$core$tomaat(){
var state = cljs.core.deref.call(null,ui.core._STAR_state);
var started_QMARK_ = new cljs.core.Keyword(null,"started?","started?",-1301062863).cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["screen",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978).cljs$core$IFn$_invoke$arity$1(state))?" screen--flipped":null))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.main.main_screen,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),ui.core.toggle_screen,new cljs.core.Keyword(null,"start","start",-355208981),ui.core.start,new cljs.core.Keyword(null,"stop","stop",-2140911342),ui.core.stop,new cljs.core.Keyword(null,"started?","started?",-1301062863),started_QMARK_,new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(state)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.config.config_screen,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),ui.core.toggle_screen,new cljs.core.Keyword(null,"started?","started?",-1301062863),started_QMARK_,new cljs.core.Keyword(null,"update","update",1045576396),ui.core.update_setting,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(state)], null)], null)], null)], null);
});
ui.core.app = cljs.core.with_meta.call(null,ui.core.tomaat,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),cljs.core.swap_BANG_.call(null,ui.core._STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),data.core.read.call(null))], null));
ui.core._main = (function ui$core$_main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.app], null),document.body);
});
cljs.core._STAR_main_cli_fn_STAR_ = ui.core._main;

//# sourceMappingURL=core.js.map?rel=1510147683358
