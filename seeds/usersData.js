const { User } = require('../models')

const userData = [
    {
        username: "testuser1",
        first_name: "Joe",
        last_name: "Shmo",
        password: "password",
    },
    {
        username: "testuser2",
        firstName: "Sally",
        lastName: "Walker",
        password: "password",
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;