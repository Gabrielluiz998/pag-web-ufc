const container = document.getElementById('container');


var evento1 = new Eventos("Acampamento UFC", "10/01/2025");
var evento2 = new Eventos("3 combate UFC", "27/10/2025");

var listaDeEventos = [evento1];

listaDeEventos.forEach(element => {
    container.innerHTML += `
        <div class="cards">
            <div class="topo">
                <p class="nome">${element.name}</p>
                <p class="data">${element.data}</p>
            </div>

            <div class="footer"></div>
            <button class="botao"> 
                <img src="../IMAGENS/ingressos (1).png" alt="" srcset="" height="50px">
                Fazer inscrição
            </button>
        </div>
    `    
});


//console.log("Evento: " + evento1.name + "\n" + "Data: " + evento1.data);

