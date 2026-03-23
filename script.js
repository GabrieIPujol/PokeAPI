async function pokeDados(){
    const exibeDados = document.querySelector("#pokeDados");
    const poke = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20');
    const dados = await poke.json()
    exibeDados.innerHTML += [`${dados.results[0].name} <br>`];

    let conteudo = "";
    dados.results.forEach(pokemon => {
        conteudo += 
        `
            <button onclick=retornaPokemon('${pokemon.url}')>${pokemon.name}</button>
        `;
    });

    exibeDados.innerHTML = conteudo;
};

async function retornaPokemon(url) {
    async function imagemPokemon(url) {
        const poke = await fetch(url);
        const dados = await poke.json();
    
        const imagem = dados.sprites.front_default;
    
        document.querySelector("#imagem").innerHTML =
        `
            <img src="${imagem}" alt="pokemon"> 
        `;
    };

    async function nomePokemon(url) {
        const poke = await fetch(url);
        const dados = await poke.json();

        const nome = dados.forms[0].name;

        document.querySelector("#nome").innerHTML =
        `
            <p>${nome}</p>
        `;
    };

    async function poderUmPokemon(url) {
        const poke = await fetch(url);
        const dados = await poke.json();

        const poderUm = dados.abilities[0].ability.name;

        document.querySelector("#poderUm").innerHTML =
        `
            <p>${poderUm}</p>
        `;
    };

    async function poderDoisPokemon(url) {
        const poke = await fetch(url);
        const dados = await poke.json();

        const poderDois = dados.abilities[1].ability.name;

        document.querySelector("#poderDois").innerHTML =
        `
            <p>${poderDois}</p>
        `;
    };

    async function moveUmPokemon(url) {
        const poke = await fetch(url);
        const dados = await poke.json();

        const moveUm = dados.moves[0].move.name;

        document.querySelector("#moveUm").innerHTML =
        `
            <p>${moveUm}</p>
        `;
    };

    async function moveDoisPokemon(url) {
        const poke = await fetch(url);
        const dados = await poke.json();

        const moveDois = dados.moves[1].move.name;

        document.querySelector("#moveDois").innerHTML =
        `
            <p>${moveDois}</p>
        `;
    };

    async function moveTresPokemon(url) {
        const poke = await fetch(url);
        const dados = await poke.json();

        const moveTres = dados.moves[2].move.name;

        document.querySelector("#moveTres").innerHTML =
        `
            <p>${moveTres}</p>
        `;
    };

    imagemPokemon(url);
    nomePokemon(url);
    poderUmPokemon(url);
    poderDoisPokemon(url);
    moveUmPokemon(url);
    moveDoisPokemon(url);
    moveTresPokemon(url);
}

pokeDados();
