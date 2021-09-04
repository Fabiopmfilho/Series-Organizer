import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './src/routes.js';
import 'dotenv/config'

const app = express();
const port = process.env.PORT;
const url = process.env.DATABASE_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use(routes);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Conectado no MongoDB')
}).catch ((err) => {
    console.log(`Erro ao se conectar com o MongoDB: ${err}`)
})

app.listen(port, () => { console.log('listening on port ' + port) })