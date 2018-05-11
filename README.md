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

You nailed it – Great work :clap:

Congratulations for finishing the Readable project :tada:

Take a look at your code review for some pointers on how you can optionally improve your application and coding practices.

We look forward to receiving your future project submissions. Keep learning, and stay Udacious :udacious:

Until next time :wave:

1.  _A README is included with the project. The README includes clear instructions for installing and launching the project._
    Great work :book:
    I encourage you to revise your application documentation with the tips I left you in your code review :squirrel:
2.  _Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state. Form inputs and controlled components may have some state handled by the component._
    Fantastic utilization of actions and reducers to map your data to your application components :muscle:

    It becomes even more critical with larger applications to keep your data and get / post methods separate and organized. Keep up the great work!

    Take a look at your code review for some pointers on how to improve your redux management and file structure.

3.  _Updates are triggered by dispatching action creators to reducers. Reducers and actions are written properly and correctly return updated state to the store._
    Nice work adding actions to your first react-redux application!

    I left you some comments on how to further improve your action creators within your code review :smile:

4.  _Listed posts are displayed..._
    Great work adding the required functionality :muscle:

    I encourage you revise your interface and add some more visually appealing elements, as the react library is utilized primarily to build user interfaces.

    It's highly recommended to use this opportunity to implement a solid user interface to improve user experience :muscle:

    Have you considered using ui libraries with your applications? Take a look at a personal favorite of mine here: http://www.material-ui.com/#/

5.  _Application has a form for creating a new post. Submitting the form properly adds the post to the correct category._
    Great work adding the required functionality, and validation for your forms :muscle:

    However I suggest you add some error messages to improve user experience

    Want to learn more about form validation and optimal form development practices?

    Have a look at our course on the subject here: https://www.udacity.com/course/building-high-conversion-web-forms--ud890

6.  _A mechanism for deleting posts and comments exists. Clicking the button/link correctly removes the post/comment from list view and makes post inaccessible at its URL. When a user goes to a deleted post’s URL, a 404 page is displayed._
    Fantastic work :muscle:
    [Here is an article](https://medium.com/@rose.espiritu1/creating-a-custom-404-notfound-page-with-react-routers-3cc9106de84) you may find helpful on building 404 pages with react-router-dom :muscle:
7.  _Posts.js line 28_
    There is a cleaner way to add singular actions to your container, with ES6 syntax.For singular actions, you can do the following to completely avoid utilizing the mapDispatchToProps or dispatch methods:

    export default connect(mapStateToProps, {action1, action2})(Component);

    This adds the action creators to your this.props object without the need to utilize the mapDispatchToProps or the dispatch method :muscle:

8.  _Posts.js line 78_
    I encourage you to improve your mapStateToProps function utilization by utilizing some deconstruction syntax.

    Passing the state, and any other argument is optional, as you can pass individual reducers into your state using the following practices:

    function mapStateToProps({ reducer1, reducer2 }){

    return { reducer1, reducer2 };

    }
    However in order to actually achieve this, the assigned data from your reducer must match your component assignment names :squirrel:

    Utilizing ES6 in this situation is helpful since it helps you shorten your code :muscle:

9.  _README.md line 78_
    Great work writing clear, and concise instruction to install and utilize your application :+1:
    Want to learn more about writing great README.md files? Have a look at our course on the subject here: https://www.udacity.com/course/writing-readmes--ud777

10. _reducers/index.js line 10_
    Fantastic work so far!
    It's recommended to split each reducer into its own file, instead of utilizing one huge file to manage all your reducers. This keeps your code base cleaner, and allows other engineers to better analyze your application.
    Here is a sample file structure you may want to consider:
    reducers/index.js (where you have your combine reducers, and import other reducer files)
    reducers/reducer1(where you have one reducer that gets exported into reducers/index.js)
    reducers/reducer2(same as reducer 1)
    This improves your file structure making it easier to utilize and modify your application :muscle:

11. _ShowPostDetail.js line 29_
    Great use of the prop-types library :tada:

    This and defaultProps becomes very useful as you start building larger application. Keep these practices in mind moving forward!

12. _actions/select.js line 6_
    Great work adding constants to handle your action types!

    It's recommended to refactor your action.type constants into a different file, which you can then import into your action creators.

    Try moving these constants into actions/types.js :smile:

    Here’s a fantastic article explaining why this is important: https://stackoverflow.com/questions/34965856/what-is-the-point-of-the-constants-in-redux

13. _actions/post.js line 13_
    Nice work splitting up your actions into logical files :muscle:

    This allows for easier maintenance and updates of your application :book:

    Have a look at this article to stay up to date on the recommended react-redux directory structure: https://marmelab.com/blog/2015/12/17/react-directory-structure.html

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
