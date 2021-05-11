function person(firstname,lastname){
    this.firstname = firstname,
    this.lastname = lastname
}
let sObj = 'new person("Govind","Kumar")';
let realObj = eval(sObj);
console.log(realObj);
//7th question
let jObj = JSON.parse('{"firstname":"Govinda","lastname":"Gopala"}');
console.log(jObj);