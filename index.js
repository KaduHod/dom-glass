import express from "express";
import { create, engine } from "express-handlebars";

const app = express();

app
.engine('.hbs', engine({extname:".hbs"}))
.set('view engine', ".hbs")
.set('views', './public/views')
.use(
    express.static('./public')
)

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3333, () => console.log('rodando'))