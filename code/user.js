class User {
  // class
  constructor(firstName = '', lastName = '', emailAddr = '') {
    // default parameter values
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddr;
    // class data members
  }

  get fullName() {
    // typical getting accessor
    let name = `${this.firstName} ${this.lastName} ${this.handle}`;
    // string interpolation

    return name;
  }

  get handle() {
    // getter accessor
    return this.twitterHandle || '';
  }

  get email() {
    return this.emailAddress;
  }
  // no commas! W00T!

  set handle(newHandle) {
    // setter accessor
    const TWITTER_PREFIX = '@';
    // constant value

    this.twitterHandle = TWITTER_PREFIX + newHandle;
  }

  computeUID() {
    // class function member
    const MAX_VALUE = 65536;
    // constant values
    let uid = Math.random() * MAX_VALUE;

    return uid;
  }

  accessControl() {
    return 'limited';
  }
}


var newUser = new User('Vernon', 'Bear', 'vb@sabre.com');
newUser.handle = 'VernonTheBear';

console.log(newUser.fullName);
console.log(newUser.computeUID());
console.log(newUser.accessControl());

console.log('=================');


class SuperUser extends User {

  // subclassing
  constructor(...args) {
    // rest operator
    super(...args);
    // superclass reference
    console.log(`SuperUser!!! constructor sent ${args.length} arguments`);
  }

  accessControl() {
    return 'sudo + all';
  }

  static createDefaultSuperUser() {
    return new SuperUser();
  }

}

var newAdmin = new SuperUser('Nico', 'Vigo');

console.log(newAdmin.fullName);
console.log(newAdmin.computeUID());
console.log(newAdmin.accessControl());

console.log('=================');


var emptyAdmin = SuperUser.createDefaultSuperUser();
console.log(emptyAdmin);

console.log('=================');

