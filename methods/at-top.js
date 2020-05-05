const colors = require ( 'colors' )


const atTop = function ( ...strs ) {
  console.clear (  )
  console.log( colors.cyan( `We've cleared all logs above here to show you the following value(s):` ) )
  console.log( '' )
  strs.forEach ( ( str ) => console.log ( colors.bgMagenta.cyan.bold ( str ) ) )
}


module.exports = atTop
