import express from 'express';
import cors from 'cors';
import  userReducer  from './routes/userRoutes.js';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

//servidor archivos estaticos del frontend
app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/users', userRoutes);

app.listen(300, () => {
    console.log('Servidor en http://localhost:3000')
});
