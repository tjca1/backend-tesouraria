const restful = require('node-restful')
const mongoose = restful.mongoose

const creditoSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o Nome do Crédito!'] },
    value: { type: Number, min: 0, required: true }
})

const debitoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: [true, 'Informe o valor do Débito!'] },
    status: { type: String, required: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const tesourariaSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o valor da Transação!'] },
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, min: 1970, max: 2100, required: true },
    credits: [creditoSchema],
    debts: [debitoSchema]
})

module.exports = restful.model('BackendTesouraria',tesourariaSchema)


