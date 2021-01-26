let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let salNet = document.getElementById("net");
let salBrut = document.getElementById("brut");
let impozitSalariu = document.getElementById("impozit")

function inputValue() {
	return input.value;
}

function calculSalariuNet() {
    let tableBody = document.querySelector("#tabledata");

    if(salBrut.checked === true && impozitSalariu.checked === true) {
    let tableRow = `
    <tr scope="col">
        <th>Detalii</th>
        <th>Valoare</th>
    </tr>
    <tr>
    <td>Salariu Brut</td>
    <td>${input.value}</td>
    </tr>
    <tr>
    <td>Salariu Net</td>
    <td>${Math.ceil(input.value * 0.585)}</td>
    </tr>
    <tr>
    <td>Asigurari Sociale CAS</td>
    <td>${Math.ceil(input.value * 0.25)}</td>
    </tr>
    <tr>
    <td>Asigurari de Sanatate CASS</td>
    <td>${Math.ceil(input.value * 0.1)}</td>
    </tr>
    <tr>
    <td>Impozit pe Venit</td>
    <td>${Math.ceil((input.value * 0.65)* 0.1)}</td>
    </tr>
    `;
    tableBody.innerHTML = tableRow;
    } else if (salBrut.checked === true && impozitSalariu.checked === false){
        let tableRow = `
        <tr>
        <th scope="col">Detalii</th>
        <th scope="col">Valoare</th>
    </tr>
    <tr>
    <td>Salariu Brut</td>
    <td>${input.value}</td>
    </tr>
    <tr>
    <td>Salariu Net</td>
    <td>${Math.ceil(input.value * 0.65)}</td>
    </tr>
    <tr>
    <td>Asigurari Sociale CAS</td>
    <td>${Math.ceil(input.value * 0.25)}</td>
    </tr>
    <tr>
    <td>Asigurari de Sanatate CASS</td>
    <td>${Math.ceil(input.value * 0.1)}</td>
    </tr>
    <tr>
    <td>Impozit pe Venit</td>
    <td>0</td>
    </tr>
    `;
    tableBody.innerHTML = tableRow;
    } else if (salNet.checked === true && impozitSalariu.checked === true) {
        let tableRow = `
        <tr>
            <th scope="col">Detalii</th>
            <th scope="col">Valoare</th>
        </tr>
        <tr>
        <td>Salariu Brut</td>
        <td>${Math.ceil(input.value / 0.585)}</td>
        </tr>
        <tr>
        <td>Salariu Net</td>
        <td>${Math.ceil(input.value)}</td>
        <tr>
        <td>Asigurari Sociale CAS</td>
        <td>${Math.ceil((input.value / 0.585) * 0.25)}</td>
        </tr>
        <tr>
        <td>Asigurari de Sanatate CASS</td>
        <td>${Math.ceil((input.value / 0.585) * 0.1)}</td>
        </tr>
        <tr>
        <td>Impozit pe Venit</td>
        <td>${Math.ceil((input.value / 0.585 - input.value / 0.585 * 0.35) * 0.1)}</td>
        </tr>`;
        tableBody.innerHTML = tableRow;
    } else {
        let tableRow = `
        <tr>
            <th scope="col">Detalii</th>
            <th scope="col">Valoare</th>
        </tr>
        <tr>
        <td>Salariu Brut</td>
        <td>${Math.ceil(input.value / 0.65)}</td>
        </tr>
        <tr>
        <td>Salariu Net</td>
        <td>${Math.ceil(input.value)}</td>
        <tr>
        <td>Asigurari Sociale CAS</td>
        <td>${Math.ceil((input.value / 0.65) * 0.25)}</td>
        </tr>
        <tr>
        <td>Asigurari de Sanatate CASS</td>
        <td>${Math.ceil((input.value / 0.65) * 0.1)}</td>
        </tr>
        <tr>
        <td>Impozit pe Venit</td>
        <td>0</td>
        </tr>`;
        tableBody.innerHTML = tableRow;
    }
    
}

function addTableAfterClick() {
	if (inputValue() > 0) {
		calculSalariuNet();
	}
}

function addListAfterKeypress(event) {
	if (inputValue() > 0 && event.keyCode === 13) {
		calculSalariuNet();
	}
}	

button.addEventListener("click", addTableAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



