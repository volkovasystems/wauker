
const assert = require( "assert" );
const wauker = require( "./wauker.js" );

assert.deepEqual( wauker( Array ).map( ( constructor ) => constructor.name ),
	[ "Array" ], "should return [ 'Array' ]" );

assert.deepEqual( wauker( RangeError ).map( ( constructor ) => constructor.name ),
	[ "RangeError", "Error" ], "should return [ 'RangeError', 'Error' ]" );

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
	[ "Pear", "Apple", "Orange" ], "should return [ 'Pear', 'Apple', 'Orange' ]" );

assert.deepEqual( wauker( new Pear( ) ).map( ( constructor ) => constructor.name ),
	[ "Pear", "Apple", "Orange" ], "should return [ 'Pear', 'Apple', 'Orange' ]" );

/** @note test that replicates error on wauker
	console.log( wauker( ( ) => { } ) );
**/

assert.deepEqual( wauker( ), [ ], "should be empty" );

assert.deepEqual( wauker( "hello" ), [ ], "should be empty" );

assert.deepEqual( wauker( 123 ), [ ], "should be empty" );

assert.deepEqual( wauker( { } ), [ ], "should be empty" );

assert.deepEqual( wauker( function( ){ } ), [ ], "should be empty" );

assert.deepEqual( wauker( ( ) => { } ), [ ], "should be empty" );

console.log( "ok" );
