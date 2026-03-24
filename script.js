async function pokeDados() {
    try {
        const exibeDados = document.querySelector("#pokeDados");
        const poke = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20');
        const dados = await poke.json();
        const filtrados = dados.results.filter(pokemon => pokemon.name.length > 5);
        const conteudo = filtrados.reduce((acc, pokemon) => {
            return acc + `
                <button onclick=retornaPokemon('${pokemon.url}')>${pokemon.name}</button>
            `;
        }, "");

        exibeDados.innerHTML = conteudo;

    } catch (erro) {
        console.error("Erro ao buscar pokémons:", erro);
    }
};

async function retornaPokemon(url) {
    try {
        const poke = await fetch(url);
        const dados = await poke.json();

        async function imagemPokemon() {
            const imagem = dados.sprites.front_default;

            document.querySelector("#imagem").innerHTML = `
                <img src="${imagem}" alt="pokemon"> 
            `;
        };

        async function nomePokemon() {
            const nome = dados.forms[0].name;

            document.querySelector("#nome").innerHTML = `
                <p>${nome}</p>
            `;
        };

        async function poderUmPokemon() {
            const poderUm = dados.abilities[0]?.ability.name;

            document.querySelector("#poderUm").innerHTML = `
                <p>${poderUm}</p>
            `;
        };

        async function poderDoisPokemon() {
            const poderDois = dados.abilities[1]?.ability.name;

            document.querySelector("#poderDois").innerHTML = `
                <p>${poderDois}</p>
            `;
        };

        async function moveUmPokemon() {
            const moveUm = dados.moves[0]?.move.name;

            document.querySelector("#moveUm").innerHTML = `
                <p>${moveUm}</p>
            `;
        };

        async function moveDoisPokemon() {
            const moveDois = dados.moves[1]?.move.name;

            document.querySelector("#moveDois").innerHTML = `
                <p>${moveDois}</p>
            `;
        };

        async function moveTresPokemon() {
            const moveTres = dados.moves[2]?.move.name;

            document.querySelector("#moveTres").innerHTML = `
                <p>${moveTres}</p>
            `;
        };

        imagemPokemon();
        nomePokemon();
        poderUmPokemon();
        poderDoisPokemon();
        moveUmPokemon();
        moveDoisPokemon();
        moveTresPokemon();

    } catch (erro) {
        console.error("Erro ao buscar dados do Pokémon:", erro);
    }
}

pokeDados();