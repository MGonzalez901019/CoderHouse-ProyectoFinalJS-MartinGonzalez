


const dropListFrom = document.querySelector(".drop-list-from select");
const dropListTo = document.querySelector(".drop-list-to .currency-to select");
getButton = document.getElementById("get-rate-button");




//#region H1 DOM
const header1 = document.getElementById("header");
header1.style.fontSize = "x-large";
header1.style.color = "red";
header1.style.backgroundColor = "rgb(32,43,34)";
header1.innerText = "Conversor de Divisas";
header1.style.fontWeight = "bold";
//#endregion

let nombre = "";

//listener del click



     getButton.addEventListener("click", m=>{

        m.preventDefault();
        getExchangeRate();
        
     } );
    



//#region FUNCION CONVERSOR DE MONEDA
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
    
        const divisa = ['ARS','USD','EUR'];
    
        //TO DO: Consumir una API para romar los valores actualizados de las divisas y modular la funcion de getExchangeRate()

        switch (currencyFrom) {
            case divisa[0]:
                switch (currencyTo) {
                    case 'USD':
                        convertedAmountValue = amountValue / 225;               //estos de momento son valores fijos desactualizados, la idea es que se actualicen cuando pueda consumir una api
                        
                        break;
                    case 'EUR':
                        convertedAmountValue = amountValue / 245;
                        
                        break;
                    case 'ARS':
                        
                        break;
                }
                
                break;
        
                case divisa[1]:
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
    
                case divisa[2]:
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
            


        document.getElementById('outputValue').innerHTML = convertedAmountValue.toFixed(2);
    

  



   

}
//#endregion



