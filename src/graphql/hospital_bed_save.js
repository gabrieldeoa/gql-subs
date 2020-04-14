const graphql = require('graphql')

const save_hospital_bed = require('../actions/save_hospital_bed')
const hospital_bed_type = require('./hospital_bed_type')
const hospital_bed_input_type = require('./hospital_bed_input_type')
const socket = require('../../socket');

module.exports = {
  type: hospital_bed_type,
  description: 'Salva uma leito.',
  args: {
    data: { type: hospital_bed_input_type, description: 'Informações de leito' },
  },
  resolve: async (value, args, d, e) => {

    const  result = await save_hospital_bed(args.data);

    socket.publish('HOSPITAL_BED_CREATED', {
      hospital_bed_subscription: { result }
    })

    return result

  }
}
