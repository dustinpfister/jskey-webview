
var Editor = new Vue({
  el: '#editor',
  template: '<div v-bind:style="constyle" >'+
        '<div v-bind:style="listStyle" ><h3>Posts List: </h3> '+
            '<div v-for="(post, index) in posts"><p v-on:click="onPostLink" >{{post}}</p></div>'+
        '</div>' +
        '<div v-bind:style="editorStyle">' +
            //'<div>fileName: {{ fileName }}</div>'+
            '<textarea v-model="text" rows="20" cols="80"></textarea><br>' +
            '<input type="text" v-model="fileName"><br>' +
            '<input type="button" value="save" v-on:click="saveFile">'+
        '</div>' +
    '</div>',
  data : {
      constyle:'background:#afafaf;padding:5px;',
      listStyle: 'background:#8f8f8f;width:200px;padding:5px;display:inline-block;vertical-align: top;',
      editorStyle: 'background:#8f8f8f;padding:5px;display:inline-block;',
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

