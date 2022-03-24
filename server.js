import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import colors from 'colors';


// configurations ...
const app = express();
app.use(express.json());
dotenv.config();

// setup DB ....
import DB from './config/db.js';
DB();


// Setup view engine.....
import ejs from 'ejs';
app.set('view engine', 'ejs');
ejs.open = '{{';
ejs.close = '}}';



// Import Routes From Here ....
 


// static folder's
const __dirname = path.resolve()
app.use('/assets', express.static(path.join(__dirname, '/assets')))


 

// Serving Server .....
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`.yellow.underline);
});