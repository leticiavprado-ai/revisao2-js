//const idades =[12, 17, 18, 22, 15, 30]; 

//let filter = idades.filter((idade) => idade >20); 
//let map = idades.map((idadee) => idade * 20); 
//let filterEhMapJuntos = idades 
//.map((idade) => idade * 20);
//filter((idade)=> idade >20); 

//console.log(filterEhMapJuntos);  

//LISTA DE EXERCICIOS



const mesadas = [5, 10, 15];
const mesadasDobradas = mesadas.map(mesada => mesada * 2);
console.log(mesadasDobradas); 
 

const pontos = [3, 7, 10];
const pontosTurbinados = pontos.map(ponto => ponto + 5);
console.log(pontosTurbinado); 


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);
 

const precos = [15, 30, 8, 22, 12];
const baratos = precos.filter(preco => preco <= 20);
console.log(baratos); 


const colegas = ['Ana', 'Pedro', 'Maria', 'João', 'Lucas'];
colegas.forEach(nome => {
    console.log(`Presente, ${nome}!`);
}); 


const figurinhas = ['leao', 'tigre', 'urso'];
figurinhas.forEach(animal => {
    console.log(`Tenho a figurinha do ${animal}`);
});
  

