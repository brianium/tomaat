// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('worker.core');
goog.require('cljs.core');
goog.require('worker.electron');
goog.require('worker.timer');
goog.require('worker.settings');
goog.require('worker.slack');
worker.core.close_BANG_ = (function worker$core$close_BANG_(_,___$1){
return window.close();
});
worker.core.start = cljs.core.juxt.call(null,worker.timer.start,worker.slack.start_pomodoro);
worker.core.stop = cljs.core.juxt.call(null,worker.timer.stop,worker.slack.stop_pomodoro);
worker.electron.on.call(null,"start-timer",worker.core.start);
worker.electron.on.call(null,"stop-timer",worker.core.stop);
worker.electron.on.call(null,"update-settings",worker.settings.update_settings);
