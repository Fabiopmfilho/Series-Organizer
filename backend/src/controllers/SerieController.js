import  Mongoose from "mongoose";
import Serie from "../model/Serie.js";

class SerieController {
    async post(req, res) {
        try {
            const data = await Serie.create(req.body);
            
            return res.json(data);
        } catch (e) {
            return 'Erro ao salvar série. Tente novamente.'
        }
    }

    async get(req, res) {
        try {
            const data = await Serie.find({});

            return res.json(data);
        } catch (e) {
            return 'Erro ao buscar todas as séries. Tente novamente.'
        }
    }

    async getById(req, res) {
        try {
            const data = await Serie.findById(req.params.id);

            return res.json(data);
        } catch (e) {
            return 'Erro ao buscar série. Tente novamente.'
        }
    }

    async update(req, res) {
        try {
            const data = await Serie.updateOne({ _id: req.params.id }, req.body);

            return res.json({...req.body, ...data});
        } catch (e) {
            return 'Erro ao editar a série. Tente novamente.'
        }
    }

    async delete(req, res) {
        try {
            const data = await Serie.deleteOne({ _id: req.params.id });

            return res.json(data);
        } catch (e) {
            return 'Erro ao apagar série. Tente novamente.'
        }
    }
}

export default new SerieController();