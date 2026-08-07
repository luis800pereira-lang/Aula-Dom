function hl(seletor, classe, duracao = 2500, atraso = 0) {
    const lista = typeof seletor === 'string'
        ? Array.from(document.querySelectorAll(seletor))
        : [seletor];
    lista.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => {
            el.classList.add(classe);
            setTimeout(() => el.classList.remove(classe), duracao);
        }, atraso + i * 200);
    });
}



function selecionarPorId() {
    const elemento = document.getElementById("titulo-filmes");

    console.log(elemento);
    console.log(elemento.tagName);
    console.log(elemento.textContent);
    console.log(elemento.id);

      hl('#titulo-filme', 'elemento-selecionado');
    hl('#filme-principal', 'elemento-selecionado');
}

function selecionarPorClasse() {
    const elementos = document.getElementsByClassName("genero-acao");

    console.log("Quantidade:", elementos.length);

    for (let i = 0; i < elementos.length; i++) {

        console.log(i, elementos[i].textContent.trim())
        
    }
     hl('.genero-acao',  'highlight-acao',  2500);
 hl('.genero-drama', 'highlight-acao', 2500);
}