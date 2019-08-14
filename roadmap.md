## 0.4.x - Alpha V - index middleware
  * new kwdb_index middleware started that can index content for keywords
  * first built in function that will be used to build an index
  * index ranks for keywords in a keyword database can be viewed in the /kwdb webview
  * can make use of a _index

## 0.3.x - Alpha IV - kwdb path and basic jskey-kwdb intergration
  * (done) new /kwdb path that will be used for the keyword database
  * (done) new middleware kwdb_create that will create a _kwdb folder in the project folder
  * (done) kwdb_create middleware can create a new keyword database in the _kwdb folder
  * (done) new keyword database can be created from /kwdb webview
  * (done) current database can be selected from /kwdb webview
  * (done) new kwdb_add middleware 
  * (done) keywords can be added to a database from /kwdb webview
  * (done) new kwdb_remove middleware folder
  * (done) keywords can be removed from a database from /kwdb webview
  * (done) new kwdb_get middleware for just getting a list of keywords in the database
  * can list current database in /kwdb path

## 0.2.6 - Alpha III - post_delete middleware
  * (done) new middleware started called post_delete
  * (done) the post_delete middleware can be used to delete a post from the edit path
  * (done) display jsKey version number in header of webview

## 0.1.28 - Alpha II - edit path and post_save middleware
  * (done) ejs added to package.json which will be used for server side rendering
  * (done) server_view folder wil be used for ejs templates
  * (done) start new render middleware that will contain a / and /edit path for starters.
  * (done) link to vuejs in main index.ejs file
  * (done) add or create an http client for vuejs to be used for the client system
  * (done) start new post_save middleware that creates, and saves posts.
  * (done) posts can be edited and saved in /edit path
  * (done) posts can be created in /edit path
  * (done) rename get_post to post_get
  * (done) rename get_post_list to post_list
  
## 0.0.29 - Alpha I - first release
  * (done) server command started
  * (done) a get_post_list middleware that just lists posts in the _posts_crypt folder
  * (done) a /posts path web view working that just displays a list of files in a _posts_crypt folder
  * (done) all middlewares should have there own folder to keep all assets together for the middleware
  * (done) custom forFile jskey-walk file for get_post_list middleware
  * (done) the get_post_list middleware sends json
  * (done) public folder for static assets
  * (done) add vuejs for client system framework to be used in web views
  * (done) a middleware file that works with jskey-crypt to display deciphered content
  * (done) server command reads key.yaml

