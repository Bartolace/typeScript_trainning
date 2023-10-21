import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
//strictNullChecks serve para deixarmos claro onde pode também ser null
// ( silenciarmos ) - dizemos o tipo específico que queremos com 'as' ou <>
// ou declaramos os possíveis tipos 'HTMLElement | null'
// também podemos testar o falor com 'if'

const botaoImporta = document.querySelector("#botao-importa");
if(botaoImporta){
    botaoImporta.addEventListener("click", () => {
        controller.importaDados()
    })
} else {
    throw Error('Botão importa não foi encontrado');
   
}