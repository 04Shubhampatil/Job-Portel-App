import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './util/db.js';
import userRoute from './routes/user.route.js'
import companyRoute from './routes/company.route.js'
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));// parse application/x-www-form-urlencoded
app.use(cookieParser())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/v1/user',userRoute)

app.use('/api/v1/company',companyRoute)



app.listen(PORT, () => {
    connectDB()
    console.log(`Server running on port port${PORT}`);
});