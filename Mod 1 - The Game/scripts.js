function getSymbols(){
    let firstSymb = document.getElementById("firstSymbol").value
    let secondSymb = document.getElementById("secondSymbol").value
    return [secondSymb,firstSymb]
}

let firstStock = 0
let secondStock = 0
let firstStockArray = []
let secondStockArray = []
let fetchInterval;
let fetchLimit=0
let playerOneScore = 0
let playerTwoScore = 0
let gameOver= false

function getData(symbolsTest){
    //let symbolsTest = event.target.value;
    console.log("fetchInitiated")
    console.time("fetchTime")
    let api = "https://api.twelvedata.com/time_series?"
    +"symbol="
    +symbolsTest
    +",&interval=1min&outputsize=1&apikey=a18145a301e54e0bab5c05d5c419c6f4" 
    console.log(api)
    //searching the ulr's "database" with the parameters I set
    fetch(api) 
    //taking the response
    .then((response) => {  
        //converting the response to json so its better digestable
        return response.json();
        //making the formatted response "data"
    }).then((data)=>{ 
        console.log(data)
        console.log("testingFetch")
        //console.timeEnd("fetchTime")
        //displaying the data
        displayData(data)
    })//any errors will be presented here
    .catch((error) => console.log(error))
}

function onSubmit(){
    event.preventDefault()
    //making variable symbolsTest into a joined version of the symbols picked by the user
    let symbolsTest = getSymbols().join()
    console.log(symbolsTest)
    //the getData function runs on the symbols picked (fetched, formatted, etc)
    getData(symbolsTest)
    console.log("testingonSubmit")
    
    /*fetchInterval = setInterval(()=> {
        getData(symbolsTest) 
        fetchLimit++ 
        if(fetchLimit==2){
            clearInterval(fetchInterval)
        }
    },1000)*/
}

function displayData(data){
    let i = 0
    document.getElementById("div1").innerHTML = ""
    //this will run a for loop on the data pulled one time to get the price of the stocks picked
    for (const stock in data){
        i++
        //this is to simply manage the pulled data easier by putting it into one variable
        let usersStockValue = data[stock].values[0].open
        if (i==1){
             //making the first pulled data the second users stock
            firstStock=usersStockValue
            //here im pushing the data into an empty array to manipulate later
            firstStockArray.push(usersStockValue)
        }
        else{
            //making the second pulled data the second users stock
            secondStock=usersStockValue
            //here im again pushing the data into an empty array to manipulate later
            secondStockArray.push(usersStockValue)
        }
        console.log(stock)
        
        if (usersStockValue){
            console.log("printingNumbers")
            document.getElementById("div1").innerHTML += "<p>"+"$"+Math.floor(usersStockValue)+"</p>"
        }
        else{
            console.log("Sorry, data not here yet.")
        }
    }
    if(firstStock>secondStock){
        setTimeout(function() { alert("Congratulations, player 1 won!"); }, 3000);
        playerOneScore++
        document.getElementById("PlayerOneScore").innerText=playerOneScore
        if(playerOneScore==2){
            setTimeout(function() { alert("Player one has won the game"); }, 3000);
            
        }
    }
    else{
        setTimeout(function() { alert("Congratulations, player 2 won!"); }, 3000);
        playerTwoScore++
        document.getElementById("PlayerTwoScore").innerText=playerTwoScore
        if(playerTwoScore==2){
            setTimeout(function() { alert("Player two has won the game"); }, 3000);
        }
        
    }
}




setInterval(() => {
    document.getElementById("barOne").style.width = parseInt(firstStock)+"px"
    document.getElementById("barTwo").style.width = parseInt(secondStock)+"px"
}, 9000);


// function Restart(){

// }



/*for(let playerOneScore=0;playerOneScore<=2;playerOneScore++){
    if(PlayOnescore=2){
        alert("Player One Won the game!")
    }
}
*/

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