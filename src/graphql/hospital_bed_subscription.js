const socket = require('../../socket');
const hospital_bed_type = require('./hospital_bed_type');

module.exports = {
  type: hospital_bed_type,
  subscribe: (payload) => socket.asyncIterator('HOSPITAL_BED_CREATED', payload)
}