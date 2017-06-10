const assert = require( "assert" );
const wauker = require( "./wauker.js" );

assert.deepEqual( wauker( Array ).map( ( constructor ) => constructor.name ), [ "Array" ] );

assert.deepEqual( wauker( Date ).map( ( constructor ) => constructor.name ), [ "Date" ] );

assert.deepEqual( wauker( RegExp ).map( ( constructor ) => constructor.name ), [ "RegExp" ] );

assert.deepEqual( wauker( RangeError ).map( ( constructor ) => constructor.name ), [ "RangeError", "Error" ] );

class Orange {
	constructor( ){ }
}

class Apple extends Orange {
	constructor( ){ super( ); }
}

class Pear extends Apple {
	constructor( ){ super( ); }
}

assert.deepEqual( wauker( Pear ).map( ( constructor ) => constructor.name ), [ "Pear", "Apple", "Orange" ] );

assert.deepEqual( wauker( new Pear( ) ).map( ( constructor ) => constructor.name ), [ "Pear", "Apple", "Orange" ] );

console.log( "ok" );
