//Desafio
//Como todos sabem, existem diversos heróis que defendem a humanidade de capangas e forças do mal. Em Codham, uma das cidades mais sombrias que existem, vive Batmain, 
// o cavaleiro das trevas. Resumidamente, Batmain nada mais é que um ser humano gênio, multibilionário, filantropo que também é mestre em mais de cem artes marciais. 
// Apesar de ninguém conhecer sua real identidade, por ele utilizar uma armadura com disfarce de morcego, todas as pessoas do bem o amam. Obviamente, as pessoas más o temem. A
// pós diversas batalhas, todos os seus vilões haviam sido capturados pelo Batmain e a sensação de segurança parecia fazer parte dos cidadãos de Codham novamente. 
// Toda essa tranquilidade atípica deixou de existir a dois dias, quando o palhaço do crime – também conhecido como Coderinga ­– 
// escapou de Arkham e conseguiu tornar a cidade mais caótica do que nunca. Você trabalha para a polícia de Codham, em um reconhecido cargo de 
// batprogramador (profissão responsável por resolver problemas que envolvem o cavaleiro das trevas, realizando a codificação de algoritmos) e lhe foi solicitado 
// a seguinte tarefa: dizer, para cada vilão, se ele alguma vez já foi capturado pelo cavaleiro das trevas.

//Entrada
//A primeira linha da entrada é composta por um número inteiro T que indica a quantidade de casos de testes. Cada caso de teste é composto 
// por uma cadeia de caracteres de tamanho N (1 < N < 26). Todos os caracteres são letras maiúsculas ou minúsculas do alfabeto inglês.

//Saída
//Caso o vilão alguma vez já foi capturado pelo Batmain, imprima Y. Caso contrário, imprima N (ou não...). Nesse caso, por simplicidade, 
//assumiremos que qualquer cadeia de caracteres é um vilão válido e já capturado pelo Batmain, ok?

//Exemplo de Entrada	Exemplo de Saída
//1
//Pistoleiro

//Y

 
//Nanana nanannaaaaan Batman!

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.



// TODO: Com base na quantidade de vilões (T), imprima um 'Y' para cada um deles.
// Para isso, use uma estrutura de repetição e a função global "print" (que já pula linha).

let T = parseInt(gets());

for (let i = 0; i < T; i++) {
	console.log('Y')
}