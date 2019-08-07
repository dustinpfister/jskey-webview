## 0.2.x - Alpha III - post_delete middleware
  * new middleware started called post_delete
  * the post_delete middleware can be used to delete a post from the edit path

## 0.1.x - Alpha II - edit path and post_save middleware
  * (done) ejs added to package.json which will be used for server side rendering
  * (done) server_view folder wil be used for ejs templates
  * start /edit path that can be used to edit a post
  * start new post_save middleware that creates, and saves edited posts.
  * posts can be created in /edit path
  * posts can be edited and saved in edit path
  * rename get_post to post_get
  * rename get_post_list to post_list
  
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

