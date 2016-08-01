var ViewFormPerson = Backbone.View.extend({

 el: $("#form_id"), //grab an existing element: ,


 events: {

   'click .btn-save-info': 'saveInfo',
   'click .btn-close-info': 'closeInfo'

 },

template: _.template($('#form-template').html()),

   initialize: function() {
     //this.listenTo(this.model, "change", this.render);
   },

   render: function() {

     this.$el.html(this.template(this.model.attributes));

     //return this;

   },

   saveInfo: function(){

     var name=$("#name_id").val();
     var lastName=$("#lastName_id").val();
     var age=$("#age_id").val();
     this.updateModel(name,lastName,age);

   },

   updateModel:function(name,lastName,age){


      console.info(this.model);
      this.model.set({'name':name,'lastName':lastName,'age':age},{validate:true});
      console.info(this.model.getErrors());
      if(this.model.getErrors().length>0){
        this.$('#error_id').removeClass('hide');
        this.$("#error_id").html(this.model.getErrors().toString());
      }else{
          this.$('#error_id').addClass('hide');
      }


   },

  closeInfo: function(){

     this.unbind();

   },

   unbind:function(){

      this.$el.empty().off();

   }



});
