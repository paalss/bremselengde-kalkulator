const chalk = require("chalk");
// gitt fart, hva blir bremselengde?
// kjør node mappe/filnavn X

const fartsOkning = process.argv.slice(2);
const bremselengdeOkning = fartsOkning * fartsOkning
const text = fartsOkning == 2 ? 'dobler' : fartsOkning + '-dobler'
console.log(`${chalk.yellow(text)} man farten vil bremselengden ${chalk.yellow(bremselengdeOkning)}${chalk.yellow('-dobles')}`)
