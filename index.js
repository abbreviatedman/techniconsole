const colors = require( 'colors' );
const termSize = require( 'term-size' )
const wordWrap = require( 'wordwrap' )
const boxen = require( 'boxen' )


const techniconsole = {
  withLabel( variables ) {
    Object.keys( variables ).forEach( ( variableName ) => {
      const value = variables[variableName]
      console.log( colors.magenta( variableName ) )
      console.log( colors.magenta.bold( '-> ' ), colors.cyan( value ) )
      console.log( '' )
    })
  },

  byItself ( str ) {
    console.clear()
    console.log( str )
  },

  banner: ( str ) => {
    const rows = wordWrap( rowWidth - 10 )(str)

    const rowWidth = termSize().columns
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
        boxen( rows.toUpperCase(), options )
      )
    )

  },
}


module.exports = techniconsole;
