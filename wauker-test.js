
const assert = require( "assert" );
const wauker = require( "./wauker.js" );

assert.deepEqual( wauker( Array ).map( ( constructor ) => constructor.name ),
	[ "Array" ], "should be deeply equal" );

assert.deepEqual( wauker( RangeError ).map( ( constructor ) => constructor.name ),
	[ "RangeError", "Error" ], "should be deeply equal" );

class Orange {
	constructor( ){ }
}

class Apple extends Orange {
	constructor( ){ super( ); }
}

class Pear extends Apple {
	constructor( ){ super( ); }
}

assert.deepEqual( wauker( Pear ).map( ( constructor ) => constructor.name ),
	[ "Pear", "Apple", "Orange" ], "should be deeply equal" );

assert.deepEqual( wauker( new Pear( ) ).map( ( constructor ) => constructor.name ),
	[ "Pear", "Apple", "Orange" ], "should be deeply equal" );

/** @note test that replicates error on wauker
	console.log( wauker( ( ) => { } ) );
**/

console.log( "ok" );
