
// testing
describe('ModelPerson spec', function() {

  var model;

  beforeEach(function(){

    model = new ModelPerson();

  });

  it('Model should be created', function () {

            expect(model).toBeDefined();

  });

  it('When  a PersonModel is  created, it  must be empty ', function() {

    expect(model.attributes).toEqual({});

  });

  it('When the name is set  with less than  two characters an error must exist', function() {

      model.set({'name':'aa'},{validate:true});
      var error = model.getErrors();

      expect("The name has to have more than 5 characters").toEqual(error[0]);

  });

  it('When the name is set  with less than  two characters an error must exist when   the method invalid is called', function() {

      model.set({'name':'aa'},{validate:true});
      var errors=model.on('invalid');

      expect("The name has to have more than 5 characters").toEqual(errors.validationError[0]);

  });

  it('When the lastName is set  with less than  two characters an error must exist', function() {

      model.set({'lastName':'aa'},{validate:true});
      var error = model.getErrors();

      expect("The lastName has to have more than 5 characters").toEqual(error[0]);

  });

  it('When the lastName is set  with less than  two characters an error must exist when   the method invalid is called', function() {

      model.set({'lastName':'aa'},{validate:true});
      var errors=model.on('invalid');

      expect("The lastName has to have more than 5 characters").toEqual(errors.validationError[0]);

  });

  it('When the age is set   with less than 18 an error must exist', function() {

      model.set({'age':17},{validate:true});
      var error = model.getErrors();

      expect("The age has to be over 17").toEqual(error[0]);

  });

  it('When the global  attribute is set with no attributes  and it does not  have the attributes val1  and val2 an error must exist', function() {

      model.set({'global':{}},{validate:true});
      var error = model.getErrors();

      expect("it has to be an object with two attributes  val1 and val2").toEqual(error[0]);

  });

  it('When the global  attribute is set with only one attribute  and it does not  have the attribute  val2 an error must exist', function() {

      model.set({'global':{val1:1}},{validate:true});
      var error = model.getErrors();

      expect("it has to be an object with two attributes  val1 and val2").toEqual(error[0]);

  });

  it('When the global  attribute is set with only one attribute  and it does not  have the attribute  val1 an error must exist', function() {

      model.set({'global':{val2:1}},{validate:true});
      var error = model.getErrors();

      expect("it has to be an object with two attributes  val1 and val2").toEqual(error[0]);

  });

  it('When the extra  attribute is set  it must be an array', function() {

      model.set({'extra':null} ,{validate:true});
      var error = model.getErrors();

      expect("it has to be  an array").toEqual(error[0]);

  });

  it('When the model is set completely   there should not be errors', function() {

      model.set({'name':'the name'} ,{validate:true});
      model.set({'lastName':'last name'} ,{validate:true});
      model.set({'age':28} ,{validate:true});
      model.set({'global':{'val1':12,'val2':'text'}} ,{validate:true});
      model.set({'extra':new Array(2,2,3)} ,{validate:true});
      var error = model.getErrors();
      console.info(model.get("name"));
      expect(error.length).toEqual(0);

  });

  it('When the model is set  with  two attributes with errors  there must be two errors', function() {

      model.set({'name':'aa','extra':2} ,{validate:true});
      var error = model.getErrors();
       console.info(error);
      expect(error.length).toEqual(2);

  });

  it('When  all the attributes are  set they  must be gotten by the set method', function() {

        model.set({
          'name':'the name',
          'lastName':'last name',
          'age':28,
          'global':{'val1':12,'val2':'text'},
          'extra':new Array(2,2,3)
        },{validate:true});
    //model.set({'name':'the name'},{validate:true})

    expect('the name').toEqual(model.get('name'));

  });


  it('When  one attribute is  set it must be gotten by the set method', function() {

    model.set({'name':'the name'},{validate:true});

    expect('the name').toEqual(model.get('name'));

  });


});
