document.querySelector("#salvar").addEventListener("click", cadastrar)

let lista_filmes = [] 

window.addEventListener("load", () => {
    lista_filmes = JSON.parse(localStorage.getItem("lista_filmes"))
    lista_filmes.forEach((filme) => {
        document.querySelector("#filmes").innerHTML += gerarCard(filme)
    })

})

function cadastrar(){
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))
    let Nome_do_Filme = document.querySelector("#Nome do Filme").value
    let Elenco = document.querySelector("#Elenco").value
    let nota = document.querySelector("#nota").value
    let Avaliação = document.querySelector("#Avaliação").value

    const tarefa = {
        Nome_do_Filme,
        Elenco,
        nota,
        Avaliação,
    }

    if (filme.Nome_do_Filme.length == 0) {
        document.querySelector("#Nome do Filme").classList.add("is-invalid")
        return 
    }

    lista_tarefas.push(tarefa)

   document.querySelector("#Filmes").innerHTML += gerarCard(tarefa)

   document.querySelector("#Nome do Filme").value = ""
   document.querySelector("#Elenco").value = ""

   localStorage.setItem("lista_filmes", JSON.stringify(lista_filmes))

   modal.hide()

}
function apagar(botao){
    botao.parentNode.parentNode.remove()
}

function gerarCard(filme){
    return `  

    
        <div class="col-lg-3 col-md-6 col-12">
            <div class="card">
                <div class="card-header">
                    ${filme.Nome_do_Filme}
                </div>
                <div class="card-body">
                    <p class="card-text">${filme.Elenco}.</p>
                    <p>
                        <span class="badge text-bg-warning">
                        ${filme.Avaliação}
                        </span>
                    </p>
                    <p>${filme.nota}pts</p>
                    <a href="#" class="btn btn-success">
                        <i class="bi bi-check-lg"></i>
                    </a>
                    <a href="#" onClick='apagar(this)' class="btn btn-danger">
                        <i class="bi bi-trash"></i>
                    </a>
                </div>
            </div> <!-- card -->
        </div> <!-- col -->
`
}