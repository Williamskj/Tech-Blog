const { User } = require('../models');

const userData = [
    {
        username: "timmy_turner",
        email: "timmy_t@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "danny_phantom",
        email: "danny_p@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "carl_wheezer",
        email: "carl_w@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "toph_befong",
        email: "toph_b@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "jimmy_neutron",
        email: "jimmy_n@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "stimpy",
        email: "stimpy@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;