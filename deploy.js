const gp = require('gh-pages');
gp.publish('dist', () => {
  if (err) console.error(err);
  else console.log("Published!")
});