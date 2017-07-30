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
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var wauker = require("./wauker.support.js");
//: @end-client





//: @client:

describe("wauker", function () {

	describe("`wauker( Array ).map( ( constructor ) => constructor.name )`", function () {

		it("should be equal to [ 'Array' ]", function () {

			var test = wauker(Array).map(function (constructor) {
				return constructor.name;
			});

			assert.deepEqual(test, ["Array"]);

		});

	});

	describe("`wauker( RangeError ).map( ( constructor ) => constructor.name )`", function () {
		it("should be equal to [ 'RangeError', 'Error' ]", function () {

			var test = wauker(RangeError).map(function (constructor) {
				return constructor.name;
			});

			assert.deepEqual(test, ["RangeError", "Error"]);

		});
	});


	describe("`wauker( Pear ).map( ( constructor ) => constructor.name )`", function () {
		it("should be equal to [ 'Pear', 'Apple', 'Orange' ]", function () {var

			Orange =
			function Orange() {(0, _classCallCheck3.default)(this, Orange);};var


			Apple = function (_Orange) {(0, _inherits3.default)(Apple, _Orange);
				function Apple() {(0, _classCallCheck3.default)(this, Apple);return (0, _possibleConstructorReturn3.default)(this, (Apple.__proto__ || (0, _getPrototypeOf2.default)(Apple)).call(this));}return Apple;}(Orange);var


			Pear = function (_Apple) {(0, _inherits3.default)(Pear, _Apple);
				function Pear() {(0, _classCallCheck3.default)(this, Pear);return (0, _possibleConstructorReturn3.default)(this, (Pear.__proto__ || (0, _getPrototypeOf2.default)(Pear)).call(this));}return Pear;}(Apple);


			var test = wauker(new Pear()).map(function (constructor) {
				return constructor.name;
			});

			/* @note
       		Test result has change from [ 'Pear', 'Apple', 'Orange' ]
       	to [ "Pear", "Orange" ]
       @note */


			assert.deepEqual(test, ['Pear', 'Apple', 'Orange']);

		});
	});

	describe("`wauker( )`", function () {
		it("should be equal to [ ]", function () {
			assert.deepEqual(wauker(), []);
		});
	});

	describe("`wauker( 'hello' )`", function () {
		it("should be equal to [ ]", function () {
			assert.deepEqual(wauker("hello"), []);
		});
	});

	describe("`wauker( 123 )`", function () {
		it("should be equal to [ ]", function () {
			assert.deepEqual(wauker(123), []);
		});
	});

	describe("`wauker( { } )`", function () {
		it("should be equal to [ ]", function () {
			assert.deepEqual(wauker({}), []);
		});
	});

	describe("`wauker( function( ){ } )`", function () {
		it("should be equal to [ ]", function () {
			assert.deepEqual(wauker(function () {}), []);
		});
	});

	describe("`wauker( ( ) => { } )`", function () {
		it("should be equal to [ ]", function () {
			assert.deepEqual(wauker(function () {}), []);
		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwid2F1a2VyIiwiZGVzY3JpYmUiLCJpdCIsInRlc3QiLCJBcnJheSIsIm1hcCIsImNvbnN0cnVjdG9yIiwibmFtZSIsImRlZXBFcXVhbCIsIlJhbmdlRXJyb3IiLCJPcmFuZ2UiLCJBcHBsZSIsIlBlYXIiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLHFCQUFULENBQWY7QUFDQTs7Ozs7O0FBTUE7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQkEsVUFBVSw4REFBVixFQUEwRSxZQUFPOztBQUVoRkMsS0FBSSxnQ0FBSixFQUFzQyxZQUFPOztBQUU1QyxPQUFJQyxPQUFPSCxPQUFRSSxLQUFSLEVBQWdCQyxHQUFoQixDQUFxQixVQUFVQyxXQUFWLEVBQXVCO0FBQ3RELFdBQU9BLFlBQVlDLElBQW5CO0FBQ0EsSUFGVSxDQUFYOztBQUlBVCxVQUFPVSxTQUFQLENBQWtCTCxJQUFsQixFQUF3QixDQUFFLE9BQUYsQ0FBeEI7O0FBRUEsR0FSRDs7QUFVQSxFQVpEOztBQWNBRixVQUFVLG1FQUFWLEVBQStFLFlBQU87QUFDckZDLEtBQUksOENBQUosRUFBb0QsWUFBTzs7QUFFMUQsT0FBSUMsT0FBT0gsT0FBUVMsVUFBUixFQUFxQkosR0FBckIsQ0FBMEIsVUFBVUMsV0FBVixFQUF1QjtBQUMzRCxXQUFPQSxZQUFZQyxJQUFuQjtBQUNBLElBRlUsQ0FBWDs7QUFJQVQsVUFBT1UsU0FBUCxDQUFrQkwsSUFBbEIsRUFBd0IsQ0FBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXhCOztBQUVBLEdBUkQ7QUFTQSxFQVZEOzs7QUFhQUYsVUFBVSw2REFBVixFQUF5RSxZQUFPO0FBQy9FQyxLQUFJLGtEQUFKLEVBQXdELFlBQU87O0FBRXhEUSxTQUZ3RDtBQUc3RCxxQkFBYyw2Q0FBRyxDQUg0Qzs7O0FBTXhEQyxRQU53RDtBQU83RCxxQkFBYyx3S0FBYSxDQVBrQyxlQU0xQ0QsTUFOMEM7OztBQVV4REUsT0FWd0Q7QUFXN0Qsb0JBQWMscUtBQWEsQ0FYa0MsY0FVM0NELEtBVjJDOzs7QUFjOUQsT0FBSVIsT0FBT0gsT0FBUSxJQUFJWSxJQUFKLEVBQVIsRUFBc0JQLEdBQXRCLENBQTJCLFVBQVVDLFdBQVYsRUFBdUI7QUFDNUQsV0FBT0EsWUFBWUMsSUFBbkI7QUFDQSxJQUZVLENBQVg7O0FBSUE7Ozs7OztBQU1BVCxVQUFPVSxTQUFQLENBQWtCTCxJQUFsQixFQUF3QixDQUFFLE1BQUYsRUFBVSxPQUFWLEVBQW1CLFFBQW5CLENBQXhCOztBQUVBLEdBMUJEO0FBMkJBLEVBNUJEOztBQThCQUYsVUFBVSxhQUFWLEVBQXlCLFlBQU87QUFDL0JDLEtBQUksd0JBQUosRUFBOEIsWUFBTztBQUNwQ0osVUFBT1UsU0FBUCxDQUFrQlIsUUFBbEIsRUFBNkIsRUFBN0I7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxxQkFBVixFQUFpQyxZQUFPO0FBQ3ZDQyxLQUFJLHdCQUFKLEVBQThCLFlBQU87QUFDcENKLFVBQU9VLFNBQVAsQ0FBa0JSLE9BQVEsT0FBUixDQUFsQixFQUFxQyxFQUFyQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLGlCQUFWLEVBQTZCLFlBQU87QUFDbkNDLEtBQUksd0JBQUosRUFBOEIsWUFBTztBQUNwQ0osVUFBT1UsU0FBUCxDQUFrQlIsT0FBUSxHQUFSLENBQWxCLEVBQWlDLEVBQWpDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsaUJBQVYsRUFBNkIsWUFBTztBQUNuQ0MsS0FBSSx3QkFBSixFQUE4QixZQUFPO0FBQ3BDSixVQUFPVSxTQUFQLENBQWtCUixPQUFRLEVBQVIsQ0FBbEIsRUFBaUMsRUFBakM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSw0QkFBVixFQUF3QyxZQUFPO0FBQzlDQyxLQUFJLHdCQUFKLEVBQThCLFlBQU87QUFDcENKLFVBQU9VLFNBQVAsQ0FBa0JSLE9BQVEsWUFBVyxDQUFHLENBQXRCLENBQWxCLEVBQTRDLEVBQTVDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsd0JBQVYsRUFBb0MsWUFBTztBQUMxQ0MsS0FBSSx3QkFBSixFQUE4QixZQUFPO0FBQ3BDSixVQUFPVSxTQUFQLENBQWtCUixPQUFRLFlBQU8sQ0FBRyxDQUFsQixDQUFsQixFQUF3QyxFQUF4QztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BLENBL0ZEOztBQWlHQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIndhdWtlclwiLFxuXHRcdFx0XCJwYXRoXCI6IFwid2F1a2VyL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy93YXVrZXIuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcIndhdWtlclwiOiBcIndhdWtlclwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3Qgd2F1a2VyID0gcmVxdWlyZSggXCIuL3dhdWtlci5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJ3YXVrZXJcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCBBcnJheSApLm1hcCggKCBjb25zdHJ1Y3RvciApID0+IGNvbnN0cnVjdG9yLm5hbWUgKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbICdBcnJheScgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgdGVzdCA9IHdhdWtlciggQXJyYXkgKS5tYXAoIGZ1bmN0aW9uKCBjb25zdHJ1Y3RvciApe1xuXHRcdFx0XHRyZXR1cm4gY29uc3RydWN0b3IubmFtZTtcblx0XHRcdH0gKTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggdGVzdCwgWyBcIkFycmF5XCIgXSApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCBSYW5nZUVycm9yICkubWFwKCAoIGNvbnN0cnVjdG9yICkgPT4gY29uc3RydWN0b3IubmFtZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbICdSYW5nZUVycm9yJywgJ0Vycm9yJyBdXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0gd2F1a2VyKCBSYW5nZUVycm9yICkubWFwKCBmdW5jdGlvbiggY29uc3RydWN0b3IgKXtcblx0XHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0XHR9ICk7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHRlc3QsIFsgXCJSYW5nZUVycm9yXCIsIFwiRXJyb3JcIiBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIFBlYXIgKS5tYXAoICggY29uc3RydWN0b3IgKSA9PiBjb25zdHJ1Y3Rvci5uYW1lIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ1BlYXInLCAnQXBwbGUnLCAnT3JhbmdlJyBdXCIsICggKSA9PiB7XG5cblx0XHRcdGNsYXNzIE9yYW5nZSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApeyB9XG5cdFx0XHR9XG5cblx0XHRcdGNsYXNzIEFwcGxlIGV4dGVuZHMgT3JhbmdlIHtcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IHN1cGVyKCApOyB9XG5cdFx0XHR9XG5cblx0XHRcdGNsYXNzIFBlYXIgZXh0ZW5kcyBBcHBsZSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApeyBzdXBlciggKTsgfVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdGVzdCA9IHdhdWtlciggbmV3IFBlYXIoICkgKS5tYXAoIGZ1bmN0aW9uKCBjb25zdHJ1Y3RvciApe1xuXHRcdFx0XHRyZXR1cm4gY29uc3RydWN0b3IubmFtZTtcblx0XHRcdH0gKTtcblxuXHRcdFx0LyogQG5vdGVcblxuXHRcdFx0XHRUZXN0IHJlc3VsdCBoYXMgY2hhbmdlIGZyb20gWyAnUGVhcicsICdBcHBsZScsICdPcmFuZ2UnIF1cblx0XHRcdFx0dG8gWyBcIlBlYXJcIiwgXCJPcmFuZ2VcIiBdXG5cdFx0XHRAbm90ZSAqL1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB0ZXN0LCBbICdQZWFyJywgJ0FwcGxlJywgJ09yYW5nZScgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBdXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3YXVrZXIoICksIFsgXSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoICdoZWxsbycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBdXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3YXVrZXIoIFwiaGVsbG9cIiApLCBbIF0gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCAxMjMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBdXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3YXVrZXIoIDEyMyApLCBbIF0gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBdXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3YXVrZXIoIHsgfSApLCBbIF0gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCBmdW5jdGlvbiggKXsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIF1cIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdhdWtlciggZnVuY3Rpb24oICl7IH0gKSwgWyBdICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggKCApID0+IHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIF1cIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdhdWtlciggKCApID0+IHsgfSApLCBbIF0gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
