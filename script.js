var player1=[];
var player2=[];
var text="o";
var count=9;
var win="false";
var Outcomes=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,5,6]
];
var boxes=document.getElementsByClassName("box");
var score=document.getElementById("result-box");
var button=document.getElementById("button");

for(var i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click", handleEvent);
}

function showScore(text){
    msg.innerText = text == "Draw" ? `${text}` : `${text} Won`;
    score.style.visibility='visible';
}

function checkWin(Outcomes,arr,text){
    let counts=0;
    for(var i=0;i<Outcomes.length;i++){

        for(var j=0;j<Outcomes[i].length;j++){
            if(arr[j] == Outcomes[i][j]){
                counts++;
            }
            else{
                counts=0;
                break;
            }
        }

        if(counts==3){
            break;
        }

        
    }
    console.log(counts);
    if(counts==3){
        win="true";
        showScore(text);
    }
}

function handleEvent(e){
    if(e){
        count=count-1;
        text=text=="o"?"x":"o";
        text=="x"?player1.push(e.target.id):player2.push(e.target.id);
        e.target.innerHTML=`${text}`;
        let arr=text=="x"?player1:player2;
        checkWin(Outcomes,arr,text);
        console.log(player1,player2);
    }

    if(count==0 && win=="false"){
        showScore("Draw");
    }
}

button.onclick=()=>{
    window.location.reload()
};

