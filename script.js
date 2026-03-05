const container = document.getElementById("games")
const search = document.getElementById("search")

function showGames(list){

container.innerHTML=""

list.forEach(game=>{

container.innerHTML += `
<div class="game">
<img src="${game.image}">
<h3>${game.title}</h3>
<a href="game.html?url=${game.url}">
<button>Play</button>
</a>
</div>
`

})

}

showGames(games)

search.addEventListener("input",()=>{

let value = search.value.toLowerCase()

let filtered = games.filter(g =>
g.title.toLowerCase().includes(value)
)

showGames(filtered)

})