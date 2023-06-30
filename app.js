

document.getElementById('form').addEventListener('submit', function (e) {

    e.preventDefault()

    const valor = document.getElementById('valor').value;
    // const valorFormat = Number(valor).toLocaleString("pt-BR", 
    // { style: "currency" , currency:"BRL"});

    const campos = [
        valor,
        document.getElementById('descricao').value
    ]
    const box = document.createElement('div')

    box.innerHTML = `
        <div class="row text-color mt-2 mb-2">
                    <div class="col-4 d-flex justify-content-start">
                        <i class="fa-solid fa-dollar-sign mt-1 me-2"></i>
                        <p class="">
                            <a href="">${campos[1]}</a>
                        </p>
                    </div>
                    <div class="col-4 text-center">R$${campos[0]}</div>
                    <div class="col d-flex justify-content-evenly">
                        <a href="#">
                            <i class="fa-solid fa-circle-info icon-size-md"></i>
                        </a>
                        <a href="#">
                            <i class="fa-solid fa-pencil icon-size-md"></i>
                        </a>
                        <button id="remove" type="button" onClick="removeRegistro(this)">
                            <i class="fa-solid fa-trash icon-size-md"></i>
                        </button>
                    </div>
                </div> 
        `

    const div = document.getElementById('registros');

    div.appendChild(box);

    this.reset();
})

function removeRegistro(e) {
    registro = e.parentNode.parentNode;
    console.log(registro);

    registro.parentNode.removeChild(registro);
}