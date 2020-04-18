const colors = require( 'colors' );
const termSize = require( 'term-size' )
const wordWrap = require( 'wordwrap' )
const boxen = require( 'boxen' )


const techniconsole = {
  withLabel( values ) {
    Object.keys( values ).forEach( ( key ) => {
      console.log( colors.magenta( key ) )
      console.log( colors.magenta.bold( '-> ' ), colors.cyan( values[key] ) )
      console.log( '' )
    })
  },

  byItself ( str ) {
    console.clear()
    console.log( str )
  },

  banner: ( str ) => {
    const rowWidth = termSize().columns
    const lines = wordWrap( rowWidth - 10 )(str)
    const strWidth = Math.min( str.length, rowWidth - 10 )
    const horizontalPadding = Math.round( ( rowWidth - strWidth ) / 2 ) - 5

    const options = {
      borderColor: 'magenta',
      float: 'center',
      align: 'center',
      borderStyle: 'double',
      padding: {
        top: 1,
        bottom: 1,
        left: horizontalPadding,
        right: horizontalPadding,
      },
    }


    console.log(
      colors.cyan(
        boxen( lines.toUpperCase(), options )
      )
    )

  },
}


module.exports = techniconsole;
