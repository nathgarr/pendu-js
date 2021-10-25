const image = document.getElementById('imagependu')

const formulaire = document.getElementById('fomulaire')

const lettre = document.getElementById('lettre')

var motrandom = 'karma'

var tabimg=[
    []
]
var tabjeux = []

var tabWord=[]

var tabwin=[
    []
]

function play(){
    setup();
    wordSecret();
}
play();

function setup(){

    formulaire.innerHTML = "<input type='text' maxlength='1' required id='input' placeholder='Saisissez une lettre'></input> <button id='Envoyer' type='submit'>Envoyer</button>";

    let input = document.getElementById('input')

    formulaire.addEventListener('submit', (e) =>{
        e.preventDefault();
        let inputValue = (input.value);
        if(inputValue<= 0 || inputValue>=1){
            return
        }
       checkletter(inputValue); 
       input.value='';
    })
}

function checkletter(letter){

        let input = document.getElementById('input')

        let inputValue = (input.value);

        console.log(inputValue);

    if(motrandom.includes(letter)){
        console.log('je suis la');
        sendWord(inputValue);
    }

    else{
        console.log('je suis pas la')
        sendWord(inputValue);
    }
}

function sendWord(inputValue){
    tabWord.push(inputValue);
    console.log(tabWord);
    lettre.innerHTML += " "+inputValue;
}

function wordSecret(){
    for(i =0; i <= motrandom.length; i++ ){
        motrandom.substring(0)
        tabjeux.push(motrandom)
        let divsama = document.getElementById('mystere')
        divsama.innerHTML ="<div></div>"
    }
}

function veryfwin(){

    if(tabwin == motrandom){
        alert('bravo vous avez survecu au pendu')
    }

    else{
        return
    }
}