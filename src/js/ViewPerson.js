var ViewPerson= Backbone.View.extend({

  tagName: 'tr',

  events: {

    'click .add-one': 'addOne',
    'click .edit-one': 'editInfo'

  },

  template: _.template($('#data-template').html()),

   initialize: function() {

      this.listenTo(this.model, "change", this.render, this);

   },

   render: function() {

     console.info(this.model.attributes);

     this.$el.html(this.template({
       name:this.model.attributes.name,
       lastName:this.model.attributes.lastName,
       age:this.model.attributes.age,
       countExtra: this.model.attributes.extra.length,
       error_msj:'ss'
     }));
     return this;

   },

   addOne: function(e) {

     e.preventDefault();
     var extra = _.clone(this.model.get("extra"));
     if(extra!==null){
        extra.push(1);
     }else{
       extra=new Array(1);
     }
     this.model.set({'extra':extra},{validate:true});
     console.info( this.model.validationError);

  },

  editInfo:function(){


    var viewFormPerson = new ViewFormPerson({
      model: this.model
    });
    viewFormPerson.render();

   //this.$el("#form_id").append(viewFormPerson.render().el);

  }

 });
