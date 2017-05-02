const assert = require( "assert" );
const wauker = require( "./wauker.js" );

assert.ok( wauker( Array ) );

assert.ok( wauker( RangeError ).map( ( constructor ) => { return constructor.name; } ) );

console.log( "ok" );
