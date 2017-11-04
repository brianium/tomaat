// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('ui.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ui.worker');
goog.require('ui.timer');
goog.require('ui.config');
goog.require('ui.main');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof ui.core._STAR_state !== 'undefined'){
} else {
ui.core._STAR_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978),false,new cljs.core.Keyword(null,"started?","started?",-1301062863),false,new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),(0)], null)], null));
}
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
ui.core.app = (function ui$core$app(){
var state = cljs.core.deref.call(null,ui.core._STAR_state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["screen",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"flipped?","flipped?",-1554284978).cljs$core$IFn$_invoke$arity$1(state))?" screen--flipped":null))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.main.main_screen,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),ui.core.toggle_screen,new cljs.core.Keyword(null,"start","start",-355208981),ui.core.start,new cljs.core.Keyword(null,"stop","stop",-2140911342),ui.core.stop,new cljs.core.Keyword(null,"started?","started?",-1301062863),new cljs.core.Keyword(null,"started?","started?",-1301062863).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(state)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.config.config_screen,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),ui.core.toggle_screen], null)], null)], null)], null);
});
ui.worker.on.call(null,"time-changed",(function (p1__46382_SHARP_,p2__46381_SHARP_){
return cljs.core.swap_BANG_.call(null,ui.core._STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.js__GT_clj.call(null,p2__46381_SHARP_));
}));
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.app], null),document.body);
