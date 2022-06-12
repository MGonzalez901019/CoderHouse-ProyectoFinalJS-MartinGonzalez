

const dropList = document.querySelectorAll("form select")
const dropListFrom = document.querySelector(".drop-list-from select")
const dropListTo = document.querySelector(".drop-list-to .currency-to select");


getButton = document.getElementById("get-rate-button");

document.title = "Conversor de monedas";

for (let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list){

        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "ARS" ? "selected" : "";
        
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }

}

//#region H1 DOM
const header1 = document.getElementById("header");
header1.style.fontSize = "x-large";
header1.style.color = "red";
header1.style.backgroundColor = "rgb(32,43,34)";
header1.innerText = "Conversor de Divisas";
header1.style.fontWeight = "bold";
//#endregion

let convertedAmount = document.getElementById("outputValue");

outputValue.style.backgroundColor = "white";
outputValue.style.padding = "10px";





//listener del click



     getButton.addEventListener("click", m=>{

        m.preventDefault();
       outputValue = getExchangeRate();
        
     } );
    



//#region FUNCION CONVERSOR DE MONEDA
function getExchangeRate(){
    const fromAmount = document.querySelector("form input");
    
    
    let url = `https://v6.exchangerate-api.com/v6/${key}/latest/${dropListFrom.value}`;
    
    fetch(url).then(response => response.json()).then(result =>{
        

     let convertedAmount = fromAmount.value * result.conversion_rates[dropListTo.value];
       console.log(convertedAmount);
        //console.log(optionTag);
       // console.log(dropListTo.value);
    //console.log(amount.value);
    }).catch(() =>{ 
        console.log("error");
    });
    
    return convertedAmount;
}
//#endregion


const btnAlert = document.querySelector("#get-rate-button")

btnAlert.addEventListener("click",() => {

    Swal.fire('Dinero Convertido');

})
