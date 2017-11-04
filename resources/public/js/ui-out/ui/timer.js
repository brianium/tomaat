// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('ui.timer');
goog.require('cljs.core');
goog.require('ui.worker');
if(typeof ui.timer._STAR_worker !== 'undefined'){
} else {
ui.timer._STAR_worker = cljs.core.atom.call(null,null);
}
ui.timer.send_start_timer = (function ui$timer$send_start_timer(worker){
return ui.worker.send.call(null,worker,"start-timer");
});
ui.timer.start_timer = (function ui$timer$start_timer(){
return cljs.core.reset_BANG_.call(null,ui.timer._STAR_worker,ui.worker.create_worker.call(null,ui.timer.send_start_timer));
});
ui.timer.stop_timer = (function ui$timer$stop_timer(){
return ui.worker.send.call(null,cljs.core.deref.call(null,ui.timer._STAR_worker),"stop-timer");
});
