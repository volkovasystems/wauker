const assert = require( "assert" );
const wauker = require( "./wauker.js" );

assert.deepEqual( wauker( Array ).map( ( constructor ) => { return constructor.name; } ), [ "Array" ] );

assert.deepEqual( wauker( Date ).map( ( constructor ) => { return constructor.name; } ), [ "Date" ] );

assert.deepEqual( wauker( RegExp ).map( ( constructor ) => { return constructor.name; } ), [ "RegExp" ] );

assert.deepEqual( wauker( RangeError ).map( ( constructor ) => { return constructor.name; } ), [ "RangeError", "Error" ] );

function Guest( name, index ){
	this.name = name;
	return index;
};

Guest.prototype.addGuest = function addGuest( name ) {
	return name;
};

assert.deepEqual( wauker( Guest ).map( ( constructor ) => { return constructor.name; } ), [ "Guest" ] );

console.log( "ok" );
