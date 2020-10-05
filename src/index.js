// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) return [];

    const result = matrix.reduce((acum, item, index) => {
        return ((index % 2) ? acum.concat(item.reverse()) : acum.concat(item));
    }, []);
    return result;
}
