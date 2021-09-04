import mongoose from 'mongoose';

const SerieSchema = new mongoose.Schema({
    "name": {
        type: String,
        uppercase: true,
        required: true,
    },
    "category": {
        type: String,
        required: [true, 'Necessário uma categoria'],
    },
    "season": {
        type: Number,
        required: [true, 'Necessário o número da temporada'],
    },
    "episode": {
        type: Number,
        required: [true, 'Necessário o número do episódio'],
    },
    "status": {
        type: String,
        required: [true, 'Necessário o status da série.'],
    },
}, {timestamps: true});

export default mongoose.model('Serie', SerieSchema);