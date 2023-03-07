import React from "react";
import Axios from "axios";

var login, password, name, desc, price, img;
export default function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-li"><a href="/">Главная</a></div>
            <div className="nav-li" onClick={Contacts}>Контакты</div>
            <div className="nav-li" onClick={SignIn}>Кабинет</div>
            <div className="nav-li" onClick={AddGameDB}>Добавить игру (Admin)</div>
        </nav>
    );
}

function Contacts() {
    alert("Наши контакты:\n+380 44 500 70 40 - Ярослав\n+380 44 232 69 78 - Руслан\nНаши инстаграммы указаны в самом низу страницы! Пока");
}
function SignIn() {
    login = prompt("Введите логин");
    password = prompt("Введите пароль");
    console.log(login);
    console.log(password);
}

const AddGameDB = async () => {
    name = prompt("Введите название игры");
    if(name == null){
        name = "NULL NAME";
    }
    desc = prompt("Введите описание игры");
    if(desc == null){
        desc = "NULL DESCRIPTION";
    }
    price = prompt("Введите цену игры");
    if(price == null || /[a-zа-яё]/i.test(price)){
        price = 0;
    }
    img = prompt("Вставьте ссылку на изображение игры");
    if(img == null){
        img = "https://images.drive.com.au/driveau/image/upload/c_fill,h_1080,w_1920/q_auto:eco/f_auto/v1/cms/uploads/jjslyagf8e3gcny2doyy";
    }
    Axios.post("/addgame", {
        Name: name,
        Desc: desc,
        Price: price,
        Img: img
    })
}