const container = document.getElementById('container');


var evento1 = new Eventos("../IMAGENS/acampamento1.jpg","Acampamento UFC", "10/01/2025");
var evento2 = new Eventos("3 combate UFC", "27/10/2025");

var listaDeEventos = [evento1];

listaDeEventos.forEach(element => {
    container.innerHTML += `
        <div class="cards">
            <div class="imagem">
                 <img src="${element.img}" alt="" srcset="" height="268px">
            </div>
            
            <div class="meio">
                <div class="titulo">
                    <p class="nome">${element.name}</p>
                </div>

                <div class="informacoes"> 
                    <img src="../IMAGENS/calendar.png" alt="" srcset="" height="25px">
                    <p class="data">${element.data}</p>
                </div>
            </div>


            <div class="footer">
                <button class="botao"> 
                    <img src="../IMAGENS/tickets(2).png" alt="" srcset="" height="20px">
                    Fazer inscrição
                </button>
            </div>
        </div>
    `    
});


//console.log("Evento: " + evento1.name + "\n" + "Data: " + evento1.data);

