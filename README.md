# sonicnode

node js script for watching files to send to a sonic pi ruby server.

## Sonic Pi Ruby Server

First get sonic-pi-server.rb running by itself. I use that horrible piserve.bat file for now.

## Code Watcher Install

`npm install`

## Run Code Watcher

`npm start`

This will watch a file called 'music.spi' and send it to Sonic Pi when it's saved.

The file will be created if it doesn't exist.

You'll want to associate .spi files with Ruby in your editor to get highlighting and other features.
