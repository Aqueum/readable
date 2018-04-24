# Readable

* Udacity React - Readable Project
* [Udacity React Nanodegree](https://eu.udacity.com/course/react-nanodegree--nd019)
* Martin Currie ([Aqueum](http://martin.aqueum.com)) - 16 March 2018

# Purpose & design

A topic post and comment single page web app using the React & Redux javascript libraries.

It allows users to read and create posts within predefined topics, upvoting, downvoting, editing, deleting & commenting on them without any login. Similarly users can upvote, downvote, edit & delete any comment (including those by others). I'm not quite sure what the purpose of the author field is, given that anyone can edit anything, but that's what the rubric asked for...

# Getting Started

1.  fork, clone or download the project from [here](https://github.com/Aqueum/readable)
2.  navigate to the created readable folder
3.  `npm init`
4.  `npm install --save react react-dom redux redux-thunk redux-logger react-redux react-router react-router-dom prop-types uuid react-icons-kit`
5.  `npm start`
6.  `cd api-server`
7.  `node start`
8.  then play with webpage that should open at http://localhost:3000/

# Known issues

## To do

1.  Make the app ~~at least half way~~ pretty
2.  ~~Use react-router to set default category for a post to be the category the new post was called from, or [something..?] if called from root~~
3.  ~~Utilise same 404 with detail props from all missing items~~
4.  Have deletions from detail pages redirect to the list rather than giving a 404
5.  Check 404's cover all instances (currently seeing /randomword as a call for all posts of category randomword)
6.  Segregate component-containers more strictly into presentational components and containers
7.  ~~Move header to App.js so it is only called once~~
8.  Use Redirect declaritive navigation rather than history push

## I'm not happy with

1.  I hate the number of api calls that this app makes. Without these however, deep links wouldn't work...
2.  It feels like I have used some fudges to get state when it changes, that I thought redux was supposed to look after itself, for example my use of `componentWillReceiveProps` in `ListPosts.js`

## Review suggestions

Not yet submitted for review

# Files

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## My files

Following create-react-app all my files are contained in src, within the following folders that define their content type:

* actions
* components
* containers
* reducers
* utils

in addition to the following in src's root:

* index.js
* App.css

# Contributing

This is an assessed project, so I'd probably get in trouble for accepting external input.

# Code Status

Can Udacity add a badge here..?

# License

This is an assessed project, based on the starter code referred to above, udacidy don't list their license, hence I can't either. Please assume all work is copyrighted with all rights resevred, but feel free to [contact me](http://www.aqueum.com/contact/)
if you have any questions.
