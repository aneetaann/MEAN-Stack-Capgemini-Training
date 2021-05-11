function person(firstname,lastname){
    this.firstname = firstname,
    this.lastname = lastname
}
let sObj = 'new person("Govind","Kumar")';
let realObj = eval(sObj);
console.log(realObj);