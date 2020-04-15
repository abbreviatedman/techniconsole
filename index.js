const colors = require('colors');


const techniconsole = {
  label: (values) => {
    Object.keys(values).forEach((key) => {
      console.log(colors.magenta(key))
      console.log(colors.magenta.bold('-> '), colors.cyan(values[key]))
      console.log('')
    })
  },
}


module.exports = techniconsole;
