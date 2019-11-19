(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
ALLEX.execSuite.registry.registerClientSide('communication__data_historyservice',require('./websinkmapcreator')(ALLEX, ALLEX.execSuite.registry.getClientSide('allex_dataservice')));

},{"./websinkmapcreator":9}],2:[function(require,module,exports){
module.exports = {
};

},{}],3:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],4:[function(require,module,exports){
function createServiceSink(execlib, ParentSink) {
  'use strict';
  function ServiceSink(prophash, client) {
    ParentSink.call(this, prophash, client);
  }
  
  ParentSink.inherit(ServiceSink, require('../methoddescriptors/serviceuser'), require('../visiblefields/serviceuser'),require('../storagedescriptor'));
  ServiceSink.prototype.__cleanUp = function () {
    ParentSink.prototype.__cleanUp.call(this);
  };
  return ServiceSink;
}

module.exports = createServiceSink;

},{"../methoddescriptors/serviceuser":2,"../storagedescriptor":6,"../visiblefields/serviceuser":7}],5:[function(require,module,exports){
function createUserSink(execlib, ParentSink) {
  'use strict';
  function UserSink(prophash, client) {
    ParentSink.call(this, prophash, client);
  }
  
  ParentSink.inherit(UserSink, require('../methoddescriptors/user'), require('../visiblefields/user'),require('../storagedescriptor'));
  UserSink.prototype.__cleanUp = function () {
    ParentSink.prototype.__cleanUp.call(this);
  };
  return UserSink;
}

module.exports = createUserSink;

},{"../methoddescriptors/user":3,"../storagedescriptor":6,"../visiblefields/user":8}],6:[function(require,module,exports){
module.exports = {
  primaryKey: 'id',
  indices: [{
    fields: ['sendingsystem', 'sendingsystemid'],
    unique: true,
    allownulls: true
  },{
    fields: ['from', 'status', 'notsendbefore']
  }],
  record:{
    fields:[{
      name: 'id',
      type: 'string'
    },{
      name: 'status',
      type: 'number'
    },{
      name: 'substatus',
      type: 'number'
    },{
      name: 'sendingsystem',
      type: 'string'
    },{
      name: 'sendingsystemid',
      type: 'string'
    },{
      name: 'backreference',
      type: 'string'
    },{
      name: 'forwardreference',
      type: 'string'
    },{
      name: 'from',
      type: 'string'
    },{
      name: 'to',
      type: 'string'
    },{
      name: 'subject',
      type: 'string'
    },{
      name: 'text',
      type: 'string'
    },{
      name: 'html',
      type: 'string'
    },{
      name: 'notsendbefore',
      type: 'number'
    },{
      name: 'notsendafter',
      type: 'number'
    },{
      name: 'sendingsystemnotified',
      type: 'number'
    },{
      name: 'errors',
      type: 'array',
      default: []
    }]
  }
};

},{}],7:[function(require,module,exports){
module.exports = [];

},{}],8:[function(require,module,exports){
module.exports = ['id', 'status', 'substatus', 'sendingsystem', 'sendingsystemid', 'backreference', 'forwardreference', 'from', 'to', 'subject', 'text', 'html', 'notsendbefore', 'notsendafter', 'sendingsystemnotified', 'errors'];

},{}],9:[function(require,module,exports){
function webSinkMapCreator(execlib, ParentSinkMap) {
  'use strict';
  var sinkmap = new (execlib.lib.Map);
  sinkmap.add('service', require('./sinks/servicesinkcreator')(execlib, ParentSinkMap.get('service')));
  sinkmap.add('user', require('./sinks/usersinkcreator')(execlib, ParentSinkMap.get('user')));
  
  return sinkmap;
}

module.exports = webSinkMapCreator;

},{"./sinks/servicesinkcreator":4,"./sinks/usersinkcreator":5}]},{},[1]);
