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

var assert = require("should/as-function");



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

	describe("`wauker( new Pear( ) ).map( ( constructor ) => constructor.name )`", function () {
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

			assert.deepEqual(test, ['Pear', 'Apple', 'Orange']);
		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwid2F1a2VyIiwiZGVzY3JpYmUiLCJpdCIsInRlc3QiLCJBcnJheSIsIm1hcCIsImNvbnN0cnVjdG9yIiwibmFtZSIsImRlZXBFcXVhbCIsIlJhbmdlRXJyb3IiLCJPcmFuZ2UiLCJBcHBsZSIsIlBlYXIiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxxQkFBVCxDQUFmO0FBQ0E7Ozs7OztBQU1BO0FBQ0FFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQkEsVUFBVSw4REFBVixFQUEwRSxZQUFPO0FBQ2hGQyxLQUFJLGdDQUFKLEVBQXNDLFlBQU87O0FBRTVDLE9BQUlDLE9BQU9ILE9BQVFJLEtBQVIsRUFBZ0JDLEdBQWhCLENBQXFCLFVBQVVDLFdBQVYsRUFBdUI7QUFDdEQsV0FBT0EsWUFBWUMsSUFBbkI7QUFDQSxJQUZVLENBQVg7O0FBSUFULFVBQU9VLFNBQVAsQ0FBa0JMLElBQWxCLEVBQXdCLENBQUUsT0FBRixDQUF4Qjs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7QUFZQUYsVUFBVSxtRUFBVixFQUErRSxZQUFPO0FBQ3JGQyxLQUFJLDhDQUFKLEVBQW9ELFlBQU87O0FBRTFELE9BQUlDLE9BQU9ILE9BQVFTLFVBQVIsRUFBcUJKLEdBQXJCLENBQTBCLFVBQVVDLFdBQVYsRUFBdUI7QUFDM0QsV0FBT0EsWUFBWUMsSUFBbkI7QUFDQSxJQUZVLENBQVg7O0FBSUFULFVBQU9VLFNBQVAsQ0FBa0JMLElBQWxCLEVBQXdCLENBQUUsWUFBRixFQUFnQixPQUFoQixDQUF4Qjs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7QUFZQUYsVUFBVSxhQUFWLEVBQXlCLFlBQU87QUFDL0JDLEtBQUksd0JBQUosRUFBOEIsWUFBTztBQUNwQ0osVUFBT1UsU0FBUCxDQUFrQlIsUUFBbEIsRUFBNkIsRUFBN0I7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxxQkFBVixFQUFpQyxZQUFPO0FBQ3ZDQyxLQUFJLHdCQUFKLEVBQThCLFlBQU87QUFDcENKLFVBQU9VLFNBQVAsQ0FBa0JSLE9BQVEsT0FBUixDQUFsQixFQUFxQyxFQUFyQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLGlCQUFWLEVBQTZCLFlBQU87QUFDbkNDLEtBQUksd0JBQUosRUFBOEIsWUFBTztBQUNwQ0osVUFBT1UsU0FBUCxDQUFrQlIsT0FBUSxHQUFSLENBQWxCLEVBQWlDLEVBQWpDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsaUJBQVYsRUFBNkIsWUFBTztBQUNuQ0MsS0FBSSx3QkFBSixFQUE4QixZQUFPO0FBQ3BDSixVQUFPVSxTQUFQLENBQWtCUixPQUFRLEVBQVIsQ0FBbEIsRUFBaUMsRUFBakM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSw0QkFBVixFQUF3QyxZQUFPO0FBQzlDQyxLQUFJLHdCQUFKLEVBQThCLFlBQU87QUFDcENKLFVBQU9VLFNBQVAsQ0FBa0JSLE9BQVEsWUFBVyxDQUFHLENBQXRCLENBQWxCLEVBQTRDLEVBQTVDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsd0JBQVYsRUFBb0MsWUFBTztBQUMxQ0MsS0FBSSx3QkFBSixFQUE4QixZQUFPO0FBQ3BDSixVQUFPVSxTQUFQLENBQWtCUixPQUFRLFlBQU8sQ0FBRyxDQUFsQixDQUFsQixFQUF3QyxFQUF4QztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLG9FQUFWLEVBQWdGLFlBQU87QUFDdEZDLEtBQUksa0RBQUosRUFBd0QsWUFBTztBQUN4RFEsU0FEd0Q7QUFFN0QscUJBQWMsNkNBQUcsQ0FGNEM7OztBQUt4REMsUUFMd0Q7QUFNN0QscUJBQWMsd0tBQWEsQ0FOa0MsZUFLMUNELE1BTDBDOzs7QUFTeERFLE9BVHdEO0FBVTdELG9CQUFjLHFLQUFhLENBVmtDLGNBUzNDRCxLQVQyQzs7O0FBYTlELE9BQUlSLE9BQU9ILE9BQVEsSUFBSVksSUFBSixFQUFSLEVBQXNCUCxHQUF0QixDQUEyQixVQUFVQyxXQUFWLEVBQXVCO0FBQzVELFdBQU9BLFlBQVlDLElBQW5CO0FBQ0EsSUFGVSxDQUFYOztBQUlBVCxVQUFPVSxTQUFQLENBQWtCTCxJQUFsQixFQUF3QixDQUFFLE1BQUYsRUFBVSxPQUFWLEVBQW1CLFFBQW5CLENBQXhCO0FBQ0EsR0FsQkQ7QUFtQkEsRUFwQkQ7O0FBc0JBLENBcEZEO0FBcUZBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwid2F1a2VyXCIsXG5cdFx0XHRcInBhdGhcIjogXCJ3YXVrZXIvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3dhdWtlci5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwid2F1a2VyXCI6IFwid2F1a2VyXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCB3YXVrZXIgPSByZXF1aXJlKCBcIi4vd2F1a2VyLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5kZXNjcmliZSggXCJ3YXVrZXJcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCBBcnJheSApLm1hcCggKCBjb25zdHJ1Y3RvciApID0+IGNvbnN0cnVjdG9yLm5hbWUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAnQXJyYXknIF1cIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHRlc3QgPSB3YXVrZXIoIEFycmF5ICkubWFwKCBmdW5jdGlvbiggY29uc3RydWN0b3IgKXtcblx0XHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0XHR9ICk7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHRlc3QsIFsgXCJBcnJheVwiIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIFJhbmdlRXJyb3IgKS5tYXAoICggY29uc3RydWN0b3IgKSA9PiBjb25zdHJ1Y3Rvci5uYW1lIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ1JhbmdlRXJyb3InLCAnRXJyb3InIF1cIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHRlc3QgPSB3YXVrZXIoIFJhbmdlRXJyb3IgKS5tYXAoIGZ1bmN0aW9uKCBjb25zdHJ1Y3RvciApe1xuXHRcdFx0XHRyZXR1cm4gY29uc3RydWN0b3IubmFtZTtcblx0XHRcdH0gKTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggdGVzdCwgWyBcIlJhbmdlRXJyb3JcIiwgXCJFcnJvclwiIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggd2F1a2VyKCApLCBbIF0gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgd2F1a2VyKCAnaGVsbG8nIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggd2F1a2VyKCBcImhlbGxvXCIgKSwgWyBdICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggMTIzIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggd2F1a2VyKCAxMjMgKSwgWyBdICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgXVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggd2F1a2VyKCB7IH0gKSwgWyBdICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggZnVuY3Rpb24oICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBdXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3YXVrZXIoIGZ1bmN0aW9uKCApeyB9ICksIFsgXSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB3YXVrZXIoICggKSA9PiB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBdXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB3YXVrZXIoICggKSA9PiB7IH0gKSwgWyBdICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHdhdWtlciggbmV3IFBlYXIoICkgKS5tYXAoICggY29uc3RydWN0b3IgKSA9PiBjb25zdHJ1Y3Rvci5uYW1lIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ1BlYXInLCAnQXBwbGUnLCAnT3JhbmdlJyBdXCIsICggKSA9PiB7XG5cdFx0XHRjbGFzcyBPcmFuZ2Uge1xuXHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgfVxuXHRcdFx0fVxuXG5cdFx0XHRjbGFzcyBBcHBsZSBleHRlbmRzIE9yYW5nZSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApeyBzdXBlciggKTsgfVxuXHRcdFx0fVxuXG5cdFx0XHRjbGFzcyBQZWFyIGV4dGVuZHMgQXBwbGUge1xuXHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgc3VwZXIoICk7IH1cblx0XHRcdH1cblxuXHRcdFx0bGV0IHRlc3QgPSB3YXVrZXIoIG5ldyBQZWFyKCApICkubWFwKCBmdW5jdGlvbiggY29uc3RydWN0b3IgKXtcblx0XHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0XHR9ICk7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHRlc3QsIFsgJ1BlYXInLCAnQXBwbGUnLCAnT3JhbmdlJyBdICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
