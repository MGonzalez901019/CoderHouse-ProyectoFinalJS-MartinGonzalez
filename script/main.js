const dropListFrom = document.querySelector(".drop-list-from select");
const dropListTo = document.querySelector(".drop-list-to .currency-to select");
getButton = document.getElementById("get-rate-button");

getButton.addEventListener("click", e=>{

    e.preventDefault();
    getExchangeRate();
    
});

function getExchangeRate(){
    const amount = document.querySelector(".amount input");  //busco el valor que ingresa el usuario para convertir
    
    let amountValue = amount.value;
    let convertedAmountValue = amountValue;

    if(amountValue == "" || amountValue == "0"){
        amount.value = "1";
        amountValue = 1;

    }

    let currencyFrom = dropListFrom.value;
    let currencyTo = dropListTo.value;


    //TO DO: Consumir una API
    switch (currencyFrom) {
        case 'ARS':
            switch (currencyTo) {
                case 'USD':
                    convertedAmountValue = amountValue / 225;
                    
                    break;
                case 'EUR':
                    convertedAmountValue = amountValue / 245;
                    
                    break;
                case 'ARS':
                    
                    break;
            }
            
            break;
    
            case 'USD':
            switch (currencyTo) {
                case 'ARS':
                    convertedAmountValue = amountValue * 225;
                    
                    break;
                case 'EUR':
                    convertedAmountValue = amountValue * 0.9;
                    
                    break;
                case 'USD':
                    
                    break;
            }
            break;

            case 'EUR':
            switch (currencyTo) {
                case 'ARS':
                    convertedAmountValue = amountValue * 245;
                    
                    break;
                case 'USD':
                    convertedAmountValue = amountValue * 1.1;
                    
                    break;
                case 'EUR':
                    
                    break;
            }
            break;

        default:
            break;
    }

    //convertedAmountValue = Math.floor(convertedAmountValue);

    document.getElementById('outputValue').innerHTML = convertedAmountValue.toFixed(2);

}



// function myFunction()
// {
//     const addCurrencyBtn = document.querySelector (".btn btn-primary add-currencyBtn")
//     addCurrencyBtn.addEventListener
    
// const currencies = [
//     let
// ]
// if (selId.value=="USD")
// {
//     alert("dolar");
// }
// }