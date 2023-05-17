document.querySelector("#salvar").addEventListener("click", cadastrar)

let lista_filmes = [] 

window.addEventListener("load", () => {
    lista_filmes = JSON.parse(localStorage.getItem("lista_filmes"))
    if (lista_filmes !=null) {
    lista_filmes.forEach((Filme) => {
        document.querySelector("#Filme").innerHTML += gerarCard(Filme)
    })

   }
})


function cadastrar(){
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))
    let Nome = document.querySelector("#Nome").value
    let Elenco = document.querySelector("#Elenco").value
    let Nota = document.querySelector("#Nota").value
    let Avaliação = document.querySelector("#Avaliação").value

    const Filme = {
        Nome,
        Elenco,
        Nota,
        Avaliação,
    }

    if (Filme.Nome.length == 0) {
        document.querySelector("#Nome").classList.add("is-invalid")
        return 
    }

    if (lista_filmes==null) {
        lista_filmes = []
    }

    lista_filmes.push(Filme)

   document.querySelector("#tarefas").innerHTML += gerarCard(Filme)

   document.querySelector("#Nome").value = ""
   document.querySelector("#Elenco").value = ""

   localStorage.setItem("lista_filmes", JSON.stringify(lista_filmes))

   modal.hide()

}
function apagar(botao){
    botao.parentNode.parentNode.remove()
}

function gerarCard(Filme){
    return `  

    
        <div class="col-lg-3 col-md-6 col-12">
            <div class="card">
                <div class="card-header">
                    ${Filme.Nome}
                </div>
                <div class="card-body">
                    <p class="card-text">${Filme.Elenco}.</p>
                    <p>
                        <span class="badge text-bg-warning">
                        ${Filme.Avaliação}
                        </span>
                    </p>
                    <p>${Filme.nota}pts</p>
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