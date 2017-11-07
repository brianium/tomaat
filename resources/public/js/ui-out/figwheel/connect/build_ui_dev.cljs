(ns figwheel.connect.build-ui-dev (:require [ui.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "ui-dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

