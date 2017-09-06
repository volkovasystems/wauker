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

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

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

			assert.deepEqual(result, ['Pear', 'Apple', 'Orange']);
		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsInRlc3QiLCJ3YXVrZXIiLCJBcnJheSIsIm1hcCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInZhbHVlIiwiZGVlcEVxdWFsIiwiUmFuZ2VFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7O0FBTUE7QUFDQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87O0FBRTFCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLDhEQUFWLEVBQTBFLFlBQU87O0FBRWhGSSxLQUFJLGdDQUFKLEVBQXNDLFlBQU87O0FBRTVDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVzs7QUFFVixRQUFJQyxPQUFPQyxPQUFRQyxLQUFSLEVBQWdCQyxHQUFoQixDQUFxQixVQUFVQyxXQUFWLEVBQXVCO0FBQ3RELFlBQU9BLFlBQVlDLElBQW5CO0FBQ0EsS0FGVSxDQUFYOztBQUlBLFdBQU9MLElBQVA7QUFDQSxJQVRXOztBQVdYTSxRQVhGOzs7QUFjQWxCLFVBQU9tQixTQUFQLENBQWtCWCxNQUFsQixFQUEwQixDQUFFLE9BQUYsQ0FBMUI7O0FBRUEsR0FsQkQ7O0FBb0JBLEVBdEJEOztBQXdCQUwsVUFBVSxtRUFBVixFQUErRSxZQUFPO0FBQ3JGSSxLQUFJLDhDQUFKLEVB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QWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVjtBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOztBQUVLLElBekJXOztBQTJCWE8sUUEzQkY7O0FBNkJBbEIsVUFBT21CLFNBQVAsQ0FBa0JYLE1BQWxCLEVBQTBCLENBQUUsTUFBRixFQUFVLE9BQVYsRUFBbUIsUUFBbkIsQ0FBMUI7QUFDQSxHQS9CRDtBQWdDQSxFQWpDRDs7QUFtQ0EsQ0FwTEQ7O0FBc0xBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJ3YXVrZXJcIixcblx0XHRcdFwicGF0aFwiOiBcIndhdWtlci90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvd2F1a2VyLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJ3YXVrZXJcIjogXCJ3YXVrZXJcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuZGVzY3JpYmUoIFwid2F1a2VyXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXHRcblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggQXJyYXkgKS5tYXAoICggY29uc3RydWN0b3IgKSA9PiBjb25zdHJ1Y3Rvci5uYW1lIClgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAnQXJyYXknIF1cIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSB3YXVrZXIoIEFycmF5ICkubWFwKCBmdW5jdGlvbiggY29uc3RydWN0b3IgKXtcblx0XHRcdFx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIFwiQXJyYXlcIiBdICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIFJhbmdlRXJyb3IgKS5tYXAoICggY29uc3RydWN0b3IgKSA9PiBjb25zdHJ1Y3Rvci5uYW1lIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ1JhbmdlRXJyb3InLCAnRXJyb3InIF1cIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSB3YXVrZXIoIFJhbmdlRXJyb3IgKS5tYXAoIGZ1bmN0aW9uKCBjb25zdHJ1Y3RvciApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyBcIlJhbmdlRXJyb3JcIiwgXCJFcnJvclwiIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7IHJldHVybiB3YXVrZXIoICk7IH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoICdoZWxsbycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBdXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXsgcmV0dXJuIHdhdWtlciggXCJoZWxsb1wiICk7IH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIDEyMyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIF1cIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApeyByZXR1cm4gd2F1a2VyKCAxMjMgKSB9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBdXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXsgcmV0dXJuIHdhdWtlciggeyB9ICkgfVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIFsgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggZnVuY3Rpb24oICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBdXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXsgcmV0dXJuIHdhdWtlciggZnVuY3Rpb24oICl7IH0gKSB9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCAoICkgPT4geyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0XHRcdHJldHVybiB3YXVrZXIoICggKSA9PiB7IH0gKVxuXHRcdFx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIFsgXSApO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggbmV3IFBlYXIoICkgKS5tYXAoICggY29uc3RydWN0b3IgKSA9PiBjb25zdHJ1Y3Rvci5uYW1lIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ1BlYXInLCAnQXBwbGUnLCAnT3JhbmdlJyBdXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0XHRcdGNsYXNzIE9yYW5nZSB7XG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgfVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNsYXNzIEFwcGxlIGV4dGVuZHMgT3JhbmdlIHtcblx0XHRcdFx0XHRcdGNvbnN0cnVjdG9yKCApeyBzdXBlciggKTsgfVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNsYXNzIFBlYXIgZXh0ZW5kcyBBcHBsZSB7XG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgc3VwZXIoICk7IH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHdhdWtlciggbmV3IFBlYXIoICkgKS5tYXAoIGZ1bmN0aW9uKCBjb25zdHJ1Y3RvciApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbICdQZWFyJywgJ0FwcGxlJywgJ09yYW5nZScgXSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
