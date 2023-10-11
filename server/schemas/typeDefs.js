const typeDefs = `#graphql
    type Profile {
        _id: ID
        name: String
        email: String
        password: String
        location: String
    }
    type User {
        _id: ID
        
    }
    
    `;

module.exports = typeDefs;
