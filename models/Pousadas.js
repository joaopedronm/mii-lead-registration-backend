// backend/models/Pousadas.js
const mongoose = require('mongoose');

const PousadasSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    amenities: { type: String, required: true },
    quartos: { type: String, required: true },
    diaria: { type: String, required: true },
    tiposDeQuartos: { type: String, required: true },
    atividades: { type: String, required: true },
    endereco: { type: String, required: true },
    whatsapp: { type: String, required: true },
    instagram: { type: String, required: true },
    link: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Pousadas', PousadasSchema);
