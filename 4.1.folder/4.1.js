const yargs = require('yargs');

console.log(process.argv);
console.log(yargs.argv);

yargs.command({
  command: 'add',
  describe: 'add two number',
  builder: {
    firstNum: {
      type: 'number',
      describe: 'first number to add',
    },
    secondNum: {
      type: 'number',
      describe: 'second number to add',
    },
  },
  handler: function (argv) {
    console.log(argv.firstNum + argv.secondNum);
  },
});
yargs.command({
  command: 'pow',
  describe: 'pow two number',
  builder: {
    firstNum: {
      type: 'number',
      describe: 'first number to pow',
    },
    secondNum: {
      type: 'number',
      describe: 'second number to pow',
    },
  },
  handler: function (argv) {
    console.log(argv.firstNum ** argv.secondNum);
  },
});
yargs.command({
  command: 'sub',
  describe: 'sub two number',
  builder: {
    firstNum: {
      type: 'number',
      describe: 'first number to sub',
    },
    secondNum: {
      type: 'number',
      describe: 'second number to sub',
    },
  },
  handler: function (argv) {
    console.log(argv.firstNum - argv.secondNum);
  },
});
yargs.command({
  command: 'multi',
  describe: 'sub two number',
  builder: {
    firstNum: {
      type: 'number',
      describe: 'first number to multi',
    },
    secondNum: {
      type: 'number',
      describe: 'second number to multi',
    },
  },
  handler: function (argv) {
    console.log(argv.firstNum - argv.secondNum);
  },
});
console.log(yargs.argv);
