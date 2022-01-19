const mangoose = require('mongoose');
const User = require('./user');

mangoose.connect(
  'mongodb://localhost/test1db',
  () => {
    console.log('connected Hila');
  },
  (e) => console.error(e)
);
run();
async function run() {
  const user = new User({
    name: 'Hila',
    age: 35,
  });
  await user.save();
  console.log(user);
}
