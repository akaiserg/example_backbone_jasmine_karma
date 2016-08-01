var person= new PersonModel();
person.on('invalid',function(error){
  console.info(error.validationError);
  // error handling here
});
person.set({name:"neee"},{validate: true});

person.set({name:"n"},{validate: true});


person.set({name:"neeewww"},{validate: true});

console.info(person.get("name"));
