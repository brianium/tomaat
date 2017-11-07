// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('ui.settings');
goog.require('cljs.core');
goog.require('ui.worker');
ui.settings.update_setting = (function ui$settings$update_setting(k,v){
return ui.worker.message_BANG_.call(null,"update-settings",cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)], null))));
});
