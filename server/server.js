const express = require('express');
const app = express();
const mongoose = require('mongoose');
const GameModel = require('./models/GameModel');
const UserModel = require('./models/UserModel');


const URI = "mongodb+srv://admin:123zxc34@cluster0.hoxv5bc.mongodb.net/?retryWrites=true&w=majority";

async function run() {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        mongoose.set('strictQuery', true);
        app.listen(3001, () => {
            console.log(`Server is working now on port ${3001}`);
        });
    }
    catch (e) {
        console.log(e.message);
    }
}

run();
app.use(express.json())

app.get("/getgames", async (req, res) => {
    const cursor = await GameModel.find({}).lean();
    res.json({ cursor: cursor })
})

// app.get('/addgame', async (req, res) => {
//     var name, desc, price, img;
//     name = prompt("Введите название игры");
//     desc = prompt("Введите описание игры");
//     price = prompt("Введите цену игры");
//     img = prompt("Вставьте ссылку на изображение игры");

//     let Name;
//     if(Name != null){
//         Name = name
//     }
//     let Desc;
//     if(Desc != null){
//         Desc = desc;
//     }
//     let Price;
//     if(!/[a-zа-яё]/i.test(Price)){
//         Price = price;
//     }
//     let Img;
//     if(Img != null){
//         Img = img;
//     }

//     const game = new GameModel({
//         Name: Name,
//         Desc: Desc,
//         Price: Price,
//         Img: Img
//     })
//     await game.save();
// })

app.post('/addgame', async (req, res) => {
    console.log(req.body)
    const body = req.body;
    let name;
    if(body.Name != null){
        name = body.Name;
    }
    let desc;
    if(body.Desc != null){
        desc = body.Desc;
    }
    let price;
    if(!/[a-zа-яё]/i.test(body.Price)){
        price = body.Price;
    }
    let img;
    if(body.Img != null){
        img = body.Img;
    }
    else{
        img = "https://images.drive.com.au/driveau/image/upload/c_fill,h_1080,w_1920/q_auto:eco/f_auto/v1/cms/uploads/jjslyagf8e3gcny2doyy";
    }

    const game = new GameModel({
        Name: name,
        Desc: desc,
        Price: price,
        Img: img
    })
    await game.save();
})


app.get("/login", async (req, res) => {
    const cursor = await GameModel.find({}).lean();
    if (cursor == true) {
        alert("Welcome " + cursor.Login)
    }
})