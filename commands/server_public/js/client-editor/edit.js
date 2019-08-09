
var Editor = new Vue({
  el: '#editor',
  template: '<div v-bind:style="constyle" >'+
        '<div>fileName: {{ fileName }}</div>'+
        '<div>Posts: </div>'+
        '<div v-for="(post, index) in posts"><p v-on:click="onPostLink" >{{post}}</p></div>'+
        '<textarea v-model="text" ></textarea>' +
        '<input type="button" value="save" v-on:click="saveFile">'+
    '</div>',
  data : {
     constyle:'background:red;width:200px;padding:5px;',
     posts : [],
     text: 'hi there',
     fileName: 'new_post.md'
  },
  methods:{
  
     // get list of file names
     getList : function(){
        this.$http.get('post_list')
        .then(function(res){
          this.$data.posts = res.body.fileNames;
        });
     },
     
     // what to do when a post link is clicked
     onPostLink : function(e){
        var fileName = e.target.innerText,
        url = '/post/' + fileName;
        this.$http.get(url)
        .then(function(res){
           this.$data.text = res.body;
           this.$data.fileName = fileName;
        });
     },
     
     // save the current file
     saveFile: function(e){
         
         this.$http.post('/post_save', {
             fileName: this.$data.fileName,
             text: this.$data.text
         })
         .then(function(res){
             console.log(res);
         });
         
     }
  }
});

// get list for first time
Editor.getList();

