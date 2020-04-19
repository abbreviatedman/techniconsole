const termSize = require ( 'term-size' )
const wordWrap = require ( 'wordwrap' )
const colors = require ( 'colors' )
const boxen = require ( 'boxen' )


const asBanner = function ( str ) {
  const rowWidth = termSize().columns
  const rows = wordWrap ( rowWidth - 10 ) ( str )
  const strWidth = Math.min ( str.length, rowWidth - 10 )
  const horizontalPadding = Math.round ( ( rowWidth - strWidth ) / 2 ) - 5

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
    colors.cyan (
      boxen ( rows.toUpperCase (), options )
    )
  )
}


module.exports = asBanner
