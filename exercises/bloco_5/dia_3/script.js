function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  // Exercício 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function createDaysOfMonth() {
    const monthDays = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        const dates = dezDaysList[i];
        const dateListItem = document.createElement('li');
        dateListItem.innerHTML = dates;
        dateListItem.className = 'day';
        if (dates === 24 || dates === 25 || dates === 31) {
            dateListItem.className += ' holiday';
        }
        if (dates === 4 || dates === 11 || dates === 18 || dates === 25) {
            dateListItem.className += ' friday'
        }

        monthDays.appendChild(dateListItem);
    };
  };

  createDaysOfMonth();


  // Exercício 2
  function botaoFeriados(string) {
      const botao = document.createElement('button');
      botao.id = 'btn-holiday';
      botao.innerHTML = string;
      const div = document.querySelector('.buttons-container')
      div.appendChild(botao);
  }

  botaoFeriados("Feriados");

  //Exercício 3
  let question = undefined;
  function destacaFeriados() {
    let feriado = document.querySelectorAll(".holiday");
    if (question === true){
      for (let i = 0; i < feriado.length; i += 1){
      feriado[i].style.backgroundColor = "rgb(238,238,238)";
      }
     question = false;
    } else {
    for (let i = 0; i < feriado.length; i += 1){
        feriado[i].style.backgroundColor = "pink";
        }
     question = true;
    }
    
  };


  let botao = document.querySelector("#btn-holiday");
  botao.addEventListener("click", destacaFeriados);
  

  function botaoSextou(string) {
    const botao = document.createElement('button');
    botao.id = 'btn-friday';
    botao.innerHTML = string;
    const div = document.querySelector('.buttons-container')
    div.appendChild(botao);
}

botaoSextou('Sexta-feira');

let fryday = undefined;
function sextando() {
    let sexta = document.querySelectorAll('.friday')
    let datas = [4, 11, 18, 25]
    if (fryday === true) {
        for (let i = 0; i < sexta.length; i += 1) {
            let now = datas[i]
            sexta[i].innerHTML = now;
        }
    fryday = false;
    } else {
        
    for (let i = 0; i < sexta.length; i += 1) {
        sexta[i].innerHTML = 'SEXTOU';
    }
    fryday = true;
    }

}

let botaoSexta = document.querySelector('#btn-friday');
botaoSexta.addEventListener('click', sextando);

let check = undefined;
function darZoom(e) {
    if (check === false) {
    e.target.style.fontSize = '20px';
    check = true;
    } else {
    e.target.style.fontSize = '30px';
    check = false;
    }
}

function zoom(e) {
    e.target.style.fontSize = '30px';
}

const monthDays = document.querySelector('#days');
monthDays.addEventListener('mouseover', darZoom);
monthDays.addEventListener('mouseout', darZoom);