import React from "react";
import Navbar from "./Navbar";

export default function Header() {
    // React.useState(async ()=>{
    //     console.log("im here");
    //     await fetch('/addgame')
    // }, [])

    const [game, setGame] = React.useState([]);

    React.useEffect(() => {
        getGame();
    }, [])

    const getGame = async () => {
        await fetch('/getgames')
            .then(cursor => cursor.json())
            .then(cursor => setGame(cursor.cursor));
    }
    if (!game) {
        return <div>
            <div>Загрузка...</div>
        </div>
    }
    else if (game == null || game?.length <= 0) {
        return <div>
            <div>Игры кончились</div>
            <div onClick={getGame} className="button">Обновить</div>
        </div>
    }

    return (
        <header>
            <div>
                <span className="logo">Dope Games ☼</span>
                <Navbar />
            </div>
            <div className="presentation">
                <div className='flex_content'>
                    {game?.map((cursor, i) => {
                        if(cursor.Price == "0" || cursor.Price == "FREE"){
                            return <div key={i} className="card">
                            <img src={cursor.Img} className="card-img"></img>
                            <h2>{cursor.Name}</h2>
                            <h5>{cursor.Desc}</h5>
                            <h3 className="buy-btn">FREE</h3>
                        </div>
                        }
                        else {
                            return( <div key={i} className="card">
                                <img src={cursor.Img} className="card-img"></img>
                                <h2>{cursor.Name}</h2>
                                <h5>{cursor.Desc}</h5>
                                <h3 className="buy-btn">{cursor.Price}$</h3>
                            </div>
                    )}
                    }
                    )}
                </div>
            </div>
        </header>
    )
}

