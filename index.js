/*1
//Considere o seguinte array:
const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
    1290.00, 15000.00]

    //a. Imprima no console o índice do primeiro salário maior que
    //7.500 utilizando o findIndex
    const maiorSalario = (salarios.findIndex(indice => indice > 7500))
    console.log(maiorSalario)

    //b. Crie uma nova lista filtrada com os salários que são maior que
    //8.000 utilizando o filter
    const salariosFiltrados = (salarios.filter(valor => valor > 8000))
    console.log(salariosFiltrados);

    */

 /*2. James estava criando uma array com as cores do arco-íris, e ele
//esqueceu algumas cores. As cores padrão de um arco-íris são
//normalmente listadas nesta ordem:   

//const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
//"Roxo"];

//mas James tinha isto:
const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

rainbow.splice(2, 1)
console.log('rainbow sem o preto')

rainbow.splice(2, 0, "Amarelo", "Verde")
rainbow.splice(5, 0, "roxo")
console.log(rainbow)*/

/**3. Crie um cadastro de pessoas onde o usuário informe o nome, idade
e se está trabalhando ou não, se a pessoa estiver trabalhando
pergunte para ele o salário que está ganhando. Para cada pessoa

cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.


const pessoas = []
const contador = 3

for(let i = 0; i < contador; i++){
    let pessoa = {
        nome: prompt('digite seu nome'),
        idade: Number(prompt('digite sua idade')),
        trabalhando: prompt('Você está trabalhando? (sim ou não)')
    }
    if(pessoa.trabalhando === 'sim')
        pessoa.salario = Number(prompt('digite seu salario'))

    pessoas.push(pessoa);
}

const desempregado = pessoas.filter(pessoa => (pessoa.trabalhando === 'nao'))
const nomesDesempregados = desempregado.map(pessoa => pessoa.nome);
const idadeDesempregados = desempregado.map(pessoa => pessoa.idade);

console.log('quem esta desempregado')
console.log(`nome : ${nomesDesempregados}`)
console.log(`idade : ${idadeDesempregados}`)
console.log('-------------------------------------------');

console.log("Pessoas com salário abaixo de 2500:");
for (const pessoa1 of pessoas) {
    if (pessoa1.trabalhando && pessoa1.salario < 2500) {
        console.log(`nome : ${pessoa1.nome}`)
        console.log(`idade : ${pessoa1.idade}`)
        console.log(`salario : ${pessoa1.salario}`)
    }
}
console.log('-------------------------------------------');

console.log("Pessoas com salário acima de 2500:");
for (const pessoa2 of pessoas) {
    if (pessoa2.trabalhando && pessoa2.salario > 2500) {
        console.log(`nome : ${pessoa2.nome}`)
        console.log(`idade : ${pessoa2.idade}`)
        console.log(`salario : ${pessoa2.salario}`)
    }
}
console.log('-------------------------------------------');

*/


