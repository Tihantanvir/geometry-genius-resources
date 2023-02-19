// get all card element name usining ffunction
function getElementName(elementId){
    const triangleName = document.getElementById(elementId).innerText;
    return triangleName;
}

// get all card input value usining ffunction
function getElementInputValue(inputId){
    const triangleInput1 = document.getElementById(inputId).value;
    const triangleInput2 = document.getElementById(inputId).value;

    // check validation for all input field
    if(triangleInput1 === '' || isNaN(triangleInput1) || triangleInput1 < 0 || triangleInput2 === '' || isNaN(triangleInput2) || triangleInput2 < 0 ){
        alert('Only valid numbers are allowed in this input field*');
    }

    return triangleInput1, triangleInput2;
}


// -----------****************-----------//
// input hide and show -- toggle
function showInput(showInputId){
    let inputField = document.getElementById(showInputId)
    console.log(inputField);
    if(inputField.style.display === 'none'){
        inputField.removeAttribute('style');
    }else{
        inputField.style.display = 'none'
    }
}



// Set all element's value in table
function setElementValue(count,  name, calculate){
    let tableContainer = document.getElementById('table-container');

    let createTr = document.createElement('tr');
    createTr.id = 'trId'
    createTr.innerHTML = `
        <th >${count}</th>
        <td >${name}</td>
        <td id="td-calculate" >${calculate}cm<sup>2</sup></td>
        <td>
        <button id="converter-btn" class="bg-blue-500 py-1 px-4 text-white">Covert to m<sup>2</sup><button>
        </td>
    `;

    tableContainer.appendChild(createTr);

    if(calculate === '' || isNaN(calculate) || calculate < 0){
        createTr.innerHTML = '';

    }
    
}


