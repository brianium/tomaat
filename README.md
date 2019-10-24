# Tomaat

An electron app written in ClojureScript. Integrates with Slack to let people know you
are doing great things! Uses [reagent](http://reagent-project.github.io/) for the UI.

<p align="center">
  <img src="tomaat-example.gif?raw=true" alt="Tomaat example" />
</p>

## Features

* 25 minute pomodoro timer
* Update Slack profile with tomato while pom is in progress
* Send a Slack notification when pomodoro is complete
* Pause Slack notifications while pomodoro is running
* Play a sound when time is up (useful if Slack is not configured)
* Timer visible in tray!

Slack usage is optional, but if configured - your profile will be updated like so:

<p align="center">
  <img src="slack-screenshot.png?raw=true" alt="Slack with updated profile" />
</p>

## Development
Tomaat uses [lein-figwheel](https://github.com/bhauman/lein-figwheel) for hot reloading of *all*
source files. Since Tomaat leverages electron apis across the board - all builds target `:nodejs`.

To start development process:

```
$ lein start
$ lein electron
```

*Note*: figwheel requires the `ws` node module for node targets. I opted to install this globally:

```
$ npm install -g ws
```

### Project structure
All source files are under `src/tomaat`, and several build targets are laid out in `project.clj`. Tomaat follows
a structure that allows for the main electron process, a renderer process, and a worker process.

The worker process runs as an invisible window for the purpose of running the timer, persisting config, and interacting
with slack.

## Building
Tomaat is packaged using [electron-packager](https://github.com/electron-userland/electron-packager). It has currently
only been built and tested on macOS.

Just use `make` to build Tomaat.

```
$ make
```

## Todo
- [ ] webview for fetching slack token
- [ ] test and build for other operating systems
