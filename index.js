import express from "express";
import { engine } from "express-handlebars";

const porta = 3333;

const app = express();

app
.engine('.hbs', engine({extname:".hbs"}))
.set('view engine', ".hbs")
.set('views', './public/views')
.use(
    express.static('public')
)

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(porta, () => console.log(`Rodando em http://localhost:${porta}`)) 