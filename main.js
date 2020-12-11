/******************
 * YOUR CODE HERE *
 ******************/

const Person = (value1, value2, value3, value4) => {
  return {
    firstName: value1,
    lastName: value2,
    age: value3 === undefined ? age = 0 : age = value3,
    married: value4 === undefined ? married = false : married = value4,
    spouseName: "",
    goingOn: function() {
      newAge = [];
      newAge.push(this.age + 1);
      return newAge[0];
    },
    ageUp: function() {
      this.age = this.age + 1;
    },
    getFullName: function() {
      return this.firstName + ' ' + this.lastName;
    },
    marry: function(value) {
      this.married = true;
      value.married = true;
      this.spouseName = value.getFullName();   
      value.spouseName = this.getFullName();   
    },
    divorce: function(value) {
      this.married = false;
      value.married = false;
      delete this['spouseName'];
      delete value['spouseName'];
    }
  }
}



const person1 = Person('Colin', 'Jaffe', 30)
person1;

person1.goingOn();
a = person1.age 
a;




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof Person === 'undefined') {
  Person = undefined;
}


module.exports = Person;
