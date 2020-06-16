

function getCities(filename) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let output = "";
            output = this.responseText;
            if(document.getElementById('cities').innerHTML !== null) {
                document.getElementById('cities').innerHTML = "";
            }
            sliceAndDice(output);
        }
    };
    xmlhttp.open("GET", filename, true);
    xmlhttp.send();
}

function displayCountry(name) {
    document.getElementById('country').innerHTML = name;
}

function sliceAndDice(string) {
    let cut = string.split(/\n/);
    
    cut.forEach(myFunction);

    function myFunction(item, index) {
        
        if(index === 10) {
            return;
        }
        else {
            document.getElementById('cities').innerHTML += (index + 1) + ":" + item.split() + "<br>";
        }
    }
}