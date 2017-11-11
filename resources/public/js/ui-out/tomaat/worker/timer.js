// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('tomaat.worker.timer');
goog.require('cljs.core');
goog.require('tomaat.worker.util');
goog.require('tomaat.worker.slack');
tomaat.worker.timer.timer_length = (1500);
if(typeof tomaat.worker.timer._STAR_time !== 'undefined'){
} else {
tomaat.worker.timer._STAR_time = cljs.core.atom.call(null,tomaat.worker.timer.timer_length);
}
if(typeof tomaat.worker.timer._STAR_interval !== 'undefined'){
} else {
tomaat.worker.timer._STAR_interval = cljs.core.atom.call(null,null);
}
/**
 * Decrement the current time by one second
 */
tomaat.worker.timer.tick = (function tomaat$worker$timer$tick(_STAR_time){
return cljs.core.swap_BANG_.call(null,_STAR_time,cljs.core.dec);
});
/**
 * Given the time in seconds returns a minute value and a seconds value
 *   as a vector
 */
tomaat.worker.timer.minutes_and_seconds = (function tomaat$worker$timer$minutes_and_seconds(time){
var minutes = Math.floor((time / (60)));
var seconds = (time - (minutes * (60)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minutes,seconds], null);
});
/**
 * Clears the interval being used to 'tick' the timer
 */
tomaat.worker.timer.clear_interval = (function tomaat$worker$timer$clear_interval(){
clearInterval(cljs.core.deref.call(null,tomaat.worker.timer._STAR_interval));

return cljs.core.reset_BANG_.call(null,tomaat.worker.timer._STAR_interval,null);
});
/**
 * Stops the timer by clearing the interval, resetting the timer, and clearing
 *   the watcher notifying the renderer process
 */
tomaat.worker.timer.stop = (function tomaat$worker$timer$stop(var_args){
var G__51200 = arguments.length;
switch (G__51200) {
case 0:
return tomaat.worker.timer.stop.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return tomaat.worker.timer.stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tomaat.worker.timer.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
tomaat.worker.timer.clear_interval.call(null);

cljs.core.reset_BANG_.call(null,tomaat.worker.timer._STAR_time,tomaat.worker.timer.timer_length);

return cljs.core.remove_watch.call(null,tomaat.worker.timer._STAR_time,new cljs.core.Keyword(null,"time-changed","time-changed",-1355380253));
});

tomaat.worker.timer.stop.cljs$core$IFn$_invoke$arity$2 = (function (event,id){
return tomaat.worker.timer.stop.call(null);
});

tomaat.worker.timer.stop.cljs$lang$maxFixedArity = 2;

/**
 * Monitors changes to time state. Notifies the renderer process when time has changed.
 *   When the timer is complete - the interval is cleared and a small timeout is issued
 *   before resetting time state
 */
tomaat.worker.timer.time_changed = (function tomaat$worker$timer$time_changed(contents,time){
contents.send("time-changed",cljs.core.clj__GT_js.call(null,tomaat.worker.timer.minutes_and_seconds.call(null,time)));

if(cljs.core._EQ_.call(null,(0),time)){
contents.send("timer-complete");

tomaat.worker.slack.complete_pomodoro.call(null);

tomaat.worker.timer.clear_interval.call(null);

return setTimeout(tomaat.worker.timer.stop,(2500));
} else {
return null;
}
});
/**
 * Starts the timer interval and adds a watch that notifies the renderer process
 */
tomaat.worker.timer.start = (function tomaat$worker$timer$start(event,id){
var contents = tomaat.worker.util.web_contents.call(null,id);
cljs.core.add_watch.call(null,tomaat.worker.timer._STAR_time,new cljs.core.Keyword(null,"time-changed","time-changed",-1355380253),((function (contents){
return (function (p1__51212_SHARP_,p2__51213_SHARP_,p3__51214_SHARP_,p4__51211_SHARP_){
return tomaat.worker.timer.time_changed.call(null,contents,p4__51211_SHARP_);
});})(contents))
);

return cljs.core.reset_BANG_.call(null,tomaat.worker.timer._STAR_interval,setInterval(((function (contents){
return (function (){
return tomaat.worker.timer.tick.call(null,tomaat.worker.timer._STAR_time);
});})(contents))
,(1000)));
});

//# sourceMappingURL=timer.js.map?rel=1510360406315
