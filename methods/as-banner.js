const termSize = require ( 'term-size' )
const wordWrap = require ( 'wordwrap' )
const colors = require ( 'colors' )
const boxen = require ( 'boxen' )


const asBanner = function ( ...strs ) {
  const termWidth = termSize (  ).columns
  const rows = Array.from ( strs ).map ( ( str ) => wordWrap ( termWidth - 10 ) ( str.toUpperCase (  ) ) )
  let greatestLength = 0;
  for ( const row of rows ) {
    for ( const subStr of row.split ( '\n' ) ) {
      greatestLength = Math.max ( greatestLength, subStr.length )
    }
  }

  const strWidth = Math.min ( greatestLength, termWidth - 10 )
  const horizontalPadding = Math.round ( ( termWidth - strWidth ) / 2 ) - 5
  const options = {
    borderColor: 'magenta',
    float: 'center',
    align: 'center',
    borderStyle: 'double',
    padding: {
      top: 1,
      right: horizontalPadding,
      bottom: 1,
      left: horizontalPadding,
    },
  }

  console.log (
    colors.cyan (
      boxen ( rows.join ( '\n' ), options )
    )
  )
}


module.exports = asBanner
