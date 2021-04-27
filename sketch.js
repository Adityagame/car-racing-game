var gameState=0  ;
var playerCount
var database, form1 , player1 , game1

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    game1=new game()
    game1.getState()
    game1.start() 
}

function draw(){
    background("white");
}


