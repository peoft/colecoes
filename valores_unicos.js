function uniqueValues(array) {
    if (!array || array.length == 0) {
        return "Acrescente valores ao array!";
    }
    const unique = new Set(array);
    return [...unique];
}

let array =  [30, 30, 40, 5, 223, 2049, 3034, 5];

 console.log(uniqueValues(array));

