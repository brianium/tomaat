// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('tomaat.ui.settings');
goog.require('cljs.core');
goog.require('tomaat.ui.worker');
/**
 * Tells the worker process to update a setting value
 */
tomaat.ui.settings.update_setting = (function tomaat$ui$settings$update_setting(k,v){
return tomaat.ui.worker.message_BANG_.call(null,"update-settings",cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)], null))));
});

//# sourceMappingURL=settings.js.map?rel=1510360378460
