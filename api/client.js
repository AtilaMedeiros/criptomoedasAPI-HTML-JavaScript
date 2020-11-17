
const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=';
const apikey = 'e1e845dc-3ff5-41ba-830a-d97ed9c32ee1';



buscandoDados = () => {
    return fetch (url + apikey)
        .then( resposta => {
            if(!resposta.ok) throw new Error('Erro ao executar a requisição, status ' + resposta.status);
            return resposta.json()
        }) 
        .then (json => {
           return  json
        })
        .catch((error) => {
            console.error('Erro tratado pelo catch: ' + error.message);
        });

        
}

