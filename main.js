document.addEventListener('DOMContentLoaded', function () {
    try {
        const prog = prompt('Informe seu nome de usuário no GitHub:');
        const fotoPerfil = document.getElementById('Fotoperfil');
        const nomePerfil = document.getElementById('nomePerfil');
        const userNamePerfil = document.getElementById('userNamePerfil');
        const repositorio = document.getElementById('repositorio');
        const seguidores = document.getElementById('seguidores');
        const repositorseguindoiosPerfil = document.getElementById('seguindo');
        const url_link = document.getElementById('link-url');
        const seguindo = document.getElementById('seguindo');

        fetch(`https://api.github.com/users/${prog}`)
            .then(function (resposta) {
                if (!resposta.ok) {
                    throw new Error(`Erro na solicitação: ${resposta.statusText}`);
                }
                return resposta.json();
            })
            .then(function (json) {
                nomePerfil.innerText = json.name;
                seguidores.innerText = json.followers;
                repositorio.innerText = json.public_repos;
                seguindo.innerText = json.following;
                userNamePerfil.innerText = json.login;
                fotoPerfil.src = json.avatar_url;
                url_link.href = json.html_url; // Corrigi o atributo para href
            })
            .catch(function (erro) {
                console.error('Erro ao obter dados do GitHub:', erro);
                alert('Erro ao obter dados do GitHub. Verifique seu nome de usuário e tente novamente.');
            });
    } catch (erro) {
        console.error('Erro geral:', erro);
        alert('Ocorreu um erro. Verifique o console para mais detalhes.');
    }
});
