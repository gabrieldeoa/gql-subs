const { gql } = require('apollo-server');
const search_hospital_bed = require('../actions/search_hospital_bed');
const save_hospital_bed = require('../actions/save_hospital_bed');
const socket = require('../../socket');

const typeDefs = gql`
  type HospitalBed {
    id: Int
    situacao: String
    status: String
    observacao: String
    criado_em: String
    alterado_em: String
  }

  type Query {
    hospitalBeds(
      id: Int,
      situacao: String,
      status: Int,
      observacao: String,
      criado_em: String,
      alterado_em: String
    ): [HospitalBed]
  }

  type Subscription {
    hospitalBedAdded(
      id: Int,
      situacao: String,
      status: Int,
      observacao: String,
      criado_em: String,
      alterado_em: String
    ): [HospitalBed]
  }

  type Mutation {
    addHospitalBed(
      id: Int,
      situacao: String,
      status: Int,
      observacao: String,
      criado_em: String,
      alterado_em: String,
    ): HospitalBed
  }
`;


const resolvers = {
  Query: {
    hospitalBeds: (parent, args, context, info) =>  {
      return search_hospital_bed(args);
    }
  },
  Mutation: {
    addHospitalBed: (parent, args, context, info) =>  {
      socket.publish('hospitalBedAdded', { hospitalBedAdded: { ...args }})
      return save_hospital_bed(args);
    }
  },
  Subscription: {
    hospitalBedAdded: {
      resolve: async() => {
        const payload = await search_hospital_bed({})
        return payload;
      },
      subscribe: (payload) => socket.asyncIterator('hospitalBedAdded', payload)
    }
  },
};

module.exports = {
  typeDefs,
  resolvers
}