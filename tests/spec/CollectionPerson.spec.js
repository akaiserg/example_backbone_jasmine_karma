// testing
describe('CollectionPerson spec', function() {

  var collection;

  beforeEach(function(){

    collection = new CollectionPerson();
    collection.reset();

  });

  it('Collection should be created', function () {

            expect(collection).toBeDefined();

  });

  it('When  a collection does not have item  it   size should be 0 ', function() {

    expect(collection.length).toEqual(0);

  });

  it('When  a collection  adds a model  the  size should be 1', function() {

    model = new ModelPerson();
    model.set({'name':'the name'} ,{validate:true});
    model.set({'lastName':'last name'} ,{validate:true});
    model.set({'age':28} ,{validate:true});
    model.set({'global':{'val1':12,'val2':'text'}} ,{validate:true});
    model.set({'extra':new Array(2,2,3)} ,{validate:true});

    collection.add(model);

    expect(collection.length).toEqual(1);

  });


  it('When  a collection  removes a model  the  size should be 0', function() {

    model = new ModelPerson();
    model.set({'name':'the name'} ,{validate:true});
    model.set({'lastName':'last name'} ,{validate:true});
    model.set({'age':28} ,{validate:true});
    model.set({'global':{'val1':12,'val2':'text'}} ,{validate:true});
    model.set({'extra':new Array(2,2,3)} ,{validate:true});

    collection.add(model);
    //console.info(collection.models);
    collection.remove(model);

    expect(collection.length).toEqual(0);

  });


});
