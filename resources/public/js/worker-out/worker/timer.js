// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('worker.timer');
goog.require('cljs.core');
goog.require('worker.util');
if(typeof worker.timer._STAR_time !== 'undefined'){
} else {
worker.timer._STAR_time = cljs.core.atom.call(null,(1500));
}
if(typeof worker.timer._STAR_interval !== 'undefined'){
} else {
worker.timer._STAR_interval = cljs.core.atom.call(null,null);
}
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
worker.timer.time_changed = (function worker$timer$time_changed(contents,time){
return contents.send("time-changed",cljs.core.clj__GT_js.call(null,worker.timer.minutes_and_seconds.call(null,time)));
});
worker.timer.start = (function worker$timer$start(event,id){
var contents = worker.util.web_contents.call(null,id);
cljs.core.add_watch.call(null,worker.timer._STAR_time,new cljs.core.Keyword(null,"time-changed","time-changed",-1355380253),((function (contents){
return (function (p1__19739_SHARP_,p2__19740_SHARP_,p3__19741_SHARP_,p4__19738_SHARP_){
return worker.timer.time_changed.call(null,contents,p4__19738_SHARP_);
});})(contents))
);

return cljs.core.reset_BANG_.call(null,worker.timer._STAR_interval,setInterval(((function (contents){
return (function (){
return worker.timer.tick.call(null,worker.timer._STAR_time);
});})(contents))
,(1000)));
});
worker.timer.stop = (function worker$timer$stop(event,id){
var contents = worker.util.web_contents.call(null,id);
clearInterval(cljs.core.deref.call(null,worker.timer._STAR_interval));

cljs.core.reset_BANG_.call(null,worker.timer._STAR_interval,null);

cljs.core.reset_BANG_.call(null,worker.timer._STAR_time,(1500));

return cljs.core.remove_watch.call(null,worker.timer._STAR_time,new cljs.core.Keyword(null,"time-changed","time-changed",-1355380253));
});
