function passvalues(){

    var username = document.getElementById("username").value;
    localStorage.setItem("textvalue",username);

    return false;
}

const user = localStorage.getItem("textvalue");

//document.getElementById("result").innerHTML

console.log(user);

const api_url = `https://investmentbank.herokuapp.com/api/user/${user}`;

const transaction_api_url= `https://investmentbank.herokuapp.com/api/transaction/${user}`

async function getapi(url){

    const response = await fetch(url);

    var data = await response.json();

    show_username(data)
}

async function getapi2(url){

    const response = await fetch(url);

    var data = await response.json();

    show_username2(data)
}


async function getapi3(url){

    const response = await fetch(url);

    var data = await response.json();

    show_name(data)
}


async function getapi4(url){

    const response = await fetch(url);

    var data = await response.json();

    show_name4(data)
}

async function getapi5(url){

    const response = await fetch(url);

    var data = await response.json();

    show_name5(data)
}


async function getapi6(url){

    const response = await fetch(url);

    var data = await response.json();

    show_name6(data)
}



async function getapi7(url){

    const response = await fetch(url);

    var data = await response.json();

    show_name7(data)
}


async function getapi8(url){

    const response = await fetch(url);

    var data = await response.json();

    show_name8(data)
}


async function getapi9(url){

    const response = await fetch(url);

    var data = await response.json();

    show_name9(data)
}


async function getapi10(url){

    const response = await fetch(url);

    var data = await response.json();

    show_name10(data)
}


async function getapi11(url){

    const response = await fetch(url);

    var data = await response.json();

    show_name11(data)
}


async function getapi12(url){

    const response = await fetch(url);

    var data = await response.json();

    show_name12(data)
}


async function getapi13(url){

    const response = await fetch(url);

    var data = await response.json();

    show_name13(data)
}


async function getapi14(url){

    const response = await fetch(url);

    var data = await response.json();

    show_name14(data)
}
getapi(api_url);
getapi2(api_url);
getapi3(api_url);
getapi4(api_url);
getapi5(api_url);
getapi6(api_url);
getapi7(api_url);
getapi8(api_url);
getapi9(api_url);
getapi10(api_url);
getapi11(api_url);
getapi12(api_url);
getapi13(api_url);
getapi14(api_url);


function show_username(data){

    document.getElementById("myuser").outerHTML = data.name;  
        
}

function show_username2(data){
    
    document.getElementById("usernamed").outerHTML = data.name;
}

function show_name(data){
    document.getElementById("myname").outerHTML = data.name;
}


function show_name4(data){
    document.getElementById("accusername").innerHTML = data.name;
}


function show_name5(data){
    document.getElementById("accusername2").innerHTML = data.name;
}


function show_name6(data){
    document.getElementById("accusername3").innerHTML = data.name;
}


function show_name7(data){
    document.getElementById("tusername").innerHTML = data.name;
}


function show_name8(data){
    document.getElementById("tusername1").innerHTML = data.name;
}

function show_name9(data){
    document.getElementById("cardusername").innerHTML = data.name;
}


function show_name10(data){
    document.getElementById("cardUsername1").innerHTML = data.name;
}

function show_name11(data){
    document.getElementById("cardusername2").innerHTML = data.name;
}



function show_name12(data){
    document.getElementById("musername").innerHTML = data.name;
}


function show_name13(data){
    document.getElementById("musername1").innerHTML = data.name;
}


function show_name14(data){
    document.getElementById("musername2").innerHTML = data.name;
}


async function getTransaction(url){

    const response = await fetch(url);

    var data = await response.json();

    show_transaction(data);
}


async function getTransaction1(url){

    const response = await fetch(url);

    var data = await response.json();

    show_transaction1(data);
}


async function getTransaction2(url){

    const response = await fetch(url);

    var data = await response.json();

    show_transaction2(data);
}


async function getTransaction3(url){

    const response = await fetch(url);

    var data = await response.json();

    show_transaction3(data);
}


async function getTransaction4(url){

    const response = await fetch(url);

    var data = await response.json();

    show_transaction4(data);
}


async function getTransaction5(url){

    const response = await fetch(url);

    var data = await response.json();

    show_transaction5(data);
}


async function getTransaction6(url){

    const response = await fetch(url);

    var data = await response.json();

    show_transaction6(data);
}


async function getTransaction7(url){

    const response = await fetch(url);

    var data = await response.json();

    show_transaction7(data);
}


async function getTransaction8(url){

    const response = await fetch(url);

    var data = await response.json();

    show_transaction8(data);
}


async function getTransaction9(url){

    const response = await fetch(url);

    var data = await response.json();

    show_transaction9(data);
}

function show_transaction(data){
    document.getElementById("currency1").innerHTML = data.accountCurrency;
}


function show_transaction1(data){
    document.getElementById("accbalance").innerHTML = data.accountBalance;
}


function show_transaction2(data){
    document.getElementById("acctype").innerHTML = data.accountType;
}


function show_transaction3(data){
    document.getElementById("accnumber").innerHTML = data.accountNumber;
}


function show_transaction4(data){
    document.getElementById("currency2").innerHTML = data.accountCurrency;
}


function show_transaction5(data){
    document.getElementById("accbalance1").innerHTML = data.accountBalance;
}

function show_transaction6(data){
    document.getElementById("acctype01").innerHTML = data.accountType;
}

function show_transaction7(data){
    document.getElementById("accnumber01").innerHTML = data.accountNumber;
}

function show_transaction8(data){
    document.getElementById("currency01").innerHTML = data.accountCurrency;
}

function show_transaction9(data){
    document.getElementById("accbalance01").innerHTML = data.accountBalance;
}

getTransaction(transaction_api_url);
getTransaction1(transaction_api_url);
getTransaction2(transaction_api_url);
getTransaction3(transaction_api_url);
getTransaction4(transaction_api_url);
getTransaction5(transaction_api_url);

getTransaction6(transaction_api_url);
getTransaction7(transaction_api_url);
getTransaction8(transaction_api_url);
getTransaction9(transaction_api_url);
