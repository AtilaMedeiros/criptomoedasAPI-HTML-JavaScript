

buscandoDados()
    .then(exibaDados => {
        var texto = "";
        for(let i = 0; i < 10; i++){

                    texto = texto + `
                    
                    <div class="media">
                        <img src="../img/coin.jpg" class="align-self-center mr-3" alt="coin" width="130" height="90">
                        <div class="media-body">
                        <h5 class="mt-2">${exibaDados.data[i].name}</h5>
                        <p>${exibaDados.data[i].symbol}</p>
                        <p>${exibaDados.data[i].first_historical_data}</p>
                        </div>
                    </div>
                
                    `;

                    document.getElementById("coins").innerHTML = texto;
                    
                }


}).catch(err => {
    console.log('Erro tratado pelo catch: ', err);
})
