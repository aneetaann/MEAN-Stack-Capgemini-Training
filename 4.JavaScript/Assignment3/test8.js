function person(fname,lname,age,skill,dateofbirth,address,married,profession){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skill=skill;
    this.dateofbirth=dateofbirth;
    this.address=address;
    this.married=married;
    this.profession=profession;
}
person1=new person("rekha","abc",22,"HTML","12/01/1998",{city:"mumbai",pincode:"12345"},"false","analyst")
person2=new person("reshma","xyz",23,"java","24/05/1998",{city:"delhi",pincode:"1234567"},"false","sr analyst")
print=function()
{
    console.log(person1);
    console.log(person2);
}();
