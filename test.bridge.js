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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge





//: @bridge:
describe("wauker", function () {

	var testBridge = path.resolve(__dirname, "bridge.html");
	var bridgeURL = "file://" + testBridge;

	describe("`wauker( Array ).map( ( constructor ) => constructor.name )`", function () {

		it("should be equal to [ 'Array' ]", function () {

			var result = browser.url(bridgeURL).execute(

			function () {

				var test = wauker(Array).map(function (constructor) {
					return constructor.name;
				});

				return test;
			}).

			value;


			assert.deepEqual(result, ["Array"]);

		});

	});

	describe("`wauker( RangeError ).map( ( constructor ) => constructor.name )`", function () {
		it("should be equal to [ 'RangeError', 'Error' ]", function () {

			var result = browser.url(bridgeURL).execute(

			function () {

				var test = wauker(RangeError).map(function (constructor) {
					return constructor.name;
				});

				return test;

			}).

			value;


			assert.deepEqual(result, ["RangeError", "Error"]);

		});
	});

	describe("`wauker( )`", function () {
		it("should be equal to [ ]", function () {

			var result = browser.url(bridgeURL).execute(

			function () {return wauker();}).

			value;

			assert.deepEqual(result, []);

		});
	});

	describe("`wauker( 'hello' )`", function () {
		it("should be equal to [ ]", function () {

			var result = browser.url(bridgeURL).execute(

			function () {return wauker("hello");}).

			value;

			assert.deepEqual(result, []);

		});
	});

	describe("`wauker( 123 )`", function () {
		it("should be equal to [ ]", function () {

			var result = browser.url(bridgeURL).execute(

			function () {return wauker(123);}).

			value;

			assert.deepEqual(result, []);

		});
	});

	describe("`wauker( { } )`", function () {
		it("should be equal to [ ]", function () {

			var result = browser.url(bridgeURL).execute(

			function () {return wauker({});}).

			value;

			assert.deepEqual(result, []);

		});
	});

	describe("`wauker( function( ){ } )`", function () {
		it("should be equal to [ ]", function () {

			var result = browser.url(bridgeURL).execute(

			function () {return wauker(function () {});}).

			value;

			assert.deepEqual(result, []);

		});
	});

	describe("`wauker( ( ) => { } )`", function () {
		it("should be equal to [ ]", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
				//: @ignore:
    					return wauker( ( ) => { } )
    					//: @end-ignore
			}).

			value;

			//: @ignore:
   			assert.deepEqual( result, [ ] );
   			//: @end-ignore

		});
	});

	describe("`wauker( new Pear( ) ).map( ( constructor ) => constructor.name )`", function () {
		it("should be equal to [ 'Pear', 'Apple', 'Orange' ]", function () {

			var result = browser.url(bridgeURL).execute(

			function () {
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
    
    					return test;
    					//: @end-ignore

			}).

			value;



			/* @note
          			Test result has change from [ 'Pear', 'Apple', 'Orange' ]
          	to [ "Pear", "Orange" ]
          @note */


			assert.deepEqual(result, ['Pear', 'Apple', 'Orange']);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsImJyaWRnZVVSTCIsIml0IiwicmVzdWx0IiwiYnJvd3NlciIsInVybCIsImV4ZWN1dGUiLCJ0ZXN0Iiwid2F1a2VyIiwiQXJyYXkiLCJtYXAiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ2YWx1ZSIsImRlZXBFcXVhbCIsIlJhbmdlRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7OztBQU1BO0FBQ0FFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQixLQUFNQyxhQUFhRixLQUFLRyxPQUFMLENBQWFDLFNBQWIsRUFBd0IsYUFBeEIsQ0FBbkI7QUFDQSxLQUFNQyxZQUFZLFlBQVlILFVBQTlCOztBQUVBRCxVQUFVLDhEQUFWLEVBQTBFLFlBQU87O0FBRWhGSyxLQUFJLGdDQUFKLEVBQXNDLFlBQU87O0FBRTVDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYUosU0FBYixFQUF5QkssT0FBekI7O0FBRVosZUFBVzs7QUFFVixRQUFJQyxPQUFPQyxPQUFRQyxLQUFSLEVBQWdCQyxHQUFoQixDQUFxQixVQUFVQyxXQUFWLEVBQXVCO0FBQ3RELFlBQU9BLFlBQVlDLElBQW5CO0FBQ0EsS0FGVSxDQUFYOztBQUlBLFdBQU9MLElBQVA7QUFDQSxJQVRXOztBQVdYTSxRQVhGOzs7QUFjQW5CLFVBQU9vQixTQUFQLENBQWtCWCxNQUFsQixFQUEwQixDQUFFLE9BQUYsQ0FBMUI7O0FBRUEsR0FsQkQ7O0FBb0JBLEVBdEJEOztBQXdCQU4sVUFB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QXdELFlBQU87O0FBRTlELE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYUosU0FBYixFQUF5QkssT0FBekI7O0FBRVosZUFBVztBQUNWO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7O0FBRUssSUF6Qlc7O0FBMkJYTyxRQTNCRjs7OztBQStCQTs7Ozs7O0FBTUFuQixVQUFPb0IsU0FBUCxDQUFrQlgsTUFBbEIsRUFBMEIsQ0FBRSxNQUFGLEVBQVUsT0FBVixFQUFtQixRQUFuQixDQUExQjs7QUFFQSxHQXpDRDtBQTBDQSxFQTNDRDs7QUE2Q0EsQ0EvTEQ7O0FBaU1BIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcIndhdWtlclwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJ3YXVrZXIvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3dhdWtlci5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcIndhdWtlclwiOiBcIndhdWtlclwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBicmlkZ2U6XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xyXG4vLzogQGVuZC1icmlkZ2VcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuZGVzY3JpYmUoIFwid2F1a2VyXCIsICggKSA9PiB7XHJcblxyXG5cdGNvbnN0IHRlc3RCcmlkZ2UgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIpO1xyXG5cdGNvbnN0IGJyaWRnZVVSTCA9IFwiZmlsZTovL1wiICsgdGVzdEJyaWRnZTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggQXJyYXkgKS5tYXAoICggY29uc3RydWN0b3IgKSA9PiBjb25zdHJ1Y3Rvci5uYW1lIClgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ0FycmF5JyBdXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cclxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gd2F1a2VyKCBBcnJheSApLm1hcCggZnVuY3Rpb24oIGNvbnN0cnVjdG9yICl7XHJcblx0XHRcdFx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdFx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkudmFsdWU7XHJcblxyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIFwiQXJyYXlcIiBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIFJhbmdlRXJyb3IgKS5tYXAoICggY29uc3RydWN0b3IgKSA9PiBjb25zdHJ1Y3Rvci5uYW1lIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAnUmFuZ2VFcnJvcicsICdFcnJvcicgXVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXtcclxuXHJcblx0XHRcdFx0XHRsZXQgdGVzdCA9IHdhdWtlciggUmFuZ2VFcnJvciApLm1hcCggZnVuY3Rpb24oIGNvbnN0cnVjdG9yICl7XHJcblx0XHRcdFx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdFx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyBcIlJhbmdlRXJyb3JcIiwgXCJFcnJvclwiIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXsgcmV0dXJuIHdhdWtlciggKTsgfVxyXG5cclxuXHRcdFx0KS52YWx1ZTtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggJ2hlbGxvJyApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXsgcmV0dXJuIHdhdWtlciggXCJoZWxsb1wiICk7IH1cclxuXHJcblx0XHRcdCkudmFsdWU7XHJcblxyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIFsgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIDEyMyApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXsgcmV0dXJuIHdhdWtlciggMTIzICkgfVxyXG5cclxuXHRcdFx0KS52YWx1ZTtcclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyBdICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggeyB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBdXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApeyByZXR1cm4gd2F1a2VyKCB7IH0gKSB9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCBmdW5jdGlvbiggKXsgfSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXsgcmV0dXJuIHdhdWtlciggZnVuY3Rpb24oICl7IH0gKSB9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCAoICkgPT4geyB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBdXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cdFx0XHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxyXG5cdFx0XHRcdFx0cmV0dXJuIHdhdWtlciggKCApID0+IHsgfSApXHJcblx0XHRcdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0KS52YWx1ZTtcclxuXHJcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIF0gKTtcclxuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIG5ldyBQZWFyKCApICkubWFwKCAoIGNvbnN0cnVjdG9yICkgPT4gY29uc3RydWN0b3IubmFtZSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ1BlYXInLCAnQXBwbGUnLCAnT3JhbmdlJyBdXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cdFx0XHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxyXG5cdFx0XHRcdFx0Y2xhc3MgT3JhbmdlIHtcclxuXHRcdFx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRjbGFzcyBBcHBsZSBleHRlbmRzIE9yYW5nZSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0cnVjdG9yKCApeyBzdXBlciggKTsgfVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNsYXNzIFBlYXIgZXh0ZW5kcyBBcHBsZSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0cnVjdG9yKCApeyBzdXBlciggKTsgfVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gd2F1a2VyKCBuZXcgUGVhciggKSApLm1hcCggZnVuY3Rpb24oIGNvbnN0cnVjdG9yICl7XHJcblx0XHRcdFx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdFx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xyXG5cdFx0XHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cclxuXHJcblxyXG5cdFx0XHQvKiBAbm90ZVxyXG5cclxuXHRcdFx0XHRUZXN0IHJlc3VsdCBoYXMgY2hhbmdlIGZyb20gWyAnUGVhcicsICdBcHBsZScsICdPcmFuZ2UnIF1cclxuXHRcdFx0XHR0byBbIFwiUGVhclwiLCBcIk9yYW5nZVwiIF1cclxuXHRcdFx0QG5vdGUgKi9cclxuXHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyAnUGVhcicsICdBcHBsZScsICdPcmFuZ2UnIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxufSApO1xyXG5cclxuLy86IEBlbmQtYnJpZGdlXHJcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
