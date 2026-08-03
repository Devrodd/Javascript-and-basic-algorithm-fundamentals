const dados = [
  /*

  Problema "terceirizados"
Sua tarefa é fazer um programa que mostre na tela o valor total gasto com funcionários terceirizados.
Para isto, você deverá partir do projeto “terceirizados” que já está começado, e implementar as duas
funções funcionariosTerceirizados e custoTotal conforme especificação. 

*/
  
    {
    nome: "Maria Silva",
    valorHora: 80.0,
    horasTrabalhadas: 20,
    terceirizado: true,
  },
  {
    nome: "João Rocha",
    valorHora: 60.0,
    horasTrabalhadas: 25,
    terceirizado: false,
  },
  {
    nome: "Tiago James",
    valorHora: 80.0,
    horasTrabalhadas: 10,
    terceirizado: true,
  },
  {
    nome: "Ana Carla",
    valorHora: 70.0,
    horasTrabalhadas: 40,
    terceirizado: true,
  },
  {
    nome: "Pedro Paulo",
    valorHora: 50.0,
    horasTrabalhadas: 25,
    terceirizado: false,
  },
];


// custo total dos funcionarios terceirizados

function funcionariosTerceirizados(list) {
    return list.filter(funcionario => funcionario.terceirizado === true);
    
}

function custoTotal(list) {
    return list.reduce((total, funcionario) => {
        return total + (funcionario.valorHora * funcionario.horasTrabalhadas);
    }, 0);
}



const terceirizados = funcionariosTerceirizados(dados);
const custoTerceirizados = custoTotal(terceirizados);

console.log("Custo total dos funcionários terceirizados: R$ " + custoTerceirizados.toFixed(2));

