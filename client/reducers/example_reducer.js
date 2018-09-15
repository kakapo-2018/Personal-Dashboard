const router = require('express').Router()

router.get('/:recipe', (req, res) => {
    accessDB.exampleDbFunction()
    .then(result => {
        console.log('router DB result:', result)
        res.json(result)
    })
})

module.exports = router