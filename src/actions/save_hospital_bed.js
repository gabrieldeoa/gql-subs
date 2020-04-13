const hospital_bed = require('../models/hospital_bed');


module.exports = async (data, options) => {
  const id = data.id || null;

  if (id) {

    return hospital_bed.findAndUpdate(
      id,
      data,
      options
    );

  }

  return hospital_bed.create(data, options)
};
