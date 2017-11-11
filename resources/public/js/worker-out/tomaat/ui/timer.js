// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('tomaat.ui.timer');
goog.require('cljs.core');
goog.require('tomaat.ui.worker');
/**
 * Starts the timer in the worker process
 */
tomaat.ui.timer.start_timer = (function tomaat$ui$timer$start_timer(){
return tomaat.ui.worker.message_BANG_.call(null,"start-timer");
});
/**
 * Stops the timer in the worker process
 */
tomaat.ui.timer.stop_timer = (function tomaat$ui$timer$stop_timer(){
return tomaat.ui.worker.message_BANG_.call(null,"stop-timer");
});

//# sourceMappingURL=timer.js.map?rel=1510360395357
