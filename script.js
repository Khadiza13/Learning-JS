/*const person={
    Fist:"Khadiza",
    last:"Sultana",
    getfullname:function(){
        return this.Fist+" "+this.last;
    }
}
function greet(){
    console.log("HI, Khadiza");}
person.gre=greet;
person.gre();

console.log(person);
console.log(person.getfullname());*/

//Constructor (for creating obj from function 'new' should be must)

/*function Person(first,last){
    this.firstname=first,
    this.lastname=last,
    this.fullname=function(){
        console.log(this.firstname+" "+this.lastname)
    }
}
const p1=new Person("Khadiza","Sayma");
const p2=new Person("Solaiman","Seyam");
p1.fullname();
Person.prototype.age=24;
console.log(p1.age);
p2.greet=function(){
    console.log("Hi Seyam");
}
p2.greet();*/

//Obj Destructuring(obj to variable)

/*const person={
    Fist:"Khadiza",
    last:"Sultana"
}
let {Fist,last}=person;
console.log(Fist);

//again
let fname="Solaiman";
let lname="Seyam";
const person2={
    fname,
    lname
}
console.log(person2);*/

//Class
/*class Person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    get greet(){
        return "Hi"+" "+this.name;
    }
    set chngname(nname){
        this.name=nname;
    }
}
class Student extends Person{   ///inherited parent class

}
const p1=new Student("Khadiza",23);
console.log(p1);
console.log(p1.greet);
p1.chngname="Seyam";
console.log(p1);*/

//static cant access through obj
//#greet()---private method....has to access through another method inside the class