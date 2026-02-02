let cells = document.querySelectorAll('.cell');
let resetBtn=document.getElementById('reset-button');
let Pattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let chance=true;
let Result=document.querySelector('#result');
cells.forEach(cell=>{
    cell.addEventListener("click",()=>{
        if(chance){
            cell.innerText="X";
            chance=false;
        }else{
            cell.innerText="O";
            chance=true;
        }
        cell.disabled=true;
        checkForWin();
    });
});
resetBtn.addEventListener("click",reset);
function checkForWin(){
    for(let pattern of Pattern){
         if(cells[pattern[0]].innerText!="" && cells[pattern[1]].innerText!="" && cells[pattern[2]].innerText!=""){
        if(cells[pattern[0]].innerText===cells[pattern[1]].innerText && cells[pattern[1]].innerText===cells[pattern[2]].innerText){
            console.log("Win",cells[pattern[0]].innerText); 
            Result.innerText=`Player ${cells[pattern[0]].innerText} Wins!`;
            cells.forEach(cell=>cell.disabled=true);
            return;
    }
}
    }
}
function reset(){
    chance=true;
    cells.forEach(cell=>{
        cell.innerText="";
        cell.disabled=false;
    });
    Result.innerText="";
}