// table serial number counter as a global variable
let count = 0;

// Triangle card button click handler
document.getElementById('triangle-btn').addEventListener('click', function(){
    count += 1;
    // get input value and text element from function
   const name = getElementName('triangle-name');
   const input1 = getElementInputValue('triangle-input-1');
   const input2 =  getElementInputValue('triangle-input-2');
   const calculate  = 0.5 * parseFloat(input1) * parseFloat(input2);
   const fixedCalculate = calculate.toFixed(2)

    // set value to common function
    setElementValue(count, name, fixedCalculate,);
    
})

// Rectangle card button click handler
document.getElementById('rectangle-btn').addEventListener('click', function(){
     count += 1;
    // get input value and text element from function
    const name = getElementName('rectangle-name');
    const input1 = getElementInputValue('rectangle-input-1');
    const input2 = getElementInputValue('rectangle-input-2');
    const calculate  = parseFloat(input1) * parseFloat(input2);
    const fixedCalculate = calculate.toFixed(2);

   // set value to common function
   setElementValue(count, name, fixedCalculate,);

})

// Parallelogram card button click handler
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    count += 1;
     // get input value and text element from function
    const name = getElementName('parallelogram-name');
    const input1 = getElementInputValue('parallelogram-input-1');
    const input2 = getElementInputValue('parallelogram-input-2');
    const calculate  = parseFloat(input1) * parseFloat(input2);
    const fixedCalculate = calculate.toFixed(2);

    // Set Element input field to card body.
   document.getElementById('parallelogram-1').innerText = input1;
   document.getElementById('parallelogram-2').innerText = input2;

   // set value to common function
   setElementValue(count, name, fixedCalculate,);

})

// Rhombus card button click handler
document.getElementById('rhombus-btn').addEventListener('click', function(){
    count += 1;
     // get input value and text element from function
    const name = getElementName('rhombus-name');
    const input1 = getElementInputValue('rhombus-input-1');
    const input2 = getElementInputValue('rhombus-input-2');
    const calculate  = 0.5 * parseFloat(input1) * parseFloat(input2);
    const fixedCalculate = calculate.toFixed(2);

    // Set Element input field to card body.
   document.getElementById('rhombus-1').innerText = input1;
   document.getElementById('rhombus-2').innerText = input2 ;

   // set value to common function
   setElementValue(count, name, fixedCalculate,);

})

// Pentagon card button click handler
document.getElementById('pentagon-btn').addEventListener('click', function(){
    count += 1;
    // get input value and text element from function
    const name = getElementName('pentagon-name');
    const input1 = getElementInputValue('pentagon-input-1');
    const input2 = getElementInputValue('pentagon-input-2');
    const calculate  = 0.5 * parseFloat(input1) * parseFloat(input2);
    const fixedCalculate = calculate.toFixed(2);

     // Set Element input field to card body.
   document.getElementById('pentagon-1').innerText = input1;
   document.getElementById('pentagon-2').innerText = input2;

   // set value to common function
   setElementValue(count, name, fixedCalculate,);

})

// Ellipse card button click handler
document.getElementById('ellipse-btn').addEventListener('click', function(){
    count += 1;
    // get input value and text element from function
    const name = getElementName('ellipse-name');
    const input1 = getElementInputValue('ellipse-input-1');
    const input2 = getElementInputValue('ellipse-input-2');
    const calculate  = 3.14 * parseFloat(input1) * parseFloat(input2);
    const fixedCalculate = calculate.toFixed(2);

    // Set Element input field to card body.
   document.getElementById('ellipse-1').innerText = input1;
   document.getElementById('ellipse-2').innerText = input2;

   // set value to common function
   setElementValue(count, name, fixedCalculate,);

})



// ----------*******************************-------------- //
// Parallelogram input Show and Hide
document.getElementById('parallelogram-edit-btn').addEventListener('click', function(){
    showInput('show-parallelogram-input')

})

// Rhombus input Show and Hide
document.getElementById('rhombus-edit-btn').addEventListener('click', function(){
    showInput('show-rhombus-input')

})

// Pentagon input Show and Hide
document.getElementById('pentagon-edit-btn').addEventListener('click', function(){
    showInput('show-pentagon-input')

})

// Ellipse input Show and Hide
document.getElementById('ellipse-edit-btn').addEventListener('click', function(){
    showInput('show-ellipse-input')

})






