//input value to number function
let inputValueTaker = (id) => {
    let x = document.getElementById(id);
    let y = x.value;
    y = Number.parseFloat(y);
    x.value = '';
    return y;
}

//function innertextSetter
let innerTextSetter = (id, text) => {
    let x = document.getElementById(id);
    x.innerText = text;
}

//fuction for handleerror
let handlError = () => {
    document.getElementById('haldleError').classList.toggle('hidden');
    setTimeout(() => {
        document.getElementById('haldleError').classList.toggle('hidden');
    }, 3000);

}

// function for set text in Area calculation
function areaCalcSet() {
    let parentContainer = document.getElementById('areaCalcList');

    let itemName = event.target.parentNode.parentNode.firstElementChild.innerText;
    let itemResult = event.target.parentNode.parentNode.children[3].innerText;
    
    let li = document.createElement('li');
    li.innerText = `${itemName} ${itemResult}`;
    parentContainer.appendChild(li);
    li.classList = 'font-semibold text-gray-600 shadow-sm shadow-black w-[80%] mx-auto'
}

// Triangle
document.getElementById('triAngleBtn').addEventListener('click', ((event) => {

    let triAngleBase = inputValueTaker('triAngleBase');
    let triAngleHeight = inputValueTaker('triAngleHeight');
    let result = 0.5 * triAngleBase * triAngleHeight;

    if (isNaN(triAngleBase) || isNaN(triAngleHeight)) {
        handlError()
        return;
    }

    innerTextSetter('triAngleArea', result.toFixed(2));
    areaCalcSet()
}))


// reactAngle
document.getElementById('reactAngleBtn').addEventListener('click', (() => {

    let reactAngleBase = inputValueTaker('reactAngleBase');
    let reactAngleHeight = inputValueTaker('reactAngleHeight');
    let result = reactAngleBase * reactAngleHeight;

    if (isNaN(reactAngleBase) || isNaN(reactAngleHeight)) {
        handlError()
        return;
    }

    innerTextSetter('reactAngleArea', result.toFixed(2));
    areaCalcSet()
}))

// Parallelogram
document.getElementById('paralleloGramBtn').addEventListener('click', (() => {

    let paralleloGramBase = inputValueTaker('paralleloGramBase');
    let paralleloGramHeight = inputValueTaker('paralleloGramHeight');
    let result = paralleloGramBase * paralleloGramHeight;

    if (isNaN(paralleloGramBase) || isNaN(paralleloGramHeight)) {
        handlError()
        return;
    }

    innerTextSetter('paralleloGramArea', result.toFixed(2));
    areaCalcSet()
}))

// Rhombus
document.getElementById('RhombusBtn').addEventListener('click', (() => {

    let RhombusBase = inputValueTaker('RhombusBase');
    let RhombusHeight = inputValueTaker('RhombusHeight');
    let result = 0.5 * RhombusBase * RhombusHeight;

    if (isNaN(RhombusBase) || isNaN(RhombusHeight)) {
        handlError()
        return;
    }

    innerTextSetter('RhombusArea', result.toFixed(2));
    areaCalcSet()
}))

// Pentagon
document.getElementById('PentagonBtn').addEventListener('click', (() => {

    let PentagonBase = inputValueTaker('PentagonBase');
    let PentagonHeight = inputValueTaker('PentagonHeight');
    let result = 0.5 * PentagonBase * PentagonHeight;

    if (isNaN(PentagonBase) || isNaN(PentagonHeight)) {
        handlError()
        return;
    }

    innerTextSetter('PentagonArea', result.toFixed(2));
    areaCalcSet()
}))

// Pentagon
document.getElementById('EllipseBtn').addEventListener('click', (() => {

    let EllipseBase = inputValueTaker('EllipseBase');
    let EllipseHeight = inputValueTaker('EllipseHeight');
    let result = Math.PI * EllipseBase * EllipseHeight;

    if (isNaN(EllipseBase) || isNaN(EllipseHeight)) {
        handlError()
        return;
    }

    innerTextSetter('EllipseArea', result.toFixed(2));
    areaCalcSet()
}))