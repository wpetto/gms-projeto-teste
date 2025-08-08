US-001Funcionalidade: Busca de filmes

Eu, como usuário de um website de cinema,
Quero busca filme usando a palavra chave
Para encontrar e explorar filmes que correspondam ao meu interesse.
@alta
Cenário: Busca de filmes com palavra-chave válida
    Dado que o usuário está na página de busca de filmes
    Quando o usuário digita uma palavra-chave válida 
    E clica em "Buscar"
    Então o sistema deve exibir os filmes que correspondem à palavra-chave
@baixa
Cenário: Busca de filmes sem palavra-chave 
    Dado que o usuário está na página de busca de filmes
    Quando o usuário não digita uma palavra-chave  
    E clica em "Buscar"
    Então o sistema emite um alert informando a obrigatoriedade de inserir um filme para a busca
@baixa
Cenário: Busca de filmes com palavra-chave válida com espaço
    Dado que o usuário está na página de busca de filmes
    Quando o usuário digita uma palavra-chave válida, deixando espaço antes, entre ou depois da palavra-chave
    Então o sistema deve informar que há filmes correspondentes

@alta
  Cenário: Busca de filmes sem resultados
    Dado que o usuário está na página de busca de filmes
    Quando o usuário digita uma palavra-chave que não corresponde a nenhum filme da plataforma
    Então o sistema deve informar que não há filmes correspondentes
@alta
  Cenário: Limpa a busca de filmes
    Dado que o usuário realizou uma busca
    Quando o usuário clica no botão "Limpar Busca"
    E clica em "Buscar"
    Então a lista de filmes buscadas é resetada para o estado inicial
    E o os dados do campo "Digite um filme:" é deletado