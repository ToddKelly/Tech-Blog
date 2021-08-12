const { User } = require('../models');
const userData = [
    {
        username: "toddK",
        email: "toddkelly@hotmail.com",
        password: "user1"
    },
    {
        username: "mary_scrim",
        email: "mary@mary.com",
        password: "user2"
    },
    {
        username: "beccan",
        email: "becca@becca.com",
        password: "user3"
    },
    {
        username: "kevinn",
        email: "kevin@kevin.com",
        password: "user4"
    }
]
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;