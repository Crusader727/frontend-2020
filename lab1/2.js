function getMinMax(str) {
    let razdel = /-?\d+(\.\d+)?/g;
    let chisl  = str.match(razdel);
    if (chisl==null) {
        return null;
    }

    let result = {};
    result.min = Math.min(...chisl);
    result.max = Math.max(...chisl);
    return result;
}
getMinMax('22 и 3.35, -2, 28, а потом 13, может 1.2 и -134');