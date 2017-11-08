// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('worker.timer');
goog.require('cljs.core');
goog.require('worker.util');
goog.require('worker.slack');
worker.timer.timer_length = (1500);
if(typeof worker.timer._STAR_time !== 'undefined'){
} else {
worker.timer._STAR_time = cljs.core.atom.call(null,worker.timer.timer_length);
}
if(typeof worker.timer._STAR_interval !== 'undefined'){
} else {
worker.timer._STAR_interval = cljs.core.atom.call(null,null);
}
/**
 * Decrement the current time by one second
 */
worker.timer.tick = (function worker$timer$tick(_STAR_time){
return cljs.core.swap_BANG_.call(null,_STAR_time,cljs.core.dec);
});
/**
 * Given the time in seconds returns a minute value and a seconds value
 *   as a vector
 */
worker.timer.minutes_and_seconds = (function worker$timer$minutes_and_seconds(time){
var minutes = Math.floor((time / (60)));
var seconds = (time - (minutes * (60)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minutes,seconds], null);
});
/**
 * Clears the interval being used to 'tick' the timer
 */
worker.timer.clear_interval = (function worker$timer$clear_interval(){
clearInterval(cljs.core.deref.call(null,worker.timer._STAR_interval));

return cljs.core.reset_BANG_.call(null,worker.timer._STAR_interval,null);
});
/**
 * Stops the timer by clearing the interval, resetting the timer, and clearing
 *   the watcher notifying the renderer process
 */
worker.timer.stop = (function worker$timer$stop(var_args){
var G__54346 = arguments.length;
switch (G__54346) {
case 0:
return worker.timer.stop.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return worker.timer.stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

worker.timer.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
worker.timer.clear_interval.call(null);

cljs.core.reset_BANG_.call(null,worker.timer._STAR_time,worker.timer.timer_length);

return cljs.core.remove_watch.call(null,worker.timer._STAR_time,new cljs.core.Keyword(null,"time-changed","time-changed",-1355380253));
});

worker.timer.stop.cljs$core$IFn$_invoke$arity$2 = (function (event,id){
return worker.timer.stop.call(null);
});

worker.timer.stop.cljs$lang$maxFixedArity = 2;

/**
 * Monitors changes to time state. Notifies the renderer process when time has changed.
 *   When the timer is complete - the interval is cleared and a small timeout is issued
 *   before resetting time state
 */
worker.timer.time_changed = (function worker$timer$time_changed(contents,time){
contents.send("time-changed",cljs.core.clj__GT_js.call(null,worker.timer.minutes_and_seconds.call(null,time)));

if(cljs.core._EQ_.call(null,(0),time)){
contents.send("timer-complete");

worker.slack.complete_pomodoro.call(null);

worker.timer.clear_interval.call(null);

return setTimeout(worker.timer.stop,(2500));
} else {
return null;
}
});
/**
 * Starts the timer interval and adds a watch that notifies the renderer process
 */
worker.timer.start = (function worker$timer$start(event,id){
var contents = worker.util.web_contents.call(null,id);
cljs.core.add_watch.call(null,worker.timer._STAR_time,new cljs.core.Keyword(null,"time-changed","time-changed",-1355380253),((function (contents){
return (function (p1__54349_SHARP_,p2__54350_SHARP_,p3__54351_SHARP_,p4__54348_SHARP_){
return worker.timer.time_changed.call(null,contents,p4__54348_SHARP_);
});})(contents))
);

return cljs.core.reset_BANG_.call(null,worker.timer._STAR_interval,setInterval(((function (contents){
return (function (){
return worker.timer.tick.call(null,worker.timer._STAR_time);
});})(contents))
,(1000)));
});

//# sourceMappingURL=timer.js.map?rel=1510147137244
