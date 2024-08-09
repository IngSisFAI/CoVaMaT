
import { gql } from 'apollo-server';
const typeDefs = gql`
  type Case {
    _id: ID
    name: String
    domain: Domain
    description: String
    variety: [ID]
  }

  input ReuseCase {
    name: String
    domain: InputDomain
    description: String
    context: [ContextVariety]
  }

  input ContextVariety {
    variationPoint: InputVariationPoint
    variations: [InputVariation]
  }

  input InputCase{
    name: String
    domain: InputDomain
    description: String
    variety: [ID]
  }

  type Query {
    getCases: [Case]
    getCasesByDomain(domain: InputDomain): [Case]
    getCasesSimilarToReuseCase(reuseCase: ReuseCase): [Case]
  }
  type Mutation {
    createCase(inputCase: InputCase):ID
  }
`;
export default typeDefs;