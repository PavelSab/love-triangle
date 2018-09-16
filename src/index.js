/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
    for (let i = 0, lenght = preferences.length; i < lenght; i++) {
        const condOne = preferences[preferences[preferences[i] - 1] - 1] === i + 1;
        const condTwo = i + 1 !== preferences[i];
        if (condOne && condTwo) {
            count++;
        }
    }
    return count / 3;
  }

  