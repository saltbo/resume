const fs = require('fs');
const handlebars = require('handlebars');
const handlebarsWax = require('handlebars-wax');
const moment = require('moment');

handlebars.registerHelper({
  removeProtocol: url => url.replace(/.*?:\/\//g, ''),
  concat: (...args) => args.filter(arg => typeof arg !== 'object').join(''),
  // Arguments: {address, city, subdivision, postalCode, countryCode}
  formatAddress: (...args) => args.filter(arg => typeof arg === 'string' && arg.trim() !== '').join(', '),
  formatDate: date => moment(date).format('MM/YYYY'),
  lowercase: s => s.toLowerCase(),
  eq: (a, b) => a === b,
});

function render(resume) {
  const dir = `${__dirname}/src`;
  const cssPath = resume.meta && resume.meta.customCssPath
    ? resume.meta.customCssPath
    : `${dir}/style.css`;
  const css = fs.readFileSync(cssPath, 'utf-8');
  const resumeTemplate = fs.readFileSync(`${dir}/resume.hbs`, 'utf-8');

  const Handlebars = handlebarsWax(handlebars);

  Handlebars.partials(`${dir}/partials/**/*.{hbs,js}`);

  return Handlebars.compile(resumeTemplate)({
    style: `<style>${css}</style>`,
    resume,
  });
}

module.exports = {
  render,
};
