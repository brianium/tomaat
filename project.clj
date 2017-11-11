(defproject tomaat "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.9.0-alpha17"]
                 [org.clojure/clojurescript "1.9.908"]
                 [org.clojure/core.async  "0.3.443"]
                 [cljsjs/nodejs-externs "1.0.4-1"]
                 [cljs-http "0.1.44"]
                 [reagent "0.8.0-alpha2"]]

  :plugins [[lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]
            [lein-cooper "1.2.2"]
            [lein-shell "0.5.0"]
            [lein-figwheel "0.5.14"]]

  :source-paths ["src"]

  :cljsbuild {:builds
              [{:id           "main-dev"
                :source-paths ["src/tomaat"]
                :figwheel     {:on-jsload "tomaat.main.core/reload"}
                :compiler     {:main           tomaat.main.core
                               :output-to      "resources/main.js"
                               :output-dir     "resources/public/js/main-out"
                               :optimizations  :none
                               :install-deps   true
                               :target         :nodejs
                               :parallel-build true
                               :source-map     true
                               :npm-deps       {:electron "1.8.1"
                                                :ws       "3.3.1"}}}

               {:id           "main"
                :source-paths ["src/tomaat"]
                :compiler     {:main           tomaat.main.core
                               :optimizations  :simple
                               :output-to      "resources/main.js"
                               :output-dir     "resources/public/js/main/out"
                               :install-deps   true
                               :target         :nodejs
                               :parallel-build true
                               :process-shim   true
                               :pretty-print   false
                               :npm-deps       {:electron "1.8.1"}}}

               {:id           "ui-dev"
                :source-paths ["src/tomaat"]
                :figwheel     true
                :compiler     {:main           tomaat.ui.core
                               :output-to      "resources/public/js/ui.js"
                               :output-dir     "resources/public/js/ui-out"
                               :optimizations  :none
                               :install-deps   true
                               :hashbang       false
                               :target         :nodejs
                               :parallel-build true
                               :source-map     true
                               :npm-deps       {:electron           "1.8.1"
                                                :react              "15.6.2"
                                                :react-dom          "15.6.2"
                                                :create-react-class "15.6.2"}}}

               {:id           "ui"
                :source-paths ["src/tomaat"]
                :compiler     {:main           tomaat.ui.core
                               :optimizations  :simple
                               :output-to      "resources/public/js/ui.js"
                               :output-dir     "resources/public/js/ui/out"
                               :install-deps   true
                               :target         :nodejs
                               :hashbang       false
                               :parallel-build true
                               :process-shim   true
                               :pretty-print   false
                               :npm-deps       {:electron           "1.8.1"
                                                :react              "15.6.2"
                                                :react-dom          "15.6.2"
                                                :create-react-class "15.6.2"}}}

               {:id           "worker-dev"
                :source-paths ["src/tomaat"]
                :figwheel     true
                :compiler     {:main           tomaat.worker.core
                               :output-to      "resources/public/js/worker.js"
                               :output-dir     "resources/public/js/worker-out"
                               :optimizations  :none
                               :install-deps   true
                               :hashbang       false
                               :target         :nodejs
                               :parallel-build true
                               :npm-deps       {:electron "1.8.1"}}}

               {:id           "worker"
                :source-paths ["src/tomaat"]
                :compiler     {:main           tomaat.worker.core
                               :optimizations  :simple
                               :output-to      "resources/public/js/worker.js"
                               :output-dir     "resources/public/js/worker/out"                               
                               :install-deps   true
                               :hashbang       false
                               :process-shim   true
                               :target         :nodejs
                               :parallel-build true
                               :pretty-print   false
                               :npm-deps       {:electron "1.8.1"}}}]}

  :aliases {"electron" ["shell" "node_modules/.bin/electron" "resources/main.js"]
            "build"    ["do" "clean" ["cljsbuild" "once" "main" "ui" "worker"]]}

  :figwheel {:css-dirs         ["resources/public/css"]
             :nrepl-port       7888
             :nrepl-middleware ["cider.nrepl/cider-middleware"
                                "cemerick.piggieback/wrap-cljs-repl"]}

  ;; Setting up nREPL for Figwheel and ClojureScript dev
  ;; Please see:
  ;; https://github.com/bhauman/lein-figwheel/wiki/Using-the-Figwheel-REPL-within-NRepl
  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.13"]
                                  [com.cemerick/piggieback "0.2.2"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src/tomaat" "dev"]
                   :plugins      [[cider/cider-nrepl "0.15.1-SNAPSHOT"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                   :clean-targets ^{:protect false} ["resources/main.js"
                                                     "resources/public/js"
                                                     :target-path]}})
