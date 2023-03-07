import React from "react";

export default function Reg() {
    return <form>
    <div class="group">      
       <input type="text" required></input>
       <span class="bar"></span>
       <label>Логин</label>
    </div>
    <div class="group">      
       <input type="text" required></input>
       <span class="bar"></span>
       <label>Пароль</label>
    </div>
 </form>
}
