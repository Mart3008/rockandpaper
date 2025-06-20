function playGame(){

let humanScore=0;
let computerScore=0;

function getComputerChoice(){
   let option=Math.random();//Aqui cree la variable option asignando el metodo Math.random
    if (option<0.33)//en estas partes estoy usando condicionales para poder imprimir rock,paper or scissors
    {return "rock"}
    else if (option<0.66)
    {return "paper"}
    else
    {return "scissors"}}

function playRound(humanChoice,computerChoice){

    
    let humanLower=humanChoice.toLowerCase();
    console.log(`tu elegiste ${humanLower}`);
    console.log(`la pc elegio ${computerChoice}`);
    


if (humanLower==="rock" && computerChoice==="scissors" || humanLower==="scissors" && computerChoice==="paper" || humanLower==="paper" && computerChoice==="rock")
{humanScore ++; return "ganaste mi pana, unas chilindrinas de una"}
else if (computerChoice==="rock" && humanLower==="scissors" || computerChoice==="scissors" && humanLower==="paper" || computerChoice==="paper" && humanLower==="rock")
{computerScore ++; return "perdiste mi soli pipipipi igual salen las chelas pes"}
else
{return "empate mi cholo, igual sus respectivas chelas"}}



for (let i=1;i<=5;i++){
    console.log(`empezamos en la ronda ${i} `)
    const humanSelection = prompt("Adelante mi soli entre rock, paper y scissors estan las elecciones");
    const ComputerSelection = getComputerChoice();
    console.log(playRound(humanSelection,ComputerSelection));
    console.log(`este es el puntaje actual ${computerScore}-${humanScore}`)}

    console.log(`jogo terminado mis manos`)
    if(humanScore>computerScore)
        console.log("ganaste la partida mi kin");
    else if (computerScore>humanScore)
        console.log("perdiste mi pana");
    else
        console.log("this is a empate mi karnal")
  
}
playGame();





    
