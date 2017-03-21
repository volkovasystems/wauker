"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "wauker",
			"path": "wauker/wauker.js",
			"file": "wauker.js",
			"module": "wauker",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/wauker.git",
			"test": "wauker-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Walks the inheritance tree.

		This will return a list of inherited constructors.
	@end-module-documentation

	@include:
		{
			"een": "een",
			"falzy": "falzy",
			"protease": "protease",
			"protype": "protype"
		}
	@end-include
*/

const een = require( "een" );
const falzy = require( "falzy" );
const protease = require( "protease" );
const protype = require( "protype" );

const FUNCTION_CLASS = "Function";
const OBJECT_CLASS = "Object";

const wauker = function wauker( entity ){
	/*;
		@meta-configuration:
			{
				"entity:required": [
					"object",
					"function"
				]
			}
		@end-meta-configuration
	*/

	if( falzy( entity ) ||
		!protype( entity, OBJECT + FUNCTION ) ||
		entity.name === FUNCTION_CLASS ||
		entity.name === OBJECT_CLASS )
	{
		return [ ];
	}

	let tree = [ ];

	if( protype( entity, FUNCTION ) ){
		tree.push( entity );
	}

	protease( entity ).map( ( prototype ) => {
		if( !een( tree, prototype.constructor ) ){
			tree.push( prototype.constructor );
		}
	} );

	return tree;
};

module.exports = wauker;
