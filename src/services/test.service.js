const { faker } = require("@faker-js/faker")

class Test {
    constructor() { }

    getTestProduct() {
        const randomProductsFaker = []

        for (let i = 1; i <= 5; i++) {
            randomProductsFaker.push({
                id: faker.random.numeric(),
                name: faker.commerce.product(),
                price: faker.commerce.price(),
                thumbnail: faker.image.avatar()
            })
        }

        return randomProductsFaker
    }
}

module.exports = Test

