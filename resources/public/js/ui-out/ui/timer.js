// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('ui.timer');
goog.require('cljs.core');
goog.require('ui.worker');
/**
 * Starts the timer in the worker process
 */
ui.timer.start_timer = (function ui$timer$start_timer(){
return ui.worker.message_BANG_.call(null,"start-timer");
});
/**
 * Stops the timer in the worker process
 */
ui.timer.stop_timer = (function ui$timer$stop_timer(){
return ui.worker.message_BANG_.call(null,"stop-timer");
});

//# sourceMappingURL=timer.js.map?rel=1510229230875
