const chalk = require("chalk");
// forskjellig oppnevnt fart, hva blir bremselengde?
// kjør node mappe/filnavn

for (let i = 0; i < 10; i++) {
  const fart = i * 10;
  const bremselengde = ((fart / 10) * (fart / 10)) / 2;
  console.log(
    `Med fart på ${chalk.yellow(fart)} km/t blir bremselengden ${chalk.yellow(
      bremselengde
    )} meter`
  );
}
