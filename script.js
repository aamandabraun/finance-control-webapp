function calcularInvestimento() {
    const valorMensal = document.getElementById('valor-mensal').value;
    const meses = document.getElementById('tempo-meses').value;
    
    const areaResultado = document.getElementById('resultado-simulacao');
    const resMeses = document.getElementById('res-meses');
    const resValor = document.getElementById('res-valor');

    if (valorMensal > 0 && meses > 0) {
        const total = valorMensal * meses;

        resMeses.innerText = meses;
        resValor.innerText = total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

        areaResultado.style.display = 'block';
    } else {
        alert("Por favor, preencha valores válidos maiores que zero.");
    }
}