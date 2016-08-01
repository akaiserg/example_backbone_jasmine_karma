var ViewPersons = Backbone.View.extend({

  el: '#table-body',

    initialize: function() {



      this.render();

    },

    render: function() {


      this.$el.html('');
      this.collection.each(function(model) {
        var viewPerson = new ViewPerson({
          model: model
        });
        this.$el.append(viewPerson.render().el);
      }.bind(this));
      return this;

  }

});
