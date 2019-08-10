# jskey-webview

The aim of this project is to provide a webview that I can use with my other jskey tools to create and maintain websites. As of this writing this is still very much a work in progress, but will try to keep this readme up to date as I move forward with it.

## Server command

So start a server for a given jskey project folder user the server sub command with the -t option to set the target folder to host. The default port is 8080, but another port can be set with the -p option.

```
$ jskey-webview server -p 8000 -t site_foo
```
