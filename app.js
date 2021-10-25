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
        goodletter(inputValue);
    }

    else{
        console.log('je suis pas la')
        sendWord(inputValue);
        sadletter();
    }
}

function sendWord(inputValue){
    tabWord.push(inputValue);
    console.log(tabWord);
    lettre.innerHTML += " "+inputValue;
}

function goodletter(inputValue){
    if(motrandom.includes(inputValue)){
        aparait(inputValue);
    }
    else{
        sadletter();
    }
}

function aparait(inputValue){
    let divsame = document.getElementsByClassName('letter');
    for(i=0; i < motrandom.length; i++){
        if(motrandom[i]==inputValue){
            divsame[i].style.visibility = 'visible'
        }
    }
}

function wordSecret(){
    for(i =0; i < motrandom.length; i++ ){
        let message=motrandom.substring(i,i+1)
        tabjeux.push(message)
        let divsama = document.getElementById('mystere')
        let divsame = document.createElement('div')
        divsame.className="letter"
        divsama.appendChild(divsame)
        divsame.innerHTML = message
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