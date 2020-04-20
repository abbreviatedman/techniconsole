const colors = require ( 'colors' )


const atTop = function ( ...strs ) {
  console.clear (  )
  strs.forEach ( ( str ) => console.log ( colors.bgMagenta.cyan.bold ( str ) ) )
}


module.exports = atTop
