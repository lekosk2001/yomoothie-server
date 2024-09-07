const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    peopleFiltered(
      team: Int
      sex: Sex
      blood_type: BloodType
      from: String
    ): [People]
    equipments: [Equipment]
    equipmentAdvs: [EquipmentAdv]
    softwares: [Software]
    software: Software
    supplies: [Supply]
    givens: [Given]
    people: [People]
  }
`;

module.exports = typeDefs;
