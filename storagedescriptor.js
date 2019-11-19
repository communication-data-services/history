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
