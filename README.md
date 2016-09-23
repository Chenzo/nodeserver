# Chenzo's First Node.JS and ExpressJS server

*I did the tutorials, now lets just jump in to the deep end*

The intial steps were:


```bash
$ mkdir nodeserver
$ cd nodeserver
$ npm init
$ npm install express --save
```

To run it, navigate to the nodeserver directory and then:

```bash
$ screen
$ node server.js
```

This sets it in a _screen session_. The terminal can be closed. To get back to that _screen session_ just type this:

```bash
$ screen -r
```

You'll be recoonected to the backgrounded shell.



Trying out HandleBars (hbs) as a simple templating engine.

```bash
$ npm install hbs --save-dev
```

---

##### 09.23.16
###### adding nodemon

Nodemoon *restarts the server automatically* whenever you save a file that the server uses. Critical:

```bash
$ npm install nodemon --save-dev
```

but it doesn't get installed globally (cause we're not gonna use the -g flag, so we'll need to add the path to the bat in the `package.json` file.) 

added this: `"devserv" : "./node_modules/.bin/nodemon server.js"` to so now `npm run devserv` launched the server in dev mode.



###### adding body-parser

no other way of getting the post values out... kind of crazy. but... anyway:

```bash
$ npm install body-parser --save-dev
```

and it seems to work. data gets passed via `req.body.name` 
next up MongoDB
