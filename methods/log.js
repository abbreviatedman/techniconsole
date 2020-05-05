const colors = require( 'colors' )


const log = function ( ...vals ) {

  console.log(`                                  (@@@@@@@@
                                  (@@    @@@/                                   
                                  (@@      @@@                                  
          @@@@@@@@@@@@@@@@@@@@@@@@@@@        @@@@@@@@@@@@@@@@@@@@@@@@@@         
      *@@@@               @@@@                                        @@@@      
    @@@@    @@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.       @@@@   
  &@@    @@@@          @@@@,   @@@                                         &@@  
 @@@   @@@     @@@@@@@    @@@   %@@                                          @@(
 @@   @@@   @@@      @@@/   @@   @@@@@@@@@@@@@@@@@@@@   *@@@@@@@@@@@@@@@@     @@
@@@   @@   @@@         @@   @@@   @@                                          @@
@@@   @@   @@@         @@   @@@  .@@                 @@@@@@@@@@@@             @@
 @@   @@@   %@@@    @@@@   %@@   @@@  @@@@@@@@@@@@@@@@         .@@@@@@@@@    #@@
 *@@    @@@    @@@@@@     @@@   @@@                    @@@@@@@@             ,@@ 
   @@@    @@@@                 @@@                    @@#    @@@           @@@  
    (@@@     @@@@@@@@@@     .@@@@@@@@@@@@@@@@@@@@                        @@@    
       @@@@@             @@@@/                                       @@@@@      
           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          `)
  console.log ( colors.cyan ( `Well... you DID ask for a log! You probably wanted either CONSOLE.log or one of our OTHER methods, like:` ))
  console.log( colors.cyan( `*` ), colors.magenta(`.withLabel` ) )
  console.log( colors.cyan( `*` ), colors.magenta(`.asBanner` ) )
  console.log( colors.cyan( `*` ), colors.magenta(`.atTop` ) )
  console.log( '' )
  console.log ( colors.cyan ( `Anyway... here's the value you wanted "logged"!` ) )
  console.log( '' )
  vals.forEach( ( val ) => console.log ( colors.magenta( val ) ) )
}


module.exports = log
