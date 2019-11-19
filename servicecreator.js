function createHistoryService(execlib, ParentService) {
  'use strict';
  var dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function HistoryService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(HistoryService, factoryCreator, require('./storagedescriptor'));
  
  HistoryService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  HistoryService.prototype.createStorage = function(storagedescriptor) {
    return ParentService.prototype.createStorage.call(this, storagedescriptor);
  };
  return HistoryService;
}

module.exports = createHistoryService;
