import express from 'express';
import cors from 'cors';
import productRouter from './routes/product.ts'

const app = express();

// middleWare
app.use(cors());
app.use(express.json());

// routes 
app.use(productRouter)

app.listen(3000, () => {
    console.log(`Server is listening on port: 3000`);
})