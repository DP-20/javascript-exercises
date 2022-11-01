const removeFromArray = function(arr, ...params) {
    let paramsToRemove = params;
    let indexArr = [];

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < paramsToRemove.length;j++){
            if(paramsToRemove[j] === arr[i]){
                indexArr.push(i);
            }
        }
    }

    indexArr = indexArr.sort();
    //console.log(indexArr);

    let count = indexArr.length;
    while(count > 0){
        //console.log(arr);
        arr.splice(indexArr[0],1);
        indexArr.shift();
        indexArr = indexArr.map(num => num-1);
        count--;
    }
    //console.log(arr);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
