// four questions
// the first one

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let Name1 = zName.split(" ");

    return (
      Name1[0][0].toUpperCase() +
      Name1[0].slice(1) +
      " " +
      Name1[1][0].toUpperCase() +
      "."
    );
  }

  function ageWithMessage() {
    Age1 = zAge.split(" ")[0];
    return `Your Age Is ${Age1} `;
  }

  function countryTwoLetters() {
    return zCountry.slice(0, 2).toUpperCase();
  }

  function fullDetails() {
    x = `Hello ${namePattern(zName)} , ${ageWithMessage(
      zAge
    )} , You liVe In ${countryTwoLetters(zCountry)} `;
    return x;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
