function generatePixQRCode() {
    // Exemplo de requisição para API que gera o QR Code (substitua pela real)
    const data = {
        value: 15.00, // Valor da compra
        key: 'sua-chave-pix', // Sua chave Pix
        description: 'THE SIMS 4 TODAS EXPANSÕES ORIGINAL 2024 PC - ENVIO DIGITAL'
    };

    fetch('https://api.pagamento.com.br/generate-pix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Exibir o QR Code gerado
        const qrCodeContainer = document.getElementById('pix-qrcode');
        document.getElementById('pix-img').src = data.qrCodeUrl;
        qrCodeContainer.style.display = 'block';
    })
    .catch(error => {
        console.error('Erro ao gerar o QR Code:', error);
    });
}
