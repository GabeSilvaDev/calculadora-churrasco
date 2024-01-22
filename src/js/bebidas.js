function calcularBebida({
    quantidadeConvidados,
    quantidadePessoasBebemCerveja,
    valorRefri,
    valorCerveja
}) {
    let quantidadeBebida = quantidade(quantidadeConvidados, quantidadePessoasBebemCerveja);
    let valorBebida = valor(quantidadeBebida, valorRefri, valorCerveja);
    return total(valorBebida);
}

function quantidade(quantidadeConvidados, quantidadePessoasBebemCerveja) {
    let refri, cerveja;

    // Cada pessoa consome em média 1 litro de refrigerante
    // Adicionamos um percentual de erro de 10% para cima
    refri = (quantidadeConvidados - quantidadePessoasBebemCerveja) * 1 * 1.1;

    // Cada pessoa consome em média 2,5 latas de cerveja
    // Adicionamos um percentual de erro de 10% para cima
    cerveja = quantidadePessoasBebemCerveja * 2.5 * 1.1;

    return { refri, cerveja }
}

function valor(quantidades, valorRefri, valorCerveja) {
    let refri, cerveja;

    refri = quantidades.refri * valorRefri;

    cerveja = quantidades.cerveja * valorCerveja;

    return { refri, cerveja }
}

function total(valores) {
    let valor = valores.refri + valores.cerveja;

    return { valor }
}

export { calcularBebida }