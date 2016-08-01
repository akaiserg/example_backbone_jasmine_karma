var ModelPerson= Backbone.Model.extend({
  errorMessages:{
    name:'The name has to have more than 5 characters',
    lastName:'The lastName has to have more than 5 characters',
    age:'The age has to be over 17',
    global:'it has to be an object with two attributes  val1 and val2',
    extra:'it has to be  an array'

  },
  errors:[],
  default:{
    name: "",
    lastName: "",
    age:0,
    global:{
      val1:null,
      val2:null
    },

    extra:undefined
  },

  getErrors: function(){

    return this.errors;

  },
  initialize: function(){

    console.log('This model has been initialized.');
    this.errors=[];
    this.bind('change', this.onChange,this);
    this.bind('all', this.allTries, this);

  },


  allTries: function(change){

    console.info(change);

  },
  onChange: function(change) {

    console.log('- Values for this model have changed.',change);
    //this.trigger('model_change', change.changed);

  },
  validate: function(attributes, options){

    this.errors=[];
    var contErrors=0;
    if(attributes.name!== undefined && attributes.name.length < 5){
      this.errors[contErrors++]=this.errorMessages.name;
    }
    if(attributes.lastName!== undefined && attributes.lastName.length < 5){
      this.errors[contErrors++]=this.errorMessages.lastName;
    }
    if(attributes.age!== undefined && attributes.age < 18){
      this.errors[contErrors++]=this.errorMessages.age;
    }
    if(attributes.global!== undefined && (attributes.global.val1 === undefined || attributes.global.val2 === undefined)){
      this.errors[contErrors++]=this.errorMessages.global;
    }

    if(attributes.extra!== undefined && !Array.isArray(attributes.extra)){
      this.errors[contErrors++]=this.errorMessages.extra;
    }

    // returns  somwthing just when  there are errors
    if(this.errors.length!==0){
        return this.errors;
    }

  },
},
// statics
{}

);
