const result_type_factory = require('./result_type_factory');
const socket = require('../../socket');
const hospital_bed_type = require('./hospital_bed_type');
const search_hospital_bed = require('../actions/search_hospital_bed');


module.exports = {
  type: result_type_factory('hospital_beds', hospital_bed_type),
  resolve: async (payload) => {

    payload = await search_hospital_bed({});

    return payload;
  },
  subscribe: (payload) => socket.asyncIterator('HOSPITAL_BED_CREATED', payload)
}