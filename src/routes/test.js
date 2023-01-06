const express = require('express')
const router = express.Router()
const TestService = require('../services/test.service.js')

const testService = new TestService()

router.get('/api/productos-test', async (_, res) => {
    try {
        const mockProduct = await testService.getTestProduct()
        res.status(200).json({
            sucess: true,
            data: mockProduct
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})


module.exports = router