import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// servidor archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});