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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwid2F1a2VyIiwiZGVzY3JpYmUiLCJpdCIsInRlc3QiLCJBcnJheSIsIm1hcCIsImNvbnN0cnVjdG9yIiwibmFtZSIsImRlZXBFcXVhbCIsIlJhbmdlRXJyb3IiLCJPcmFuZ2UiLCJBcHBsZSIsIlBlYXIiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLHFCQUFULENBQWY7QUFDQTs7Ozs7O0FBTUE7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQkEsVUFBVSw4REFBVixFQUEwRSxZQUFPOztBQUVoRkMsS0FBSSxnQ0FBSixFQUFzQyxZQUFPOztBQUU1QyxPQUFJQyxPQUFPSCxPQUFRSSxLQUFSLEVBQWdCQyxHQUFoQixDQUFxQixVQUFVQyxXQUFWLEVBQXVCO0FBQ3RELFdBQU9BLFlBQVlDLElBQW5CO0FBQ0EsSUFGVSxDQUFYOztBQUlBVCxVQUFPVSxTQUFQLENBQWtCTCxJQUFsQixFQUF3QixDQUFFLE9BQUYsQ0FBeEI7O0FBRUEsR0FSRDs7QUFVQSxFQVpEOztBQWNBRixVQUFVLG1FQUFWLEVBQStFLFlBQU87QUFDckZDLEtBQUksOENBQUosRUFBb0QsWUFBTzs7QUFFMUQsT0FBSUMsT0FBT0gsT0FBUVMsVUFBUixFQUFxQkosR0FBckIsQ0FBMEIsVUFBVUMsV0FBVixFQUF1QjtBQUMzRCxXQUFPQSxZQUFZQyxJQUFuQjtBQUNBLElBRlUsQ0FBWDs7QUFJQVQsVUFBT1UsU0FBUCxDQUFrQkwsSUFBbEIsRUFBd0IsQ0FBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXhCOztBQUVBLEdBUkQ7QUFTQSxFQVZEOzs7QUFhQUYsVUFBVSw2REFBVixFQUF5RSxZQUFPO0FBQy9FQyxLQUFJLGtEQUFKLEVBQXdELFlBQU87O0FBRXhEUSxTQUZ3RDtBQUc3RCxxQkFBYyw2Q0FBRyxDQUg0Qzs7O0FBTXhEQyxRQU53RDtBQU83RCxxQkFBYyx3S0FBYSxDQVBrQyxlQU0xQ0QsTUFOMEM7OztBQVV4REUsT0FWd0Q7QUFXN0Qsb0JBQWMscUtBQWEsQ0FYa0MsY0FVM0NELEtBVjJDOzs7QUFjOUQsT0FBSVIsT0FBT0gsT0FBUSxJQUFJWSxJQUFKLEVBQVIsRUFBc0JQLEdBQXRCLENBQTJCLFVBQVVDLFdBQVYsRUFBdUI7QUFDNUQsV0FBT0EsWUFBWUMsSUFBbkI7QUFDQSxJQUZVLENBQVg7O0FBSUE7Ozs7OztBQU1BVCxVQUFPVSxTQUFQLENBQWtCTCxJQUFsQixFQUF3QixDQUFFLE1BQUYsRUFBVSxPQUFWLEVBQW1CLFFBQW5CLENBQXhCOztBQUVBLEdBMUJEO0FBMkJBLEVBNUJEOztBQThCQUYsVUFBVSxhQUFWLEVBQXlCLFlBQU87QUFDL0JDLEtBQUksd0JBQUosRUFBOEIsWUFBTztBQUNwQ0osVUFBT1UsU0FBUCxDQUFrQlIsUUFBbEIsRUFBNkIsRUFBN0I7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxxQkFBVixFQUFpQyxZQUFPO0FBQ3ZDQyxLQUFJLHdCQUFKLEVBQThCLFlBQU87QUFDcENKLFVBQU9VLFNBQVAsQ0FBa0JSLE9BQVEsT0FBUixDQUFsQixFQUFxQyxFQUFyQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLGlCQUFWLEVBQTZCLFlBQU87QUFDbkNDLEtBQUksd0JBQUosRUFBOEIsWUFBTztBQUNwQ0osVUFBT1UsU0FBUCxDQUFrQlIsT0FBUSxHQUFSLENBQWxCLEVBQWlDLEVBQWpDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsaUJBQVYsRUFBNkIsWUFBTztBQUNuQ0MsS0FBSSx3QkFBSixFQUE4QixZQUFPO0FBQ3BDSixVQUFPVSxTQUFQLENBQWtCUixPQUFRLEVBQVIsQ0FBbEIsRUFBaUMsRUFBakM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSw0QkFBVixFQUF3QyxZQUFPO0FBQzlDQyxLQUFJLHdCQUFKLEVBQThCLFlBQU87QUFDcENKLFVBQU9VLFNBQVAsQ0FBa0JSLE9BQVEsWUFBVyxDQUFHLENBQXRCLENBQWxCLEVBQTRDLEVBQTVDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsd0JBQVYsRUFBb0MsWUFBTztBQUMxQ0MsS0FBSSx3QkFBSixFQUE4QixZQUFPO0FBQ3BDSixVQUFPVSxTQUFQLENBQWtCUixPQUFRLFlBQU8sQ0FBRyxDQUFsQixDQUFsQixFQUF3QyxFQUF4QztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BLENBL0ZEOztBQWlHQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwid2F1a2VyXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcIndhdWtlci90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvd2F1a2VyLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwid2F1a2VyXCI6IFwid2F1a2VyXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcbmNvbnN0IHdhdWtlciA9IHJlcXVpcmUoIFwiLi93YXVrZXIuc3VwcG9ydC5qc1wiICk7XHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5cclxuZGVzY3JpYmUoIFwid2F1a2VyXCIsICggKSA9PiB7XHJcblxyXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIEFycmF5ICkubWFwKCAoIGNvbnN0cnVjdG9yICkgPT4gY29uc3RydWN0b3IubmFtZSApYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbICdBcnJheScgXVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHRlc3QgPSB3YXVrZXIoIEFycmF5ICkubWFwKCBmdW5jdGlvbiggY29uc3RydWN0b3IgKXtcclxuXHRcdFx0XHRyZXR1cm4gY29uc3RydWN0b3IubmFtZTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggdGVzdCwgWyBcIkFycmF5XCIgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCBSYW5nZUVycm9yICkubWFwKCAoIGNvbnN0cnVjdG9yICkgPT4gY29uc3RydWN0b3IubmFtZSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ1JhbmdlRXJyb3InLCAnRXJyb3InIF1cIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGxldCB0ZXN0ID0gd2F1a2VyKCBSYW5nZUVycm9yICkubWFwKCBmdW5jdGlvbiggY29uc3RydWN0b3IgKXtcclxuXHRcdFx0XHRyZXR1cm4gY29uc3RydWN0b3IubmFtZTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggdGVzdCwgWyBcIlJhbmdlRXJyb3JcIiwgXCJFcnJvclwiIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggUGVhciApLm1hcCggKCBjb25zdHJ1Y3RvciApID0+IGNvbnN0cnVjdG9yLm5hbWUgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbICdQZWFyJywgJ0FwcGxlJywgJ09yYW5nZScgXVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0Y2xhc3MgT3JhbmdlIHtcclxuXHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgfVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjbGFzcyBBcHBsZSBleHRlbmRzIE9yYW5nZSB7XHJcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IHN1cGVyKCApOyB9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNsYXNzIFBlYXIgZXh0ZW5kcyBBcHBsZSB7XHJcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IHN1cGVyKCApOyB9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCB0ZXN0ID0gd2F1a2VyKCBuZXcgUGVhciggKSApLm1hcCggZnVuY3Rpb24oIGNvbnN0cnVjdG9yICl7XHJcblx0XHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yLm5hbWU7XHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdC8qIEBub3RlXHJcblxyXG5cdFx0XHRcdFRlc3QgcmVzdWx0IGhhcyBjaGFuZ2UgZnJvbSBbICdQZWFyJywgJ0FwcGxlJywgJ09yYW5nZScgXVxyXG5cdFx0XHRcdHRvIFsgXCJQZWFyXCIsIFwiT3JhbmdlXCIgXVxyXG5cdFx0XHRAbm90ZSAqL1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggdGVzdCwgWyAnUGVhcicsICdBcHBsZScsICdPcmFuZ2UnIF0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3YXVrZXIoICksIFsgXSApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggJ2hlbGxvJyApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3YXVrZXIoIFwiaGVsbG9cIiApLCBbIF0gKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIDEyMyApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3YXVrZXIoIDEyMyApLCBbIF0gKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIHsgfSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3YXVrZXIoIHsgfSApLCBbIF0gKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIGZ1bmN0aW9uKCApeyB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBdXCIsICggKSA9PiB7XHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdhdWtlciggZnVuY3Rpb24oICl7IH0gKSwgWyBdICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCAoICkgPT4geyB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBdXCIsICggKSA9PiB7XHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHdhdWtlciggKCApID0+IHsgfSApLCBbIF0gKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG59ICk7XHJcblxyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG4iXX0=
//# sourceMappingURL=test.support.js.map
