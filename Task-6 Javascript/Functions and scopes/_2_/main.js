//  two questions

//  first one
let itsMe = () => "Iam A Normal Function";
console.log(itsMe()); // Iam A Normal Function

// second one

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`; //www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
