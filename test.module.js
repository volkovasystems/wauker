"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "wauker",
			"path": "wauker/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/wauker.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"wauker": "wauker"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const wauker = require( "./wauker.js" );
//: @end-server

//: @client:
const wauker = require( "./wauker.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "wauker", ( ) => {

	describe( "`wauker( Array ).map( ( constructor ) => constructor.name )`", ( ) => {

		it( "should be equal to [ 'Array' ]", ( ) => {

			let test = wauker( Array ).map( function( constructor ){
				return constructor.name;
			} );

			assert.deepEqual( test, [ "Array" ] );

		} );

	} );

	describe( "`wauker( RangeError ).map( ( constructor ) => constructor.name )`", ( ) => {
		it( "should be equal to [ 'RangeError', 'Error' ]", ( ) => {

			let test = wauker( RangeError ).map( function( constructor ){
				return constructor.name;
			} );

			assert.deepEqual( test, [ "RangeError", "Error" ] );

		} );
	} );

	describe( "`wauker( )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			assert.deepEqual( wauker( ), [ ] );
		} );
	} );

	describe( "`wauker( 'hello' )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			assert.deepEqual( wauker( "hello" ), [ ] );
		} );
	} );

	describe( "`wauker( 123 )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			assert.deepEqual( wauker( 123 ), [ ] );
		} );
	} );

	describe( "`wauker( { } )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			assert.deepEqual( wauker( { } ), [ ] );
		} );
	} );

	describe( "`wauker( function( ){ } )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			assert.deepEqual( wauker( function( ){ } ), [ ] );
		} );
	} );

	describe( "`wauker( ( ) => { } )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			assert.deepEqual( wauker( ( ) => { } ), [ ] );
		} );
	} );

	describe( "`wauker( new Pear( ) ).map( ( constructor ) => constructor.name )`", ( ) => {
		it( "should be equal to [ 'Pear', 'Apple', 'Orange' ]", ( ) => {

			class Orange {
				constructor( ){ }
			}

			class Apple extends Orange {
				constructor( ){ super( ); }
			}

			class Pear extends Apple {
				constructor( ){ super( ); }
			}

			let test = wauker( new Pear( ) ).map( function( constructor ){
				return constructor.name;
			} );

			/* @note

				Test result has change from [ 'Pear', 'Apple', 'Orange' ]
				to [ "Pear", "Orange" ]
			@note */

			assert.deepEqual( test, [ 'Pear', 'Apple', 'Orange' ] );

		} );
	} );

} );

//: @end-server

//: @client:

describe( "wauker", ( ) => {

	describe( "`wauker( Array ).map( ( constructor ) => constructor.name )`", ( ) => {

		it( "should be equal to [ 'Array' ]", ( ) => {

			let test = wauker( Array ).map( function( constructor ){
				return constructor.name;
			} );

			assert.deepEqual( test, [ "Array" ] );

		} );

	} );

	describe( "`wauker( RangeError ).map( ( constructor ) => constructor.name )`", ( ) => {
		it( "should be equal to [ 'RangeError', 'Error' ]", ( ) => {

			let test = wauker( RangeError ).map( function( constructor ){
				return constructor.name;
			} );

			assert.deepEqual( test, [ "RangeError", "Error" ] );

		} );
	} );


	describe( "`wauker( Pear ).map( ( constructor ) => constructor.name )`", ( ) => {
		it( "should be equal to [ 'Pear', 'Apple', 'Orange' ]", ( ) => {

			class Orange {
				constructor( ){ }
			}

			class Apple extends Orange {
				constructor( ){ super( ); }
			}

			class Pear extends Apple {
				constructor( ){ super( ); }
			}

			let test = wauker( new Pear( ) ).map( function( constructor ){
				return constructor.name;
			} );

			/* @note

				Test result has change from [ 'Pear', 'Apple', 'Orange' ]
				to [ "Pear", "Orange" ]
			@note */

			assert.deepEqual( test, [ 'Pear', 'Apple', 'Orange' ] );

		} );
	} );

	describe( "`wauker( )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			assert.deepEqual( wauker( ), [ ] );
		} );
	} );

	describe( "`wauker( 'hello' )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			assert.deepEqual( wauker( "hello" ), [ ] );
		} );
	} );

	describe( "`wauker( 123 )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			assert.deepEqual( wauker( 123 ), [ ] );
		} );
	} );

	describe( "`wauker( { } )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			assert.deepEqual( wauker( { } ), [ ] );
		} );
	} );

	describe( "`wauker( function( ){ } )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			assert.deepEqual( wauker( function( ){ } ), [ ] );
		} );
	} );

	describe( "`wauker( ( ) => { } )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {
			assert.deepEqual( wauker( ( ) => { } ), [ ] );
		} );
	} );

} );

//: @end-client

//: @bridge:
describe( "wauker", ( ) => {

	const testBridge = path.resolve(__dirname, "bridge.html");
	const bridgeURL = "file://" + testBridge;

	describe( "`wauker( Array ).map( ( constructor ) => constructor.name )`", ( ) => {

		it( "should be equal to [ 'Array' ]", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){

					let test = wauker( Array ).map( function( constructor ){
						return constructor.name;
					} );

					return test;
				}

			).value;


			assert.deepEqual( result, [ "Array" ] );

		} );

	} );

	describe( "`wauker( RangeError ).map( ( constructor ) => constructor.name )`", ( ) => {
		it( "should be equal to [ 'RangeError', 'Error' ]", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){

					let test = wauker( RangeError ).map( function( constructor ){
						return constructor.name;
					} );

					return test;

				}

			).value;


			assert.deepEqual( result, [ "RangeError", "Error" ] );

		} );
	} );

	describe( "`wauker( )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){ return wauker( ); }

			).value;

			assert.deepEqual( result, [ ] );

		} );
	} );

	describe( "`wauker( 'hello' )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){ return wauker( "hello" ); }

			).value;

			assert.deepEqual( result, [ ] );

		} );
	} );

	describe( "`wauker( 123 )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){ return wauker( 123 ) }

			).value;

			assert.deepEqual( result, [ ] );

		} );
	} );

	describe( "`wauker( { } )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){ return wauker( { } ) }

			).value;

			assert.deepEqual( result, [ ] );

		} );
	} );

	describe( "`wauker( function( ){ } )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){ return wauker( function( ){ } ) }

			).value;

			assert.deepEqual( result, [ ] );

		} );
	} );

	describe( "`wauker( ( ) => { } )`", ( ) => {
		it( "should be equal to [ ]", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					//: @ignore:
					return wauker( ( ) => { } )
					//: @end-ignore
				}

			).value;

			//: @ignore:
			assert.deepEqual( result, [ ] );
			//: @end-ignore

		} );
	} );

	describe( "`wauker( new Pear( ) ).map( ( constructor ) => constructor.name )`", ( ) => {
		it( "should be equal to [ 'Pear', 'Apple', 'Orange' ]", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					//: @ignore:
					class Orange {
						constructor( ){ }
					}

					class Apple extends Orange {
						constructor( ){ super( ); }
					}

					class Pear extends Apple {
						constructor( ){ super( ); }
					}

					let test = wauker( new Pear( ) ).map( function( constructor ){
						return constructor.name;
					} );

					//: @end-ignore

				}

			).value;



			/* @note

				Test result has change from [ 'Pear', 'Apple', 'Orange' ]
				to [ "Pear", "Orange" ]
			@note */

			assert.deepEqual( result, [ 'Pear', 'Apple', 'Orange' ] );

		} );
	} );

} );

//: @end-bridge
