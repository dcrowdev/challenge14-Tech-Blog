const { User } = require('../models');

const userSeedsArr = [
    {
        username: "JSdev199",
        password: "ilovejs"
    },
    {
        username: "MERNstacker",
        password: "mernmern"
    },
    {
        username: "testUser40",
        password: "testpassword"
    },
    {
        username: "snakebite",
        password: "passwordtest"
    },
    {
        username: "anonymouse0017",
        password: "seven3^"
    }
]

const userSeeds = () => User.bulkCreate(userSeedsArr);

module.exports = userSeeds;