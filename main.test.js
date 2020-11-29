const Person = require('./main.js')


describe('Person', () => {
  it(`returns an object`, () => {
    const person1 = Person();
    expect(typeof person1).toBe('object')
  })
})

describe('person.firstName', () => {
  it(`is set to the first argument passed in to Person`, () => {
    const person1 = Person('Colin');
    expect(person1.firstName).toBe('Colin')

    const person2 = Person('Mesuara');
    expect(person2.firstName).toBe('Mesuara')
  })
})

describe('person.lastName', () => {
  it(`is set to the second argument passed in to Person`, () => {
    const person2 = Person('Mesuara', 'Kaleziq');
    expect(person1.lastName).toBe('Jaffe')

    const person1 = Person('Colin', 'Jaffe');
    expect(person2.lastName).toBe('Kaleziq')
  })
})

describe(`person.age`, () => {
  it(`is set to the third parameter passed in to the Person function`, () => {
    const person1 = Person('John', 'Smith', 53);
    expect(person1.age).toBe(53);

    const person2 = Person('Marley', 'Jones', 45);
    expect(person2.age).toBe(45);
  })
})

describe(`person.married`, () => {
  it(`is set to the fourth parameter passed in to the Person function`, () => {
    const person1 = Person('John', 'Smith', 53, true);
    expect(person1.married).toBe(true)

    const person2 = Person('Biggie', 'Smalls', 58, false);
    expect(person2.married).toBe(false)

    const person3 = Person('Indiana', 'Jones', 18, true);
    expect(person3.married).toBe(true)
  })

  it(`is set to false by default`, () => {
    const person1 = Person('John', 'Smith', 53);
    expect(person1.married).toBe(false)

    const person2 = Person('Indiana', 'Jones', 18);
    expect(person2.married).toBe(false)
  })
})

describe(`person.goingOn`, () => {
  it(`is a function`, () => {
    const person1 = Person();
    expect(typeof person1.goingOn).toBe('function')
  })

  it(`returns the age the person will be at their next birthday`, () => {
    const person1 = Person('Alice', 'Jaffe', 2);
    expect(person1.goingOn()).toBe(3)

    const person2 = Person('Maisie', 'Jaffe', 7);
    expect(person2.goingOn()).toBe(8)
  })

  it(`doesn't change the person's age`, () => {
    const person1 = Person('Alice', 'Jaffe', 2);
    person1.goingOn();
    expect(person1.age).toBe(2);

    const person2 = Person('Elizabeth', 'Cho', 30);
    person2.goingOn();
    expect(person2.age).toBe(30);
  })
})

describe(`person.ageUp`, () => {
  it(`is a function`, () => {
    const person1 = Person();
    expect(typeof person1.ageUp).toBe('function')
  })

  it(`increments the person's age by 1`, () => {
    const person1 = Person('Alice', 'Jaffe', 3);
    person1.ageUp()
    expect(person1.age).toBe(4)

    const person2 = Person('Maisie', 'Jaffe', 7);
    person2.ageUp()
    expect(person2.age).toBe(8)
  })
})

describe('person.getFullName', () => {
  it(`returns the person's first name and last name, with a space in the middle`, () => {
    const person1 = Person('Colin', 'Jaffe');
    expect(person1.getFullName()).toBe('Colin Jaffe')

    const person2 = Person('Mesuara', 'Kaleziq');
    expect(person2.getFullName()).toBe('Mesuara Kaleziq')
  })

  it(`responds to changes in firstName and lastName`, () => {
    const person1 = Person('Colin', 'Jaffe');
    person1.firstName = 'Danger';
    expect(person1.getFullName()).toBe('Danger Jaffe')

    const person2 = Person('Mesuara', 'Kaleziq');
    person2.lastName = 'The Great';
    expect(person2.getFullName()).toBe('Mesuara The Great')
  })
})

describe('marry', () => {
  it(`sets the person's married status to married`, () => {
    const person1 = Person();
    const person2 = Person();
    person1.marry(person2)
    expect(person1.married).toBe(true);
  })

  it(`sets the given person's married status to married`, () => {
    const person1 = Person();
    const person2 = Person();
    person1.marry(person2);
    expect(person2.married).toBe(true);
  })
  
  it(`sets the person's spouseName to be the full name of the given person`, () => {
    const person1 = Person('Peter', 'Parker');
    const person2 = Person('Mary', 'Jane');
    const person3 = Person('Clark', 'Kent');
    const person4 = Person('Lois', 'Lane');
    person1.marry(person2);
    expect(person1.spouseName).toBe('Mary Jane');
    person4.marry(person3);
    expect(person4.spouseName).toBe('Clark Kent');
  })

  it(`sets the given person's spouseName to be the full name of the original person`, () => {
    const person1 = Person('Peter', 'Parker');
    const person2 = Person('Mary', 'Jane');
    const person3 = Person('Clark', 'Kent');
    const person4 = Person('Lois', 'Lane');

    person1.marry(person2);
    expect(person2.spouseName).toBe('Peter Parker');
    person4.marry(person3);
    expect(person3.spouseName).toBe('Lois Lane');
  })
})

describe('divorce', () => {
  it(`sets the person's marital status to not married`, () => {
    const person1 = Person('Peter', 'Parker');
    const person2 = Person('Mary', 'Jane');
    const person3 = Person('Clark', 'Kent');
    const person4 = Person('Lois', 'Lane');
    person1.marry(person2);
    person1.divorce(person2);
    expect(person1.married).toBe(false)
    person3.marry(person4);
    person3.divorce(person4);
    expect(person3.married).toBe(false)
  })

  it(`sets the marital status of the given person to not married`, () => {
    const person1 = Person('Peter', 'Parker');
    const person2 = Person('Mary', 'Jane');
    person1.marry(person2);
    person1.divorce(person2);
    expect(person2.married).toBe(false)

    const person3 = Person('Clark', 'Kent');
    const person4 = Person('Lois', 'Lane');
    person3.marry(person4);
    person3.divorce(person4);
    expect(person4.married).toBe(false)
  })

  it(`removes the person's spouseName property entirely`, () => {
    const person1 = Person('Peter', 'Parker');
    const person2 = Person('Mary', 'Jane');
    const person3 = Person('Clark', 'Kent');
    const person4 = Person('Lois', 'Lane');
    person1.marry(person2)
    person4.marry(person3)

    person1.divorce(person2);
    expect('spouseName' in person1).toBe(false)
    expect('spouseName' in person2).toBe(false)
    person4.divorce(person3);
    expect('spouseName' in person3).toBe(false)
    expect('spouseName' in person4).toBe(false)
  })
})
