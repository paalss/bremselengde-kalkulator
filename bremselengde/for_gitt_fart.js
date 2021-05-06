const chalk = require("chalk");
// gitt fart, hva blir bremselengde?
// kjør node mappe/filnavn X
const fart = process.argv.slice(2);
const bremselengde = ((fart / 10) * (fart / 10)) / 2;
console.log(
  `Med fart på ${chalk.yellow(fart)} km/t blir bremselengden ${chalk.yellow(
    bremselengde
  )} meter`
);
