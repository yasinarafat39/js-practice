


const modelTestResult = [10, 14, 16, 18, 21, 28, 39, 90, 101, 200, 2050];
document.getElementById("number").innerHTML = modelTestResult;


function sortRandomly() {
    modelTestResult.sort(function () { return 0.5 - Math.random() });
    document.getElementById("ramdomSortedResult").innerHTML = `
    Randomly Sorted: ${modelTestResult}
    `;
};

