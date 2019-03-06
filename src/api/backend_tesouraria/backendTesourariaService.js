const Tesouraria = require('./backendTesouraria')
const errorHandler = require('../common/errorHandler')

Tesouraria.methods(['get', 'post', 'put', 'delete'])
Tesouraria.updateOptions({new: true, runValidators: true})
Tesouraria.after('post', errorHandler).after('put', errorHandler)

Tesouraria.route('count', (req, res, next) => {
    Tesouraria.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

Tesouraria.route('summary', (req, res, next) => {
    Tesouraria.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

module.exports = Tesouraria