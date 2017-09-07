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

var assert = require("should/as-function");





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsInRlc3QiLCJ3YXVrZXIiLCJBcnJheSIsIm1hcCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInZhbHVlIiwiZGVlcEVxdWFsIiwiUmFuZ2VFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7OztBQU1BO0FBQ0FFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsVUFBVSw4REFBVixFQUEwRSxZQUFPOztBQUVoRkksS0FBSSxnQ0FBSixFQUFzQyxZQUFPOztBQUU1QyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7O0FBRVYsUUFBSUMsT0FBT0MsT0FBUUMsS0FBUixFQUFnQkMsR0FBaEIsQ0FBcUIsVUFBVUMsV0FBVixFQUF1QjtBQUN0RCxZQUFPQSxZQUFZQyxJQUFuQjtBQUNBLEtBRlUsQ0FBWDs7QUFJQSxXQUFPTCxJQUFQO0FBQ0EsSUFUVzs7QUFXWE0sUUFYRjs7O0FBY0FsQixVQUFPbUIsU0FBUCxDQUFrQlgsTUFBbEIsRUFBMEIsQ0FBRSxPQUFGLENBQTFCOztBQUVBLEdBbEJEOztBQW9CQSxFQXRCRDs7QUF3QkFMLFVBQVUsbUVBQVYsRUFBK0UsWUFBTztBQUNyRkksS0FBSSw4Q0FBSixF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QUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixlQUFXO0FBQ1Y7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7QUFFSyxJQXpCVzs7QUEyQlhPLFFBM0JGOztBQTZCQWxCLFVBQU9tQixTQUFQLENBQWtCWCxNQUFsQixFQUEwQixDQUFFLE1BQUYsRUFBVSxPQUFWLEVBQW1CLFFBQW5CLENBQTFCO0FBQ0EsR0EvQkQ7QUFnQ0EsRUFqQ0Q7O0FBbUNBLENBcExEO0FBcUxBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJ3YXVrZXJcIixcblx0XHRcdFwicGF0aFwiOiBcIndhdWtlci90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvd2F1a2VyLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJ3YXVrZXJcIjogXCJ3YXVrZXJcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuZGVzY3JpYmUoIFwid2F1a2VyXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIEFycmF5ICkubWFwKCAoIGNvbnN0cnVjdG9yICkgPT4gY29uc3RydWN0b3IubmFtZSApYFwiLCAoICkgPT4ge1xuXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ0FycmF5JyBdXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gd2F1a2VyKCBBcnJheSApLm1hcCggZnVuY3Rpb24oIGNvbnN0cnVjdG9yICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY29uc3RydWN0b3IubmFtZTtcblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyBcIkFycmF5XCIgXSApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCBSYW5nZUVycm9yICkubWFwKCAoIGNvbnN0cnVjdG9yICkgPT4gY29uc3RydWN0b3IubmFtZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbICdSYW5nZUVycm9yJywgJ0Vycm9yJyBdXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gd2F1a2VyKCBSYW5nZUVycm9yICkubWFwKCBmdW5jdGlvbiggY29uc3RydWN0b3IgKXtcblx0XHRcdFx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIFsgXCJSYW5nZUVycm9yXCIsIFwiRXJyb3JcIiBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIF1cIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApeyByZXR1cm4gd2F1a2VyKCApOyB9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCAnaGVsbG8nIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7IHJldHVybiB3YXVrZXIoIFwiaGVsbG9cIiApOyB9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCAxMjMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBdXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXsgcmV0dXJuIHdhdWtlciggMTIzICkgfVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIFsgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7IHJldHVybiB3YXVrZXIoIHsgfSApIH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIGZ1bmN0aW9uKCApeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7IHJldHVybiB3YXVrZXIoIGZ1bmN0aW9uKCApeyB9ICkgfVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIFsgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggKCApID0+IHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIF1cIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdFx0XHRyZXR1cm4gd2F1a2VyKCAoICkgPT4geyB9IClcblx0XHRcdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIF0gKTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIG5ldyBQZWFyKCApICkubWFwKCAoIGNvbnN0cnVjdG9yICkgPT4gY29uc3RydWN0b3IubmFtZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbICdQZWFyJywgJ0FwcGxlJywgJ09yYW5nZScgXVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdFx0XHRjbGFzcyBPcmFuZ2Uge1xuXHRcdFx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjbGFzcyBBcHBsZSBleHRlbmRzIE9yYW5nZSB7XG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgc3VwZXIoICk7IH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjbGFzcyBQZWFyIGV4dGVuZHMgQXBwbGUge1xuXHRcdFx0XHRcdFx0Y29uc3RydWN0b3IoICl7IHN1cGVyKCApOyB9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSB3YXVrZXIoIG5ldyBQZWFyKCApICkubWFwKCBmdW5jdGlvbiggY29uc3RydWN0b3IgKXtcblx0XHRcdFx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyAnUGVhcicsICdBcHBsZScsICdPcmFuZ2UnIF0gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtYnJpZGdlXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
