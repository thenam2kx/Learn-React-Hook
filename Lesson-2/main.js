class Person {
  constructor (name, address) {
    this.name = name
    this.address = address
  }

  getAddress () {
    return 'I live in' + this.address
  }

}
const test = new Person('The nam', 'Ha Noi')
console.log(test.getAddress());

/**
 * 
 */
