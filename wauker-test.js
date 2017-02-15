
const wauker = require( "./wauker.js" );

console.log( wauker( Array ) );

console.log( wauker( RangeError ).map( ( constructor ) => { return constructor.name; } ) );
