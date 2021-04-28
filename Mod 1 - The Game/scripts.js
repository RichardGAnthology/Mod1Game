function getSymbols(){
    let firstSymb = document.getElementById("firstSymbol").value
    let secondSymb = document.getElementById("secondSymbol").value
    return [firstSymb,secondSymb]
}

let firstStock = 0
let secondStock = 0
let firstStockArray = []
let secondStockArray = []
let fetchInterval;
let fetchLimit=0


function displayData(data){
    let i = 0
    document.getElementById("div1").innerHTML = ""
    for (const stock in data){
        i++
        let usersStockValue = data[stock].values[0].open
        if (i==1){
            firstStock=usersStockValue
            firstStockArray.push(usersStockValue)
        }
        else{
            secondStock=usersStockValue
            secondStockArray.push(usersStockValue)
        }
        console.log(stock)
        
        if (usersStockValue){
            console.log("printingNumbers")
            document.getElementById("div1").innerHTML += "<p>"+"$$$"+Math.floor(usersStockValue)+"</p>"
        }
        else{
            console.log("Sorry, data not here yet.")
        }
    }
    if(firstStock>secondStock){
        setTimeout(function() { alert("Congratulations, player 2 won!"); }, 300);
        
    }
    else{
        setTimeout(function() { alert("Congratulations, player 1 won!"); }, 300);
        
    }
}

function getData(symbolsTest){
    //let symbolsTest = event.target.value;
    console.log("fetchInitiated")
    console.time("fetchTime")
    let api = "https://api.twelvedata.com/time_series?"
    +"symbol="
    +symbolsTest
    +",&interval=1min&outputsize=1&apikey=a18145a301e54e0bab5c05d5c419c6f4" 
    console.log(api)
    fetch(api) 
    .then((response) => {  
        return response.json();
    }).then((data)=>{ 
        console.log(data)
        console.log("testingFetch")
        //console.timeEnd("fetchTime")
        displayData(data)
    })
    .catch((error) => console.log(error))
}

function onSubmit(){
    event.preventDefault()
    let symbolsTest = getSymbols().join()
    console.log(symbolsTest)
    // getData(symbolsTest)
    console.log("testingonSubmit")
    
    fetchInterval = setInterval(()=> {
        getData(symbolsTest) 
        fetchLimit++ 
        if(fetchLimit==2){
            clearInterval(fetchInterval)
        }
    },100)
}


setInterval(() => {
    document.getElementById("barOne").style.width = parseInt(firstStock)+"px"
    document.getElementById("barTwo").style.width = parseInt(secondStock)+"px"
}, 500);

//console.log(barOneTest)
//console.log(barTwoTest)

// document.addEventListener('DOMContentLoaded', () =>{
//     const timeLeftDisplay = document.querySelector('#time-left')
//     const startBtn = document.querySelector('#start-button')
//     let timeLeft=15

//     function countDown(){
//         setInterval(function(){
//             if (timeLeft<=0) {
//                 clearInterval(timeLeft=0)
//             }
//             timeLeftDisplay.innerHTML=timeLeft
//             timeLeft-=1
//         }, 1000)
//     }

//     startBtn.addEventListener('click', countDown)
// })










/* //console.log(data[stock].values[0].open)
document.getElementById("firstSymbol").addEventListener("click",getData);
// document.getElementById("secondSymbol").addEventListener("click",getData);
/for (const stock in stocks)
    //{
        console.log("testingloop")
    //document.getElementById("div1").innerHTML += "<p>"+data[0].open+"</p>"
   // };
    console.log(data)

  function changeSymbol(form){
       // form.document.getElementById("firstSymbol").options["Pepsi"].value =
       // form.document.getElementById("secondSymbol").options["Pespi"].value =
    }

    let api = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&"
 +"symbol="
 +symbol
 +"&interval=1min&outputsize=compact&apikey=3EODPZH75VPS0W1D"
console.log(api)


//let api = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=3EODPZH75VPS0W1D"*/