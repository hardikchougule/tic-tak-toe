let boxs = document.querySelectorAll('.box');
let winban = document.getElementById('main_win');
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let winid = document.getElementById('winid');
let wintitle = document.querySelector('.winti');
winban.style.display = 'none';
let body = document.querySelector("body");
let turnx = true;
let flagcl = 0;
let winr = 1;
let i=0;

let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];


boxs.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerHTML === '') {

            if (turnx) {

                box.innerHTML = 'X';
                turnx = false;
            }
            else {
                box.innerHTML = 'O';
                turnx = true;
            }
            checkwinner();

        if(i==9){
            if(winr=1){
                wintitle.innerHTML="That IS ";
                winban.style.display = '';
                winid.innerText = 'TIE';
            }
        }
        }

        
        

    })

});


btn.addEventListener('click', clear);
function clear() {
    boxs.forEach((box) => {
        box.innerHTML = "";
        i=0;
    })
}

function checkwinner() {
    
    for (let cor of winner) {
        let val1 = boxs[cor[0]].innerHTML;
        let val2 = boxs[cor[1]].innerHTML;
        let val3 = boxs[cor[2]].innerHTML;

        if (val1 != '' && val2 != '' && val3 != '') {
            if (val1 == val2 && val2 == val3) {
                console.log("winner is " + val1);
                wintitle.innerHTML="WINNER IS";
                winban.style.display = '';
                winid.innerText = `${val1}`
                winr = 0;
                i=0;
            }
        }
      
    }
   i++; 
}

btn2.addEventListener('click', () => {
    clear();
    winban.style.display = 'none';
})

let chbt = document.querySelector('.changecl');

chbt.addEventListener('click', () => {
    if (flagcl == 1) {
        body.style.backgroundColor = "rgb(28, 25, 25)";
        chbt.style.backgroundColor = "white";
        flagcl = 0;
    }
    else if (flagcl == 0) {
        body.style.backgroundColor = "white";
        chbt.style.backgroundColor = "rgb(28, 25, 25)";
        flagcl = 1;
    }
});
