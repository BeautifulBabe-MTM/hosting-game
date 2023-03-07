import React from "react";

function GameFetch(props) {
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
        }image.png
    if (game == null || game?.length <= 0) {
        return <div>
            <div>Извините, но увы, игр на данный момент нет</div>
            <div onClick={getGame} className={'button'}>Обновить</div>
        </div>
    }

    return <div className='flex_content'>
        <div style={{backgroundColor:"red"}}>
            {game?.map((cursor) => {
                return <div>
                    <h2>{cursor.Title}</h2>
                </div>
            })}
        </div>
    </div>
};

export default GameFetch;