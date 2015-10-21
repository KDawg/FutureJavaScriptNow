'use strict';

console.log('ES2015 R&D Suite Executing...');
console.log('=================');

TimeSucker();
TimeSucker(100000);
TimeSucker(1000000);
ReportTheSuck();

function TimeSucker() {
  var howMuchSuck = arguments.length <= 0 || arguments[0] === undefined ? 1000 : arguments[0];

  // default values
  performance.mark('ts:before');

  var randomNumber = Math.random();
  // scoped variable declaration

  for (var i = 0; i < howMuchSuck; i++) {
    Math.cos(randomNumber);
    Math.sqrt(randomNumber);
    Math.sin(randomNumber);
  }

  performance.mark('ts:after');
  performance.measure('ts', 'ts:before', 'ts:after');
}

function ReportTheSuck() {
  var measures = performance.getEntriesByType('measure');

  console.log('ReportOnTimeSucker...');

  measures.forEach(function (entry, index, allEntries) {
    // arrow syntax for anonymous function
    console.log(entry.duration + ' ms of sucking');
    // string interpolation
  });

  console.log('=================');
}
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

(function () {

  var primary = undefined,
      secondary = undefined,
      allColors = undefined;

  function setupColors() {
    primary = ['red', 'green', 'blue'];
    secondary = ['yellow', 'magenta', 'cyan'];

    allColors = [].concat(_toConsumableArray(primary), ['white', 'black'], _toConsumableArray(secondary));
    // spread operator (spreading elements of an iterable collection)
  }

  function reportColors() {
    console.log('Let\'s include all of the colors: ' + allColors);
    console.log('=================');
  }

  setupColors();
  reportColors();
})();
'use strict';

var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var User = (function () {
  // class

  function User() {
    var firstName = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    var lastName = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    var emailAddr = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

    _classCallCheck(this, User);

    // default parameter values
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddr;
    // class data members
  }

  _createClass(User, [{
    key: 'computeUID',
    value: function computeUID() {
      // class function member
      var MAX_VALUE = 65536;
      // constant values
      var uid = Math.random() * MAX_VALUE;

      return uid;
    }
  }, {
    key: 'accessControl',
    value: function accessControl() {
      return 'limited';
    }
  }, {
    key: 'fullName',
    get: function get() {
      // typical getting accessor
      var name = this.firstName + ' ' + this.lastName + ' ' + this.handle;
      // string interpolation

      return name;
    }
  }, {
    key: 'handle',
    get: function get() {
      // getter accessor
      return this.twitterHandle || '';
    },

    // no commas! W00T!

    set: function set(newHandle) {
      // setter accessor
      var TWITTER_PREFIX = '@';

      this.twitterHandle = TWITTER_PREFIX + newHandle;
    }
  }, {
    key: 'email',
    get: function get() {
      return this.emailAddress;
    }
  }]);

  return User;
})();

var newUser = new User('Vernon', 'Bear', 'vb@sabre.com');
newUser.handle = 'VernonTheBear';

console.log(newUser.fullName);
console.log(newUser.computeUID());
console.log(newUser.accessControl());

console.log('=================');

var SuperUser = (function (_User) {
  _inherits(SuperUser, _User);

  // subclassing

  function SuperUser() {
    _classCallCheck(this, SuperUser);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // rest operator
    _get(Object.getPrototypeOf(SuperUser.prototype), 'constructor', this).apply(this, args);
    // superclass reference
    console.log('SuperUser!!! constructor sent ' + args.length + ' arguments');
  }

  _createClass(SuperUser, [{
    key: 'accessControl',
    value: function accessControl() {
      return 'sudo + all';
    }
  }], [{
    key: 'createDefaultSuperUser',
    value: function createDefaultSuperUser() {
      return new SuperUser();
    }
  }]);

  return SuperUser;
})(User);

var newAdmin = new SuperUser('Nico', 'Vigo');

console.log(newAdmin.fullName);
console.log(newAdmin.computeUID());
console.log(newAdmin.accessControl());

console.log('=================');

var emptyAdmin = SuperUser.createDefaultSuperUser();
console.log(emptyAdmin);

console.log('=================');
