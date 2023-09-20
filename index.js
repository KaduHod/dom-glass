import express from "express";
import * as dotenv from 'dotenv';
dotenv.config();
import { writeFile } from 'fs/promises';
import { engine } from "express-handlebars";

const porta = process.env.PORT ?? 3000;

const app = express();

app
.engine('.hbs', engine({extname:".hbs"}))
.set('view engine', ".hbs")
.set('views', './public/views')
.use(
    express.static('public')
)

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/index', (req, res) => {
    res.sendFile('/app/index.html')
})

app.get("/compile", (req, res) => {
    res.render('home', {}, (err, html) => writeFile("index.html", html, "utf8"));
})

app.listen(porta, () => console.log(`Rodando em http://localhost:${porta}`)) 