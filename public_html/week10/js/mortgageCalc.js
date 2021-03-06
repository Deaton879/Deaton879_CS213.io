

let phase1 = false;
let phase2 = false;
let phase3 = false;
let complete = false;

let checkPhases = [phase1, phase2, phase3];



function validateForm() {
    if(phase1 == true && phase2 == true && phase3 == true) {
        checkSubmit();
    }
}


function checkApr() {
    var Apr = document.getElementById("apr").value;
    var x = document.getElementById("apr-error");

    if(Apr > 0 && Apr <= 25.00) {
        x.style.display = "none";
        phase1 = true;
    }
    else {
        x.style.display = "initial";
        //x.innerHTML = "*Percentage greater than 0 and less than (or equal to) 25.00% required"
        phase1 = false;
    }
    validateForm();
}

function checkTerm() {
    var Term = document.getElementById("term").value;
    var x = document.getElementById("term-error");
    if(Term > 0 && Term <= 40) {
        x.style.display = "none";      
        phase2 = true;
    }
    else {
        x.style.display = "initial";
        //x.innerHTML = "*Number between 1 and 40 required"
        phase2 = false;
    }
    validateForm();
}

function checkLoan() {
    var LoanAmt = document.getElementById("amount").value;
    var x = document.getElementById("loan-error");
    if(LoanAmt > 0) {
        x.style.display = "none";
        phase3 = true;
    }
    else {
        x.style.display = "initial";
        //x.innerHTML = "*Loan balance required"
        phase3 = false;
    }
    validateForm();
}


function checkSubmit() {
    let err = document.getElementById('submit-error');
    err.style.display = "none";
    let pay = document.getElementById('payment');
    
    for(let phase in checkPhases) {
        if(phase == false) {
            err.style.display = "block";
            let x;
            if(phase1 === checkPhases[0]) {
                x = document.getElementById("apr");
                x.focus();
                x.style.background = "yellow";
                x.style.display = "block";
            }
            else if(phase2 === checkPhases[1]) {
                x = document.getElementById("term");
                x.focus();
                x.style.background = "yellow";
                x.style.display = "block";
            }
            else if (phase3 === checkPhases[2]) {
                x = document.getElementById('amount')
                x.focus();
                x.style.background = "yellow";
                x.style.display = "block";
            }
            else {
                complete = true;
                err.style.display = "none";
            }
        }
        
    }
    if(complete == true) {
        console.log('yay');
        document.getElementById('calculate').disabled = false;
    }

}
