# LS-Client-Auth

## Packages

* `redux-thunk`
* `cors`

## Topics

*	Redux Thunk
* localStorage
* axios's config object
* http headers


## Assignment

✓ Clone down this project.  Run `npm i`.
✓ Start your MongoDB server by running `mongod` from the command line.
✓ Start the server (on the solution branch) of the LS-Auth repository.

Complete the SignUp component.  When the user fills out the form you should send and
axios POST request to the server to save the user to the database.  If successful then you
should save the provided JWT to localStorage and then redirect the user to `/users`.
User the existing code as a reference.

You will also need to make sure that your server is using the `cors` middleware.
Instructions for adding cors:
*   `npm i --save cors`
* `const cors = require('cors');`
* `app.use(cors());`

Video

Transcript
0:06 -- |  different concepts so we're going to be
0:07 -- |  covering here we're going to be covering
0:09 -- |  redux thunk which is a more
0:13 -- |  flexible way to handle branching logic
0:16 -- |  after an asynchronous action creator
0:20 -- |  is called.   so there's a lot of vocabulary I
0:23 -- |  throw at you we'll walk through that... the
0:25 -- |  other one that we need to cover is a
0:27 -- |  main one right now is **local storage**
0:30 -- |  everything else is pretty much just a
0:33 -- |  combination of things that you've
0:35 -- |  already learned but those are the two
0:38 -- |  main new concepts so I'm going to walk
0:41 -- |  you guys through what we have right now
0:43 -- |  what's up right now okay so for me close
0:51 -- |  everything up okay so here's the off
0:54 -- |  client so start it out just as you know
0:57 -- |  simple create the act at the packages
1:01 -- |  that were installed
1:02 -- |  Axios react every Dom are already
1:06 -- |  installed but then react reacts react
1:08 -- |  outer Dom reacts Redux form of weed X
1:11 -- |  thumb so redux thunk is what we're using
1:14 -- |  instead of reacts promise so as redux
1:17 -- |  promised you remember you feed a promise
1:20 -- |  in as the actions payload and then the
1:24 -- |  redux promise middleware will process
1:27 -- |  that and then it will automatically do
1:31 -- |  it will do the waiting for you and then
1:33 -- |  it will extract the it will extract the
1:37 -- |  the data that comes back when I promise
1:39 -- |  is fulfilled
1:40 -- |  so we extant there's a little bit
1:42 -- |  different read excellent gives us a
1:43 -- |  little more granular control over
1:45 -- |  exactly how we handle that promise and
1:48 -- |  then it yeah so let's the first thing
1:51 -- |  you want to look at is is redux thunk so
1:56 -- |  if we look inside of our action creators
1:57 -- |  so this is a 2d action creators for the
2:00 -- |  applications so far and this is all
2:03 -- |  example code that you'll receive for the
2:05 -- |  homework assignment so this will be all
2:06 -- |  pushed up and available to you guys but
2:10 -- |  so right here we have this
2:13 -- |  in action creator so again an action
2:16 -- |  creator is a function that returns an
2:18 -- |  object
2:18 -- |  so what Redux thunk does is Redux thunk
2:22 -- |  makes it so that way your action
2:24 -- |  creators they don't have to just return
2:26 -- |  objects they can also return functions
2:29 -- |  and so readex thunk you install it as a
2:33 -- |  middleware just like we do a three decks
2:36 -- |  promise like exactly the same as you do
2:38 -- |  its redux promise we're just using redux
2:40 -- |  thunk and the spot instead of the ex
2:42 -- |  promise so you ducks dunk we plug it in
2:44 -- |  like a bitter where and it makes it so
2:46 -- |  we can return a function from this
2:48 -- |  action creator and so the function is a
2:50 -- |  callback function so we can give it a
2:52 -- |  callback function in the middleware and
2:55 -- |  then this callback function will be
2:57 -- |  invoked at a point in time that will
3:02 -- |  give us access to this dispatch function
3:06 -- |  so the dispatch function this is the
3:10 -- |  actual redux function that handles
3:13 -- |  sending your actions to the reducers so
3:18 -- |  dispatch when we do the whole connect
3:20 -- |  thing we're in your react components
3:23 -- |  what that does is it implicitly calls
3:26 -- |  dispatch behind the scene dispatch is
3:29 -- |  the redux function that takes your
3:32 -- |  actions and remember the actions are
3:34 -- |  just plain JavaScript objects but it
3:36 -- |  takes those plain JavaScript objects and
3:38 -- |  it pipes them through all of the
3:40 -- |  reducers so that's what dispatch does
3:44 -- |  this function you give it an object and
3:46 -- |  it sends it to all of the reducers so
3:49 -- |  what this means is this is kind of like
3:52 -- |  the next function in the pre save and
3:55 -- |  Mongoose it means that we can call an
3:59 -- |  asynchronous function here so we can do
4:02 -- |  axial step post and this returns a
4:04 -- |  promise and then we can chain off of it
4:07 -- |  and do a dot then you know these are
4:10 -- |  things that you've you've seen and you
4:14 -- |  know there's a way that this works axial
4:15 -- |  step post is going to run that will be
4:17 -- |  asynchronous then the dot then will be
4:20 -- |  called and then inside of that then we
4:22 -- |  have a callback function that's going to
4:24 -- |  be invoked inside of
4:26 -- |  this callback function we can then call
4:29 -- |  the dispatch function and so we can we
4:33 -- |  can fire off our action creators at a
4:36 -- |  later point in time again we can send
4:38 -- |  the action to the reducers at a later
4:40 -- |  point in time and then there the
4:42 -- |  advantage to of having direct access to
4:45 -- |  this dispatch function is that where we
4:47 -- |  can have branching a branching logic we
4:51 -- |  can the an action creator can submit
4:53 -- |  different types of actions whereas
4:56 -- |  before it you you could only really
4:59 -- |  submit one action from one action
5:01 -- |  creator but now inside of this sign in
5:03 -- |  action creator if our response so we
5:07 -- |  post the email and the password to the
5:10 -- |  server and then if we receive a
5:13 -- |  successful response it will the dot then
5:16 -- |  callback will be invoked and then we're
5:19 -- |  going to dispatch and ignore this
5:21 -- |  localstorage line in this history dot
5:23 -- |  push line for right now but we're going
5:25 -- |  to go and so again Axios dot post this
5:30 -- |  right here is just the the sign-in path
5:33 -- |  on our on our server and then we give it
5:36 -- |  the email and the password if that's
5:39 -- |  successful the dot bang callback is
5:42 -- |  called if it is not successful the dot
5:44 -- |  catch callback is called
5:47 -- |  so on success dot then will be called we
5:51 -- |  are given the response from the server
5:52 -- |  and then we can do a dispatch so we call
5:55 -- |  the dispatch we pass it in the we or we
6:00 -- |  give it a type of user authenticated we
6:02 -- |  actually don't need a payload here
6:03 -- |  because again on the clients our client
6:07 -- |  side authentication is only for the
6:10 -- |  purpose of like user experience there is
6:14 -- |  there is no security in client side off
6:17 -- |  the authentication every bit of code
6:20 -- |  that we write here on the client can be
6:22 -- |  manually changed by a user if they
6:24 -- |  wanted to dig into the code so there's
6:26 -- |  there's no actual security here we're
6:29 -- |  just flipping a flag on the state so
6:33 -- |  that way our future components can go
6:35 -- |  and check that flag to see if they
6:37 -- |  should render or not
6:38 -- |  it's say it's just kind of like there's
6:41 -- |  an understood contract between us in the
6:43 -- |  user but they're not going to change any
6:44 -- |  of the stuff that they want it to work
6:46 -- |  so any security any actual security has
6:51 -- |  to happen on the server side that's the
6:53 -- |  only place where you have an actual wall
6:55 -- |  between you and the user where they
6:58 -- |  can't see what you're doing and where
7:00 -- |  you can actually restrict their access
7:01 -- |  so all we're doing is flipping a flag on
7:04 -- |  the state saying the user is now
7:06 -- |  authenticated and then at that point
7:08 -- |  they can click through and access the
7:09 -- |  other stuff and when they go through and
7:12 -- |  access the other stuff even if they come
7:14 -- |  in and manually change the codes where
7:16 -- |  it says that they're authenticated when
7:18 -- |  they go into those other routes they're
7:19 -- |  not going to be able to get any data
7:21 -- |  because they won't have a valid token
7:22 -- |  stored so like their view like they'll
7:25 -- |  just see a bunch of errors on their page
7:27 -- |  and everything will be broken because
7:28 -- |  it's a it's just for user experience
7:31 -- |  we're just saying that yeah so it's just
7:34 -- |  a way for us to mark that the user is
7:37 -- |  authenticated so again dispatch manually
7:41 -- |  allows us to fire off the objects that
7:46 -- |  will get fed into the reducers so right
7:48 -- |  here again we're just firing off an
7:49 -- |  action that says that the user is
7:51 -- |  authenticated and then and the catch we
7:55 -- |  do a dispatch and then we do this author
7:59 -- |  which is a function that I just
8:01 -- |  abstracted it out up here to keep it a
8:03 -- |  little cleaner but author just returns a
8:06 -- |  returns in action so we just we dispatch
8:09 -- |  an action of a different type so if the
8:13 -- |  authentication failed we dispatch an
8:15 -- |  action of type authentication error with
8:17 -- |  an error message if it succeeded then we
8:21 -- |  dispatch an action of type user
8:23 -- |  authenticated and it doesn't have a
8:25 -- |  payload and then we mark that the user
8:27 -- |  was authenticated so uh on the actual on
8:34 -- |  the actual state the way that the what
8:39 -- |  it looks like is we have this we have
8:41 -- |  this auth property which is an object
8:44 -- |  that then says whether or not the users
8:47 -- |  authenticated and then we can also set
8:49 -- |  some custom things to determine if the
8:52 -- |  the user has an error or not so let me
8:54 -- |  just show you what this looks like on a
8:56 -- |  client so if we sign in we do been a
9:01 -- |  pend calm man Ben that was one of the
9:04 -- |  things I'd saved you sign-in it
9:06 -- |  successfully states redirects to see no
9:09 -- |  errors okay I sign out you have signed
9:11 -- |  out we're going to sign in if I did
9:14 -- |  something like this I hit sign in
9:17 -- |  incorrect email password combo and so
9:20 -- |  this is an error that we received from
9:23 -- |  the server the server came back and said
9:25 -- |  unauthorized they did not that stuff did
9:27 -- |  not work then we hit sign in pops will
9:33 -- |  soon be here okay this is left over from
9:35 -- |  before so that's kind of that that
9:38 -- |  general flow and this is the the main
9:40 -- |  flow that we're going to be working on
9:41 -- |  today with this project is the idea of
9:44 -- |  just sending the credentials to the
9:46 -- |  server getting the response back and
9:49 -- |  then doing a redirect and so what you
9:52 -- |  guys will be doing is you're going to be
9:53 -- |  going through you're going to be
9:54 -- |  implementing based off the example code
9:56 -- |  you're going to be implementing the the
10:00 -- |  signup form so right now there's just a
10:02 -- |  sign-in form you're going to be
10:04 -- |  implementing the sign-up form so signup
10:08 -- |  form is is in here there's some
10:10 -- |  boilerplate work done but you need to
10:12 -- |  finish it out so let's go and look at
10:15 -- |  sign-in all right sorry enough in uh the
10:20 -- |  action trader again okay so that's redux
10:23 -- |  thunk redux thunk gives us dispatch
10:26 -- |  gives us granular control over
10:28 -- |  dispatching actions whereas before we
10:31 -- |  just returned an object and then it
10:33 -- |  would magically get typed through to all
10:35 -- |  of the all of the reducers whereas now
10:39 -- |  we actually manually get access to
10:41 -- |  dispatch and we can control specifically
10:44 -- |  how our actions get passed to the
10:47 -- |  reducers so it's pretty cool that way
10:48 -- |  it's just back to the actual redux
10:52 -- |  function that handles that that that
10:54 -- |  that funnelling adapt typing of actions
10:57 -- |  to the reducers okay so this right here
11:01 -- |  again is yeah
11:04 -- |  okay so that covers the first part the
11:08 -- |  next thing that I want to talk about is
11:10 -- |  local storage so local storage is
11:16 -- |  storage for the browser so if we go to
11:22 -- |  [Music]
11:23 -- |  cnn.com and up the console I can do
11:30 -- |  something like this I can go let me let
11:42 -- |  me just go get my ball I'm going to the
11:44 -- |  walk home they're going to spit out less
11:46 -- |  stuff and all consoles so here what we
11:48 -- |  can do is that we can do a local storage
11:54 -- |  well yeah one second guess okay yeah I'm
11:59 -- |  gonna let the night Matthew gets a
12:00 -- |  pretty good night okay I'm a working
12:03 -- |  outside it's a really nice day so I'm
12:06 -- |  more favorable okay so local storage
12:09 -- |  what we're doing is so local storage is
12:13 -- |  domains specific and then essentially it
12:18 -- |  gives us access to the hard drive we can
12:21 -- |  actually write something to a contained
12:23 -- |  portion of the hard drive that the
12:25 -- |  browser has control over and again its
12:29 -- |  domain specific so if we save something
12:31 -- |  while we're at Google calm calm can
12:35 -- |  access it only client-side code that
12:37 -- |  came from google.com can access it so
12:39 -- |  it's so we save the local storage only
12:42 -- |  our website only our client side code
12:45 -- |  can access it like hacker website comm
12:48 -- |  won't be able to access our local
12:50 -- |  storage data so in theory so we with
12:55 -- |  local storage you can then do a set item
12:58 -- |  and then we can give it a key value care
13:01 -- |  and so that's what we're doing in here
13:03 -- |  we're saying set item token and then we
13:05 -- |  save the token and so there's token and
13:09 -- |  then here's my imaginary made-up token
13:13 -- |  okay that sets it then I can go local
13:16 -- |  storage
13:17 -- |  get item token like that and it
13:22 -- |  retrieves it and so if I need to copy
13:28 -- |  that
13:29 -- |  alright then if i refresh the page it's
13:33 -- |  still there if I go to our Google comm
13:37 -- |  in here this should still be there
13:40 -- |  unless Google somehow overriding it but
13:42 -- |  it's still there if I go to Twitter calm
13:47 -- |  and do local storage I could item token
13:49 -- |  it's null so it's domain specific and so
13:54 -- |  we're at google.com or even if I go to
13:56 -- |  Twitter comm now from the same same
14:01 -- |  route it's null but if I jump back
14:03 -- |  anyway you can you can see the example
14:05 -- |  here how it it allows you to store
14:08 -- |  simple pieces of data locally so it's
14:11 -- |  kind of like the whole cookie thing like
14:14 -- |  you can you know you can store a little
14:16 -- |  bit of information down in the in the
14:20 -- |  users browser and it persists between
14:23 -- |  refreshes and it persists between like
14:26 -- |  login and so if the person logged in and
14:29 -- |  we store the token then that token is
14:32 -- |  just going to be there until they you
14:34 -- |  know do something to wipe out their
14:36 -- |  cache on their browser or they switch
14:38 -- |  devices or something like that but this
14:40 -- |  device will now be logged in as long as
14:43 -- |  they want it to be or as long as our
14:45 -- |  server allows that token to be active so
14:49 -- |  that's local storage and so local
14:51 -- |  storage is the perfect place for us to
14:54 -- |  save our JSON web token so that's what's
14:57 -- |  happening here
14:58 -- |  so axial step post dot Ben so when we
15:03 -- |  get a successful response from the
15:04 -- |  server we go local storage set item and
15:07 -- |  we give it a key of token and then we
15:09 -- |  give it response data token so we saved
15:13 -- |  the token into the local storage and
15:16 -- |  that's just a perfect way for us to have
15:20 -- |  access to it so we save the token we
15:23 -- |  dispatch in action saying that the user
15:25 -- |  is now authenticated that changes the
15:28 -- |  state
15:29 -- |  and then we do history dot push slash
15:33 -- |  users and so I'm passing in a history
15:35 -- |  object that is a prop that comes in from
15:39 -- |  the component that's using this is an
15:41 -- |  easy way to do a redirect and so then we
15:44 -- |  redirect to the users page which is the
15:47 -- |  protected view so these are the main
15:54 -- |  concepts that we're covering today just
15:59 -- |  this idea of having local storage you
16:03 -- |  can save items to local storage then you
16:06 -- |  can you know retrieve them from local
16:08 -- |  storage etc we can give spatch actions
16:12 -- |  like we can manually dispatch so we can
16:15 -- |  have this this branching flow of you
16:20 -- |  know begin it so we can dispatch two
16:21 -- |  different actions from the same action
16:22 -- |  creator so anyway those are two two
16:27 -- |  pretty big concepts the bigger ones that
16:31 -- |  we're going to address later that I want
16:37 -- |  you guys to will be touching on this
16:41 -- |  over touching on this tomorrow is we're
16:43 -- |  going to talk about higher-order
16:44 -- |  components and we're going to go over
16:46 -- |  how to secure different routes on your
16:51 -- |  how to secure different routes on your
16:54 -- |  application so and anyway so we're going
16:58 -- |  to go over that right now I'm going to
16:59 -- |  walk through how to so how to use our
17:04 -- |  token to then be able to retrieve the
17:07 -- |  you know the users list from the server
17:10 -- |  and then we can display that so that's
17:13 -- |  the next thing we'll walk through okay
17:14 -- |  and then another thing I want to look at
17:15 -- |  as well is that with local storage we
17:18 -- |  can remove the item so when the user
17:20 -- |  signs out we can go local storage don't
17:23 -- |  remove item token and again it's just a
17:25 -- |  key value store and so we specified a
17:28 -- |  key and then it removed it and so that
17:30 -- |  it is no longer stored on the device and
17:33 -- |  then that's how we and it's just
17:36 -- |  forgotten forever and so that if they
17:38 -- |  want to log back in again they have to
17:40 -- |  resubmit their credentials and then
17:42 -- |  Seve another JSON web token okay what
17:51 -- |  it's real quick that was kind of
17:52 -- |  high-level I mean I haven't typed any
17:54 -- |  code usually I type out these big
17:56 -- |  examples but there was a lot of
17:58 -- |  boilerplate code for this and so it
18:01 -- |  would have been an hour of me just
18:03 -- |  writing code to get up to this point to
18:05 -- |  even explain some of these concepts
18:07 -- |  whereas I wanted to just kind of jump in
18:08 -- |  and explain these to you guys right now
18:10 -- |  to say that would be more efficient but
18:12 -- |  obviously I know you guys are going to
18:14 -- |  have some questions because looking at
18:16 -- |  code and me talking at you is not a very
18:19 -- |  efficient way for you guys to absorb the
18:21 -- |  information and so I mean honestly you
18:23 -- |  just need to get in there play around
18:25 -- |  with it try to get it to work and then
18:29 -- |  and then by you know and then by me
18:32 -- |  going in and you know then helping you
18:33 -- |  guys when you're stuck that's just again
18:35 -- |  what I found is what's really going to
18:37 -- |  help you guys solidify this information
18:38 -- |  but anyway that being said you guys have
18:41 -- |  any questions right now off the top of
18:43 -- |  your head just high level with a
18:45 -- |  specifically with redux thunk or local
18:48 -- |  storage dispatch for me now how are you
19:00 -- |  guys feeling about this like both of you
19:02 -- |  can you guys tell me like I just like
19:04 -- |  like a thumbs-up thumbs-down how are you
19:07 -- |  guys feeling about this prophet 3 right
19:12 -- |  now I just have to get to grips with it
19:13 -- |  and see you know what I could rescue
19:16 -- |  from there
19:17 -- |  okay how are you feeling about a
19:20 -- |  Christine can hear me now huh yeah
19:28 -- |  I can't yeah I got a little microphone
19:31 -- |  thing yes ok no no it's nothing to it um
19:34 -- |  yeah I feel the same as I usually you
19:37 -- |  know until I can watching you type
19:42 -- |  doesn't help me at all and I find that
19:46 -- |  at beyond anything that helps is to like
19:48 -- |  copy the code into the editor and then
19:52 -- |  figure out what it's doing
19:55 -- |  oh yeah just typing it in myself doesn't
19:58 -- |  help either yeah that's yeah inefficient
20:02 -- |  like it's it's just a lecture if you
20:06 -- |  know if I'm up you're talking and so the
20:08 -- |  more hands-on we can make this the
20:10 -- |  better so when you're trying to become
20:13 -- |  so fat
20:15 -- |  that's like to eat you might as well
20:16 -- |  just be talking anyways yeah okay good
20:20 -- |  to know
20:20 -- |  all right okay so I'm going to quiz you
20:23 -- |  guys a little bit on some of these
20:24 -- |  things I know this is uncomfortable but
20:28 -- |  it's it helps kind of a I like it's
20:32 -- |  painful but it helps you guys so painful
20:35 -- |  to me okay all right okay okay all right
20:38 -- |  thankful for me at least
20:39 -- |  I'm sorry socially kind of shy a little
20:42 -- |  more so okay all right so ty can you
20:48 -- |  explain to me what this dispatch is what
20:50 -- |  is dispatch
20:52 -- |  so it is a higher order function and
20:58 -- |  what it does is it takes the dispatch in
21:00 -- |  and it takes the email and the password
21:04 -- |  out of the dispatch and either and in
21:10 -- |  either sense the token end is
21:12 -- |  authenticated or it fails out and gives
21:16 -- |  you the error message incorrect email
21:18 -- |  password okay good that's good that's
21:21 -- |  that was a very good high level overview
21:23 -- |  of the whole action creator now
21:26 -- |  specifically what is this dispatch
21:29 -- |  property doing right there like what is
21:32 -- |  this what what JavaScript type is it
21:36 -- |  like what it's I mean it's it's like the
21:40 -- |  action dot type but for for react and
21:43 -- |  redux funk better yeah so it's it's a
21:47 -- |  function and what is it expecting as an
21:53 -- |  argument an object with heist in it
21:57 -- |  yep just an action yeah just the action
22:00 -- |  object so yeah having a type on it or
22:02 -- |  you know a payload and then where do
22:06 -- |  these actions go that we give to
22:08 -- |  dispatch
22:09 -- |  today goes to your reducers doesn't it
22:13 -- |  yep exactly
22:15 -- |  so dispatches this is the thing that we
22:18 -- |  were implicitly using behind the scenes
22:20 -- |  before to send our actions to the
22:23 -- |  reducers now we just have direct control
22:25 -- |  over it and so we can say hey dispatch
22:28 -- |  this and the name is actually fairly
22:30 -- |  descriptive like dispatch we are
22:32 -- |  dispatching this object this message to
22:35 -- |  the reducers you know and then right
22:37 -- |  here we're dispatching another object
22:39 -- |  out to all of the reducers so dispatch
22:44 -- |  okay Christine can you explain to me
22:47 -- |  what local storage is that is
22:53 -- |  discouraged I'm thinking in the browser
22:57 -- |  that saves on the clients computer yes
23:00 -- |  yep what what else can you tell me about
23:03 -- |  it okay that's good that's right exactly
23:07 -- |  right what else know it and I think it
23:10 -- |  crisps it until like forever or until
23:15 -- |  the client actively empties it yep yeah
23:23 -- |  so it persists to the hard drive so it
23:25 -- |  actually saves it to the hard drive so
23:27 -- |  if their computer restarts it's still
23:29 -- |  there so the user still can still be
23:31 -- |  logged in even if their computer turns
23:33 -- |  off or runs out of battery or something
23:34 -- |  so beauty and it is there until we
23:37 -- |  explicitly remove it with remove item or
23:40 -- |  the the user can remove it with like
23:42 -- |  like caching static they can clear out
23:46 -- |  their cash and do stuff like that
23:47 -- |  as well so yeah but it's there in the
23:50 -- |  heart of effort go ahead most times you
23:54 -- |  can probably set an expiry on it - I
23:57 -- |  guess when locals there might you might
24:01 -- |  be able to yeah I'm actually not
24:03 -- |  entirely sure but yeah there might be an
24:05 -- |  API for setting it yeah for setting
24:08 -- |  archive isn't it isn't it says so that
24:11 -- |  you have a date a date in your token and
24:15 -- |  then I know if it's passed the data on
24:17 -- |  the token that it just doesn't work
24:19 -- |  anymore so
24:22 -- |  date that we're doing on the token yeah
24:23 -- |  so when we initialize the JSON web token
24:27 -- |  on the server what we're doing is we're
24:30 -- |  saying there's a timestamp this was
24:32 -- |  someone this was created because maybe
24:33 -- |  what we'd set up in our application in
24:35 -- |  the future as we'd say that all JSON web
24:38 -- |  tokens that are older than 60 days we're
24:41 -- |  going to reject them and then force the
24:44 -- |  user to log in again and so you know or
24:48 -- |  something I got 90 days or something
24:50 -- |  like that so that's why we use that
24:51 -- |  timestamp is that way we know when the
24:54 -- |  token was issued and then we can say
24:56 -- |  alright this token was issued too long
24:58 -- |  ago just you know for security reasons
25:00 -- |  let's make sure that the user you know
25:02 -- |  logs in again and so react tentacles
25:05 -- |  make sure that we you know that it is
25:06 -- |  the right person that they have the
25:07 -- |  credentials and everything so yeah so
25:11 -- |  that's but that's where of a server
25:12 -- |  thing and so we could try to implement
25:15 -- |  something like that on the client
25:16 -- |  actually wouldn't worry about it
25:18 -- |  I wouldn't worry about any type of
25:19 -- |  manual expiration like trying to set
25:22 -- |  that on local storage just just set the
25:25 -- |  token and then and then what you'd maybe
25:28 -- |  do is you would have it be that if you
25:31 -- |  make a request to the server with a
25:33 -- |  token and then the server responds and
25:36 -- |  says that the token is expired then you
25:38 -- |  would write code that would display a
25:40 -- |  message to the user and then you would
25:42 -- |  just then you would remove the token
25:44 -- |  from local storage and make them login
25:45 -- |  again so like that's probably the flow
25:48 -- |  you would use as if your request was
25:50 -- |  rejected because the token was expired
25:53 -- |  then you would then you would go in and
25:55 -- |  you would remove it like that so that's
25:57 -- |  probably how you would do it and it
25:59 -- |  would be based off of but the server
26:00 -- |  would be the one that would determine
26:02 -- |  whether or not a token is expired or not
26:04 -- |  the token has its timestamp when it was
26:07 -- |  created but you don't care about when
26:10 -- |  it's but you don't care about when it's
26:15 -- |  like you're not going to handle that
26:17 -- |  expiration code on the client especially
26:20 -- |  because that's just it's just better to
26:23 -- |  do it on the server that way then it's
26:26 -- |  the yet
26:27 -- |  I shouldn't say just cuz it's better
26:29 -- |  it's a I should give it a specific
26:30 -- |  reason so it's better on the circuit
26:31 -- |  it's just it's more secure to have that
26:34 -- |  total control
26:34 -- |  over expiration and things like that
26:36 -- |  handled on the server so the client is
26:38 -- |  just kind of you're just you're just
26:40 -- |  like the messenger for them you know
26:43 -- |  that displaying the messages you receive
26:45 -- |  from the server yeah you don't want on
26:47 -- |  the client side give the crying kunis
26:49 -- |  with a coda great yeah it's because yeah
26:51 -- |  anyone like when you go to a website and
26:53 -- |  get all that code down you can change
26:55 -- |  any of it like all of this code you have
26:58 -- |  to assume that some hacker is going to
27:01 -- |  look through it or some like you know
27:03 -- |  some kind of code boot camp is going to
27:05 -- |  take too long your code I mean it's like
27:07 -- |  it's like it is open like there's things
27:10 -- |  you can do to obfuscate it and stuff
27:12 -- |  like that it kind of scrambles it but
27:14 -- |  it's anyway it's a yeah just client code
27:21 -- |  is not secure server code can be secure
27:24 -- |  if like you do it right and by default
27:26 -- |  it's secure you just got to make sure
27:28 -- |  that your routes to protect it that's
27:30 -- |  why we do this dot thing that's why we
27:31 -- |  encrypt the passwords things like that
27:33 -- |  but your server is like your that's like
27:35 -- |  your your home base that you know that's
27:38 -- |  where any kind of secrecy or security
27:40 -- |  can happen the client is like public
27:44 -- |  space that you're letting people use I
27:46 -- |  guess yeah because people can just open
27:50 -- |  up the inspector and look at all the
27:52 -- |  code that's in here so you just have to
27:53 -- |  again always remember that like
27:55 -- |  absolutely nothing like uh you know like
28:00 -- |  super important or like critical or
28:04 -- |  secret it cannot be here inside of the
28:08 -- |  client so you know like like API keys or
28:13 -- |  things like that like you know a users
28:15 -- |  personal information that's fine but I'm
28:18 -- |  talking about like system-wide secret
28:20 -- |  information should not be in the client
28:22 -- |  like the user logs in he gets his own
28:25 -- |  secret information that's great that's
28:27 -- |  fun but like system-wide like our jot
28:30 -- |  like append like our jot secret like if
28:34 -- |  that was on the client for some reason
28:35 -- |  like that would be horrible like I'd be
28:38 -- |  like absolutely horrible because then
28:40 -- |  people could use that secret to generate
28:42 -- |  their own fake tokens and and stuff like
28:45 -- |  that and
28:46 -- |  anyway um so that is yes yes yep
28:57 -- |  so anyway so justjust important thing to
29:00 -- |  remember the client is this is open
29:04 -- |  source it's it's going to be open on the
29:06 -- |  internet and anyone can look at this
29:07 -- |  code if you want them to you want this
29:11 -- |  code to be available so anyone can grab
29:12 -- |  it and then run it in their browser so
29:14 -- |  they can get on your website
29:17 -- |  okay so local storage dispatch all right
29:21 -- |  and then we are saving the token to
29:23 -- |  local storage all right let's try
29:25 -- |  setting up a this users display thing
29:30 -- |  real quick it's going to do import
29:33 -- |  connects from connects let's do connects
29:43 -- |  like this from to react read X and a
29:53 -- |  constant at state 2 props that wants to
30:03 -- |  state and then turn an object and then
30:10 -- |  we're going to say users state that
30:15 -- |  users ok so now I'm going to go in and
30:19 -- |  create a new add it to our state in here
30:25 -- |  submitter users and there's going to be
30:27 -- |  users producer and then import users
30:32 -- |  producer from ok I'm keeping with gaming
30:37 -- |  conventions for this file so alright
30:39 -- |  users if you file these are that j/s
30:45 -- |  export
30:48 -- |  and I'm going to go on fast here on the
30:50 -- |  code but it's you know this stuff is
30:53 -- |  stuff that I don't want to you know be
30:55 -- |  focusing on right now
30:58 -- |  users action switch action that type and
31:04 -- |  then default case will be a turn users
31:09 -- |  users is going to be defaulted to an
31:12 -- |  empty array okay so that sets up our
31:15 -- |  action action creators and so then I so
31:22 -- |  now users what we're going to do is make
31:31 -- |  that a ul this is going to be this stop
31:40 -- |  props that users dot map user I then
31:50 -- |  turn Li user dot email all right and
31:59 -- |  then I'm going to put a key on here up i
32:03 -- |  hips we're just going to return that
32:04 -- |  we're just going to print out emails
32:07 -- |  okay so real quick let's come back into
32:14 -- |  our react app so sign in then add fan
32:21 -- |  calm and sign-in okay so nothing's
32:25 -- |  displaying make sure there's no errors
32:27 -- |  okay so just OS ever use if it's pass it
32:30 -- |  in but so again let's alright so let's
32:41 -- |  do let me do I'm going to put some dummy
32:44 -- |  data in just real quick so you make sure
32:45 -- |  that the actual component parts working
32:48 -- |  okay so
32:51 -- |  email like that so let's Matthew a calm
32:56 -- |  a then okay so now it's displaying
33:00 -- |  alright so what we're going to do now is
33:05 -- |  we're going to create an action creator
33:07 -- |  that is going to query the server for
33:09 -- |  the relevant information give us the
33:11 -- |  list of users and then yeah we'll put it
33:14 -- |  in here so um so what we're going to do
33:18 -- |  is we're going to do case and we'll say
33:20 -- |  I get users this will be returned action
33:27 -- |  dot payload thought data and then we're
33:36 -- |  going to import get users well go to
33:42 -- |  wrapping and curly braces from get users
33:49 -- |  and so then all right so let's go and
33:55 -- |  add that in now inside of actions so in
33:57 -- |  here I'm going to create another typo
33:59 -- |  oh I do thanks if your forum man I do
34:05 -- |  that so much that is like my most common
34:09 -- |  title explored clumps get users get
34:18 -- |  users fat all right so now let's create
34:21 -- |  another function back here and I call
34:24 -- |  this export clause get users so a
34:33 -- |  function like this actually we don't
34:35 -- |  need to love and we don't need to grab
34:39 -- |  the and we don't need any arguments or
34:43 -- |  anything like that we're just going to
34:44 -- |  make a get request so we need to
34:46 -- |  retrieve the token though that has been
34:48 -- |  saved into local storage what we're
34:50 -- |  going to do is we're going to go const
34:52 -- |  token is equal to local
34:59 -- |  hey can you guys hear me
35:20 -- |  crap okay all right guys I'm going to
35:28 -- |  continue with the lecture shoot okay um
35:37 -- |  I'm going to continue with the lecture
35:38 -- |  and then I will get this uploaded for
35:41 -- |  you guys over lunch all right shoot okay
35:57 -- |  all right
36:01 -- |  never had that happen before
36:03 -- |  I was heathering and my computer or my
36:09 -- |  my phone that has a really fast
36:11 -- |  connection anyway it overheated it is
36:15 -- |  telling me that it needs to cool down
36:16 -- |  and sew it shut itself off interesting
36:20 -- |  I've never seen that before so all right
36:25 -- |  so I'm just going to I don't know when
36:27 -- |  that will come back I'm going to finish
36:29 -- |  this recording and I'll get that a
36:31 -- |  hosted posted up to you guys yeah so all
36:36 -- |  rights are going to Compton local
36:39 -- |  storage dot set item it's a let's go
36:51 -- |  look it up so local storage dot get item
36:55 -- |  okay get item token like that and then
37:02 -- |  all right so the token local storage get
37:05 -- |  item token and then what we're going to
37:09 -- |  do is we're going to go const promise is
37:15 -- |  equal to AK CEO Scott gets and then you
37:20 -- |  can actually do this thing or go a root
37:24 -- |  URL that I specified up above the root
37:27 -- |  URL is localhost 5,000 right here and so
37:31 -- |  then I can go
37:33 -- |  users all right but then what we can
37:39 -- |  also do as well as we well we need to we
37:41 -- |  need to attach the token on to the on to
37:45 -- |  the request so we're going to do they're
37:46 -- |  going to do constant config and then in
37:52 -- |  here and I had an example up in here but
37:58 -- |  you can specify headers on that config
38:01 -- |  and then you can give a key value pairs
38:03 -- |  and Siringo headers and give it a key of
38:05 -- |  authentication and then give it a value
38:07 -- |  of the token so we're going to go
38:12 -- |  headers and then we're going to go
38:17 -- |  authentication and then token
38:25 -- |  okay so there is our config then after
38:29 -- |  the URL you pass in the config and then
38:36 -- |  let's do promise dot then response and
38:47 -- |  then just real quick let's well we have
38:49 -- |  a dot then and then we also want to do a
38:52 -- |  dot catch just in case it you know
38:58 -- |  doesn't fail her again it does fail so
39:04 -- |  let's do console dot log response right
39:08 -- |  there and then console that blog
39:14 -- |  response right there as well okay so
39:18 -- |  we'll test this out we're going to
39:20 -- |  import get users now into our users
39:24 -- |  component so we're going to go import
39:33 -- |  get users from
39:39 -- |  actions and then we will pass in get
39:47 -- |  users like that then down in here we're
39:50 -- |  going to go component did mount and say
39:55 -- |  this stop props dot get users okay we'll
40:03 -- |  save that come back into our react app
40:08 -- |  and then alright let's go and give this
40:10 -- |  out so cannot find module get users
40:14 -- |  users J s1 so I think that is this one
40:20 -- |  import get users from oh yeah actions ok
40:33 -- |  actions must be playing objects use
40:35 -- |  custom middleware forcing actions of it
40:37 -- |  because I'm not returning anything yet
40:40 -- |  from the action so what I'll do is just
40:45 -- |  just real quick I will I'm just going to
40:50 -- |  I'm going to return all of this inside
40:52 -- |  of a function that takes in dispatch and
41:05 -- |  then we'll go and paste that inside it's
41:11 -- |  there
41:13 -- |  ok so then now it's now it's turning out
41:16 -- |  so then instead of here what we do is we
41:18 -- |  would do a specify the type and well
41:22 -- |  dispatch and then we'll say type will be
41:26 -- |  of get users and then payload will be
41:34 -- |  response type data okay so that should
41:40 -- |  be fine right there and actually get
41:43 -- |  that to work okay so let's now go to
41:45 -- |  sign in a calm a
41:52 -- |  sign in and on authorised start so let's
41:58 -- |  go in and look at our network
42:04 -- |  alright so here
42:17 -- |  all right let's look at this one
42:23 -- |  okay request method get the locals five
42:27 -- |  thousand slash users so they said the
42:29 -- |  network tab gives you more it gives you
42:34 -- |  more granular it makes it so you can
42:43 -- |  look at it a little more closely so I
42:48 -- |  might need to set another header so let
42:51 -- |  me go in and let me go in and check this
42:54 -- |  real quick so I make a get request to
42:58 -- |  local host five thousand users and then
43:03 -- |  alright authorization okay so content
43:07 -- |  type application slash JSON let's I
43:11 -- |  don't think I manually need to set the
43:14 -- |  Hat but alright I'm going to copy this
43:19 -- |  and paste that in there okay so that
43:32 -- |  returns it so there's some other header
43:35 -- |  that must be missing so content type
43:38 -- |  application JSON yeah let's go in and
43:47 -- |  specify that as well I think if I leave
43:50 -- |  that off now that still works so
43:54 -- |  interesting authorization hmm
44:01 -- |  okay so there's something that network
44:04 -- |  wise that is not that is not jiving and
44:08 -- |  then okay my phone just turned back on
44:10 -- |  I'm going to message you guys and let
44:13 -- |  you guys know what's going on
44:53 -- |  okay all right so let's let's debug this
44:57 -- |  real quick so help step down in response
44:59 -- |  okay so I want to config it is properly
45:06 -- |  setting that is all right well here's
45:24 -- |  what I'm going to do I'm going to kill
45:25 -- |  the recording I'm going to debug this to
45:27 -- |  get this out and then I will let you
45:28 -- |  guys know the solution because this
45:30 -- |  might just be 15 minutes of me googling
45:35 -- |  stuff so all right I will message you
45:38 -- |  guys in a little bit thanks
