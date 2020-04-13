const hospital_bed_query = require('./hospital_bed_query');
const hospital_bed_save = require('./hospital_bed_save');
const hospital_bed = require('./hospital_bed_type');
const hospital_bed_subscription = require('./hospital_bed_subscription');

module.exports = {
  queries: {
    hospital_bed_query
  },
  mutations: {
    hospital_bed_save
  },
  types: {
    hospital_bed
  },
  subscriptions: {
    hospital_bed_subscription
  }
}