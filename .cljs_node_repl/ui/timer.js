// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('ui.timer');
goog.require('cljs.core');
goog.require('ui.worker');
ui.timer.send_start_timer = (function ui$timer$send_start_timer(worker__$1,id){
return ui.worker.send.call(null,worker__$1,id,"start-timer");
});
ui.timer.send_stop_timer = (function ui$timer$send_stop_timer(work,id){
return ui.worker.send.call(null,ui.timer.worker,id,"stop-timer");
});
ui.timer.start_timer = (function ui$timer$start_timer(){
return ui.worker.message.call(null,ui.timer.send_start_timer);
});
ui.timer.stop_timer = (function ui$timer$stop_timer(){
return ui.worker.message.call(null,ui.timer.send_stop_timer);
});

//# sourceMappingURL=timer.js.map
