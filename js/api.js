
var apiKey = {
    key : 'd26af3e2-9656-430b-894e-e2bd24cafba7'
}



fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar o servidor ' + response.status );
        return response.json();
    }).then((api)=>{
        
      
        for(let i=0;i<10;i++){
            
            var tb = document.getElementById('tcoins'); // Obtenho a tabela
            var qtdLinhas = tb.rows.length; // Verifico a quantidade de linhas
            var linha= tb.insertRow(qtdLinhas); // Inserindo linhas
            
            // Para inserir as Colunas
       
            var cellNome = linha.insertCell(0);
            var cellSimbol = linha.insertCell(1);
            var cellFirstData = linha.insertCell(2);
            var cellLastData = linha.insertCell(3);
            var lastData = new Date(api.data[i].last_historical_data);
            var firstData = new Date(api.data[i].first_historical_data);

            var fd =firstData.getDate()+"/"+firstData.getMonth()+"/"+firstData.getFullYear();
            var ld = lastData.getDate()+ "/" + lastData.getMonth() +"/"+lastData.getFullYear();
            // Inserir os dados na tabela
            cellNome.innerHTML = `${api.data[i].name}`;
            cellSimbol.innerHTML = `${api.data[i].symbol}`;
            cellFirstData.innerHTML = fd;
            cellLastData.innerHTML = ld;
            
        
        }

    })
    .catch((error)=>{
        console.log(error)
    });

    /*
    <div class="media">
                    <img src="/img/coin.jpg" class="align-self-center mr-3" width="100" heigth="60" >
                    <div class="media-body">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <p>${api.data[i].symbol}</p>
                    </div>
                </div> 
                <br>
       
    */
     
