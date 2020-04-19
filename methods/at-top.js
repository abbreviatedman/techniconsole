const colors = require ( 'colors' )


const atTop = function ( str ) {
  console.clear ()
  console.log ( colors.bgMagenta.cyan.bold ( str ) )
}


module.exports = atTop
