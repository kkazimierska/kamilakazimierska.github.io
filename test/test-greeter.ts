import greeter from "../scripts/greeter"
let user = {'firstName':"Kamila", "lastName": "Kazimierska"}
assert.areEqual(greeter(user), "Hello, Kamila Kazimierska");
