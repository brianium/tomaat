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
                 [reagent "0.8.0-alpha2"]]

  :plugins [[lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]
            [lein-cooper "1.2.2"]
            [lein-shell "0.5.0"]
            [lein-figwheel "0.5.14"]]

  :source-paths ["src"]

  :cljsbuild {:builds
              [{:id           "electron"
                :source-paths ["src/main"]
                :compiler     {:main           main.core
                               :output-to      "resources/main.js"
                               :output-dir     "resources/public/js/main-out"
                               ;; anything other than simple seems to jack things up
                               :optimizations  :simple
                               :cache-analysis true
                               :pretty-print   true
                               :install-deps   true
                               :target         :nodejs
                               :npm-deps       {:electron "1.8.1"}}}

               {:id           "ui-dev"
                :source-paths ["src/ui" "src/data"]
                :figwheel     true
                :compiler     {:main          ui.core
                               :output-to     "resources/public/js/ui.js"
                               :output-dir    "resources/public/js/ui-out"
                               :optimizations :none
                               :install-deps  true
                               :hashbang      false
                               :target        :nodejs
                               :source-map    true
                               :npm-deps      {:electron "1.8.1"
                                               :react "15.6.2"
                                               :react-dom "15.6.2"
                                               :create-react-class "15.6.2"}}}

               {:id           "worker-dev"
                :source-paths ["src/worker" "src/data"]
                :compiler     {:main          worker.core
                               :output-to     "resources/public/js/worker.js"
                               :output-dir    "resources/public/js/worker-out"
                               :asset-path    "js/worker-out"
                               :optimizations :simple
                               :install-deps  true
                               :hashbang      false
                               :target        :nodejs
                               :npm-deps      {:electron "1.8.1"}}}]}

  :aliases {"electron" ["shell" "node_modules/.bin/electron" "resources/main.js"]}

  :figwheel {:css-dirs ["resources/public/css"]
             :nrepl-port 7888
             :nrepl-middleware ["cider.nrepl/cider-middleware"
                                "cemerick.piggieback/wrap-cljs-repl"]}

  ;; Setting up nREPL for Figwheel and ClojureScript dev
  ;; Please see:
  ;; https://github.com/bhauman/lein-figwheel/wiki/Using-the-Figwheel-REPL-within-NRepl
  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.4"]
                                  [figwheel-sidecar "0.5.13"]
                                  [com.cemerick/piggieback "0.2.2"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src/ui" "src/worker" "src/data" "dev"]
                   :plugins      [[cider/cider-nrepl "0.15.1-SNAPSHOT"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                   :clean-targets ^{:protect false} ["resources/main.js"
                                                     "resources/public/js"
                                                     :target-path]}})
