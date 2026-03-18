async function pokeDados(){
    const exibeDados = document.querySelector("#pokeDados");
    const poke = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=5');
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

        const nome = dados.abilities[1].ability.name;

        document.querySelector("#nome").innerHTML =
        `
            <p>${nome}</p>
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

    // async function descricaoPokemon(url) {
    //     const poke = await fetch(url);
    //     const dados = await poke.json();

    //     const nome = dados.forms[0].name;

    //     document.querySelector("#nome").innerHTML =
    //     `
    //         <p>${nome}</p>
    //     `;
    // };

    // descricaoPokemon(url);
    nomePokemon(url);
    imagemPokemon(url);
}

pokeDados();
