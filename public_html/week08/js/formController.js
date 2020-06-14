
function imListening(x) {
    x.addEventListener('onblur', checkMe(x));

}

function checkMe(x) {
    if(x)
}

function updatePrice(that) {  
    document.getElementById(that.name).innerHTML = that.value;
    document.getElementById(that.name).value = that.value;
    let subtotal = 0.0;
    let sums = document.getElementsByClassName('addSum');
    var i;
    for (i = 0; i < sums.length; i++) {
        document.getElementById('total').innerHTML += sums[i].value;;
    }

    
}
    
