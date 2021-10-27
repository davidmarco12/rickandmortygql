const handlerSeasons = (episodes) =>{
    //S01E01
    const newEp = [];
    console.log("Hola",episodes)
    //const newEp = episodes.episodes.slice(1,2);
    episodes.forEach(e => {
        newEp.push(e.episode.slice(1,3))
    });

    console.log(newEp)
    const data = new Set(newEp);
    let result = [...data];

    console.log(result)

    const seasonCount = result.length;

}

module.exports = {
    handlerSeasons
}