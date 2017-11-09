(ns figwheel.connect.build-main-dev (:require [main.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/main.core.reload (apply js/main.core.reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'main.core/reload' is missing"))), :build-id "main-dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

