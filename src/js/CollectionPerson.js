var CollectionPerson = Backbone.Collection.extend({
  model: ModelPerson,
  url:  'http://localhost:9090/api/person/',
  initialize:function(){
    console.info("This collection had been initialized.");
    this.bind('add', this.onAdd,this);
  },
  onAdd:function(change){
      console.info(change);
  },
  validateModels: function() {
       var cloneCollection = this.clone();
       var errorModels = this.filter(function(m) {
         console.info(m.isValid());
          console.info(m);
         if (!m.isValid()) {
           return m;
         }
       });
       // cloneCollection.remove(errorModels);
       return cloneCollection;
     }
});
