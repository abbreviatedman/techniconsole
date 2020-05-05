const colors = require ( 'colors' )


const atTop = function ( ...strs ) {
  console.clear (  )
  console.log( colors.cyan( `You've used .atTop to clear all previous logs, highlighting the following value(s):` ) )
  console.log( '' )
  strs.forEach ( ( str ) => console.log ( colors.bgMagenta.cyan.bold ( str ) ) )
}


module.exports = atTop
