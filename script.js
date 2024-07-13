let input = document.getElementById('input-tarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0;

function deleteTarefa(id){
    var tarefa = document.getElementById(id);
    tarefa.remove()
}
function limparInput(){
    input.value='';
    input.focus();
}

function finalizarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if (classe == 'tarefa'){
        item.classList.add('tarefa-clicada');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-checkbox-blank-outline');
        icone.classList.add('mdi-checkbox-marked');
    }  else {
        item.classList.remove('tarefa-clicada');
        item.classList.add('tarefa');
        
        icone.classList.remove('mdi-checkbox-marked');
        icone.classList.add('mdi-checkbox-blank-outline');
        
    }
}


function addTarefa(){
    let valorInput = input.value;
    if ((valorInput !== "") && (valorInput!==null) && (valorInput!==undefined)){
        contador++;
        let novaTarefa = `<div id=${contador} class="tarefa">
            <div class="tarefa-excluir" onclick="deleteTarefa(${contador})">
                <i class="mdi mdi-delete-outline"></i>
            </div>
            <div class="tarefa-texto">
                ${valorInput}
            </div>

            <div class="tarefa-finalizar" onclick="finalizarTarefa(${contador})">
                <i id="icone_${contador}" class="mdi mdi-checkbox-blank-outline"></i>
            </div>
        </div>`;
   document.getElementById('areaLista').innerHTML += novaTarefa; 
   limparInput();   
    } else {
        alert('error');
    }
}