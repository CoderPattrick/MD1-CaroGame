let arr=[];
let arr2=[];
let display ='';
let cnt=0;
let cntWin=1;

function setDefaultArr() {
    for (let i = 0; i < 20; i++) {
        arr[i] = [];
        arr2[i] =[];
        for (let j = 0; j < 20; j++) {
            arr[i][j] = '<input id="butt" type="button" value=" " onclick="clickAction(' + i + ',' + j + ')"/>'
            arr2[i][j]=' ';
        }
    }
}
function setLockedArr() {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            arr[i][j] = '<input id="butt" type="button" value="'+arr2[i][j]+'"/>'
        }
    }
}

function createBoard(){
    display = '<table>';
    for (let i = 0; i < 20; i++) {
        display += '<tr>';
        for (let j = 0; j < 20; j++) {
            display += '<td>'+arr[i][j]+'</td>';
        }
        display += '</tr>';
    }
    display += '</table>';
    document.getElementById("display").innerHTML = display;
}
function restartFunc(){
    setDefaultArr();
    createBoard();
}
restartFunc();
function changeValueXO(){
    if(cnt%2==0){
        cnt++;
        return 'X';
    }
    cnt++;
    return 'O';
}
function clickFunction(i,j){
    let x =changeValueXO();
    arr[i][j] = '<input id="butt" type="button" value="'+x+'"/>';
    arr2[i][j]= x;
    createBoard();
}

function checkRow(i,j) {
    let x = arr2[i][j];
    for (let k = j - 1; k >= 0; k--) {
        if (arr2[i][k] == x) {
            cntWin++;
            console.log(cntWin);
        }
        else {break;}
    }
    for (let k = j + 1; k < arr2[i].length; k++) {
        if (arr2[i][k] == x) {
            cntWin++;
            console.log(cntWin);
        }
        else {break;}
    }
    checkWin();
    cntWin=1;
    console.log(cntWin);
}
function checkCols(i,j) {
    let x = arr2[i][j];
    for (let k = i-1; k>=0 ; k--) {
        if (arr2[k][j] == x) {
            cntWin++;
            console.log(cntWin);
        }
        else {break;}
    }
    for (let k = i+1 ; k < arr2[i].length; k++) {
        if (arr2[k][j] == x) {
            cntWin++;
            console.log(cntWin);
        }
        else {break;}
    }
    checkWin();
    cntWin=1;
    console.log(cntWin);
}
function checkMainDiagonal(i,j){
    let x = arr2[i][j];
    let a =i-1;
    let b =j-1;
    while(a>=0&&b>=0){
        if(arr2[a][b]==x){
            cntWin++;
            console.log(cntWin);
        }
        else {break;}
        a--;
        b--;
    }
    a=i+1;
    b=j+1;
    while(a<arr2.length&&b<arr.length){
        if(arr2[a][b]==x){
            cntWin++;
            console.log(cntWin);
        }
        else {break;}
        a++;
        b++;
    }
    checkWin();
    cntWin=1;
    console.log(cntWin);
}
function checkSubDiagonal(i,j){
    let x = arr2[i][j];
    let a =i-1;
    let b =j+1;
    while(a>=0&&b<arr.length){
        if(arr2[a][b]==x){
            cntWin++;
            console.log(cntWin);
        }
        else {break;}
        a--;
        b++;
    }
    a=i+1;
    b=j-1;
    while(a<arr2.length&&b>=0){
        if(arr2[a][b]==x){
            cntWin++;
            console.log(cntWin);
        }
        else {break;}
        a++;
        b--;
    }
    checkWin();
    cntWin=1;
    console.log(cntWin);
}

function checkWin(){
    if(cntWin>=5){
        endGame();
    }
}
function endGame(){
    alert("Game Set!");
    setLockedArr();
    createBoard();
    cnt=0;
}
function clickAction(i,j){
    clickFunction(i,j);
    checkCols(i,j);
    checkRow(i,j);
    checkMainDiagonal(i,j);
    checkSubDiagonal(i,j);
}
