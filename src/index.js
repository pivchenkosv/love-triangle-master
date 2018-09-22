/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    if (preferences.length == 0) return 0;
    return Math.floor(preferences.map(function(preference, index){
        if(preferences[preferences[preference - 1] - 1] - 1 == index) return 1;
        else
            return 0;
    }).reduce((accumulator, currentValue) => accumulator + currentValue)/3);

  // your implementation
};
