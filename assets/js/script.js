let sobre = document.querySelector("#sobre");
async function getApiGithub(){
try{

    const dadosPerfil = await fetch("https://api.github.com/users/AdrielMartineli")
    const perfil = await dadosPerfil.json();
    let conteudo = ` 
    <div class="sobre_img">
    <img src="${perfil.avatar_url}" alt="Foto do Perfil - ${perfil.name}">
    </div>
    <div class="sobre_texto">
    <h1>Quem sou eu</h1>
    <div>
        <p class="sobre_paragrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Nostrum a sint commodi repellendus eligendi libero molestiae corrupti! 
             Iste ea nam necessitatibus architecto, illum voluptatem quisquam amet unde 
             dolor quaerat magni.</p>
    </div>
    <div class="sobre_botoes">
        <button class="sobre_botao">
            <a href="${perfil.html_url}" target="_blank">github</a>
        </button>
            <h2 class="seguidores"> ${perfil.followers} seguidores</h2>
            <h2 class="seguindo">${perfil.public_repos} Repositorios</h2>
        
    </div>
    </div>`;

    sobre.innerHTML += conteudo;
}catch(error){
console.log(error);
}
}

getApiGithub();
