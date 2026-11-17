function calcularDescontoPagamento(formaPagamento){
    switch(formaPagamento){
        case "pix":
            return 0.15
        
        case "boleto":
            return 0.10
        
        case "cartao_avista":
            return 0.05

        case "cartao_parcelado":
            return 0.0
    } 
}

function calcularValorEntrega(tipoEntrega){
    switch(tipoEntrega){
        case "retirada":
            return 0.0
        
        case "padrao":
            return 12.0

        case "expressa":
            return 25.0
        
        case "super_expressa":
            return 45.0
    }
}

function formatarMoeda(valor){
    return valor.toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL"
    })
}

const form_orcamento = document.getElementById("form-orcamento")
const painel_resultado = document.getElementById("painel-resultado");
const resultado_valor_inicial = document.getElementById("resultado-valor-inicial")
const resultado_valor_final = document.getElementById("resultado-valor-final")
const resultado_desconto = document.getElementById("resultado-desconto")

form_orcamento.addEventListener("submit", function(event) {
    event.preventDefault()

    const valor_produto = parseFloat(document.getElementById("valor-produto").value)
    const tipo_entrega = document.getElementById("tipo-entrega").value
    const forma_pagamento = document.getElementById("forma-pagamento").value

    const taxaDesconto = calcularDescontoPagamento(forma_pagamento)
    const valorDesconto = valor_produto * taxaDesconto
    const valorFrete = calcularValorEntrega(tipo_entrega)
    const totalFinal = (valor_produto - valorDesconto) + valorFrete

    resultado_desconto.textContent = formatarMoeda(valorDesconto)
    resultado_valor_inicial.textContent = formatarMoeda(valor_produto)
    resultado_valor_final.textContent = formatarMoeda(totalFinal)

    painel_resultado.classList.remove("hidden");
})