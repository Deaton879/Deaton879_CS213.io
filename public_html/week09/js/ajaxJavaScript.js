function getCities(filename) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let output = "";
            output = this.responseText;
            if(document.getElementById('cities').innerHTML !== null) {
                document.getElementById('cities').innerHTML = "";
            }
            console.log(output);
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
    console.log(cut);
    cut.forEach(myFunction);

    function myFunction(item, index) {
        let newItem = item.replace(/\s/g, '-');
        console.log(newItem);
        if(index === 10) {
            return;
        }
        else {
            document.getElementById('cities').innerHTML += (index + 1) + " : " + newItem + "<br>";
        }
    }
}


/* function parseJSON(x) {
    let requestURL = "./txt/" + x.value;
    console.log(requestURL);
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject);  // temporary checking for valid response and data parsing
            const students = jsonObject['students'];
            
            for (let i = 0; i < students.length; i++) {
                let kid = document.createElement('section');

                let h3 = document.createElement('h3');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');

                h3.textContent = students[i].first + ' ' + students[i].last;
                p1.textContent = students[i].address.city + ', ' + students[i].address.state + '\n' + students[i].address.zip;
                p2.textContent = "GPA: " + students[i].gpa;
                p3.textContent = "Major: " + students[i].major;
                kid.appendChild(h3);
                kid.appendChild(p1);
                kid.appendChild(p2);
                kid.appendChild(p3);

                document.querySelector('section#students').appendChild(kid);
            }
        })
} */

async function parseJSON(x) {
    let requestURL = "./txt/" + x.value;
    console.log(requestURL);
    document.getElementById('students').innerHTML = null;
    console.log('sending request call')
    let response = await fetch(requestURL);
    if(response.status == 404) {
        document.getElementById('error').style.display = ('block');
        document.getElementById('students').innerHTML = null;
    }
    else if(response.ok) {
        let jsonObject = await response.json();
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const students = jsonObject['students'];
        
        for (let i = 0; i < students.length; i++) {
            let kid = document.createElement('section');

            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');

            h3.textContent = students[i].first + ' ' + students[i].last;
            p1.textContent = students[i].address.city + ', ' + students[i].address.state + '\n' + students[i].address.zip;
            p2.textContent = "GPA: " + students[i].gpa;
            p3.textContent = "Major: " + students[i].major;
            kid.appendChild(h3);
            kid.appendChild(p1);
            kid.appendChild(p2);
            kid.appendChild(p3);

            document.querySelector('section#students').appendChild(kid);
        }
    }



}

