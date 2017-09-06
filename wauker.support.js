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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"fname": "fname"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var een = require("een");
var falzy = require("falzy");
var fname = require("fname");

var FUNCTION_CLASS = "Function";
var OBJECT_CLASS = "Object";

var wauker = function wauker(entity) {
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

	var constructor = entity;
	if ((typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == "object") {
		constructor = entity.constructor;
	}

	var name = fname(constructor);
	if (
	falzy(constructor) ||
	falzy(name) ||
	typeof constructor != "function" ||
	name === FUNCTION_CLASS ||
	name === OBJECT_CLASS)
	{
		return [];
	}

	var tree = [constructor];
	var prototype = constructor.prototype;
	while (prototype = (0, _getPrototypeOf2.default)(prototype)) {
		/*;
                                                               	@note:
                                                               		Discard root of the chain.
                                                               		The root of the chain can be the Function or Object class.
                                                               	@end-note
                                                               */
		constructor = prototype.constructor;
		var _name = fname(constructor);
		if (
		falzy(_name) ||
		_name === FUNCTION_CLASS ||
		_name === OBJECT_CLASS)
		{
			continue;
		}

		if (!een(tree, constructor)) {
			tree.push(constructor);
		}
	}

	return tree;
};

module.exports = wauker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdWtlci5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImVlbiIsInJlcXVpcmUiLCJmYWx6eSIsImZuYW1lIiwiRlVOQ1RJT05fQ0xBU1MiLCJPQkpFQ1RfQ0xBU1MiLCJ3YXVrZXIiLCJlbnRpdHkiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0cmVlIiwicHJvdG90eXBlIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REEsSUFBTUEsTUFBTUMsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1HLGlCQUFpQixVQUF2QjtBQUNBLElBQU1DLGVBQWUsUUFBckI7O0FBRUEsSUFBTUMsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUN2Qzs7Ozs7Ozs7Ozs7QUFXQSxLQUFJQyxjQUFjRCxNQUFsQjtBQUNBLEtBQUksUUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUFyQixFQUErQjtBQUM5QkMsZ0JBQWNELE9BQU9DLFdBQXJCO0FBQ0E7O0FBRUQsS0FBSUMsT0FBT04sTUFBT0ssV0FBUCxDQUFYO0FBQ0E7QUFDQ04sT0FBT00sV0FBUDtBQUNHTixPQUFPTyxJQUFQLENBREg7QUFFRyxRQUFPRCxXQUFQLElBQXNCLFVBRnpCO0FBR0dDLFVBQVNMLGNBSFo7QUFJR0ssVUFBU0osWUFMYjtBQU1DO0FBQ0EsU0FBTyxFQUFQO0FBQ0E7O0FBRUQsS0FBSUssT0FBTyxDQUFFRixXQUFGLENBQVg7QUFDQSxLQUFJRyxZQUFZSCxZQUFZRyxTQUE1QjtBQUNBLFFBQU9BLFlBQVksOEJBQXVCQSxTQUF2QixDQUFuQixFQUF1RDtBQUN0RDs7Ozs7O0FBTUFILGdCQUFjRyxVQUFVSCxXQUF4QjtBQUNBLE1BQUlDLFFBQU9OLE1BQU9LLFdBQVAsQ0FBWDtBQUNBO0FBQ0NOLFFBQU9PLEtBQVA7QUFDR0EsWUFBU0wsY0FEWjtBQUVHSyxZQUFTSixZQUhiO0FBSUM7QUFDQTtBQUNBOztBQUVELE1BQUksQ0FBQ0wsSUFBS1UsSUFBTCxFQUFXRixXQUFYLENBQUwsRUFBK0I7QUFDOUJFLFFBQUtFLElBQUwsQ0FBV0osV0FBWDtBQUNBO0FBQ0Q7O0FBRUQsUUFBT0UsSUFBUDtBQUNBLENBckREOztBQXVEQUcsT0FBT0MsT0FBUCxHQUFpQlIsTUFBakIiLCJmaWxlIjoid2F1a2VyLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIndhdWtlclwiLFxuXHRcdFx0XCJwYXRoXCI6IFwid2F1a2VyL3dhdWtlci5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwid2F1a2VyLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIndhdWtlclwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvd2F1a2VyLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwid2F1a2VyLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0V2Fsa3MgdGhlIGluaGVyaXRhbmNlIHRyZWUuXG5cblx0XHRUaGlzIHdpbGwgcmV0dXJuIGEgbGlzdCBvZiBpbmhlcml0ZWQgY29uc3RydWN0b3JzLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJlZW5cIjogXCJlZW5cIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJmbmFtZVwiOiBcImZuYW1lXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZWVuID0gcmVxdWlyZSggXCJlZW5cIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZuYW1lID0gcmVxdWlyZSggXCJmbmFtZVwiICk7XG5cbmNvbnN0IEZVTkNUSU9OX0NMQVNTID0gXCJGdW5jdGlvblwiO1xuY29uc3QgT0JKRUNUX0NMQVNTID0gXCJPYmplY3RcIjtcblxuY29uc3Qgd2F1a2VyID0gZnVuY3Rpb24gd2F1a2VyKCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwib2JqZWN0XCIsXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGxldCBjb25zdHJ1Y3RvciA9IGVudGl0eTtcblx0aWYoIHR5cGVvZiBlbnRpdHkgPT0gXCJvYmplY3RcIiApe1xuXHRcdGNvbnN0cnVjdG9yID0gZW50aXR5LmNvbnN0cnVjdG9yO1xuXHR9XG5cblx0bGV0IG5hbWUgPSBmbmFtZSggY29uc3RydWN0b3IgKTtcblx0aWYoXG5cdFx0ZmFsenkoIGNvbnN0cnVjdG9yIClcblx0XHR8fCBmYWx6eSggbmFtZSApXG5cdFx0fHwgdHlwZW9mIGNvbnN0cnVjdG9yICE9IFwiZnVuY3Rpb25cIlxuXHRcdHx8IG5hbWUgPT09IEZVTkNUSU9OX0NMQVNTXG5cdFx0fHwgbmFtZSA9PT0gT0JKRUNUX0NMQVNTXG5cdCl7XG5cdFx0cmV0dXJuIFsgXTtcblx0fVxuXG5cdGxldCB0cmVlID0gWyBjb25zdHJ1Y3RvciBdO1xuXHRsZXQgcHJvdG90eXBlID0gY29uc3RydWN0b3IucHJvdG90eXBlO1xuXHR3aGlsZSggcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBwcm90b3R5cGUgKSApe1xuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdERpc2NhcmQgcm9vdCBvZiB0aGUgY2hhaW4uXG5cdFx0XHRcdFRoZSByb290IG9mIHRoZSBjaGFpbiBjYW4gYmUgdGhlIEZ1bmN0aW9uIG9yIE9iamVjdCBjbGFzcy5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0Y29uc3RydWN0b3IgPSBwcm90b3R5cGUuY29uc3RydWN0b3I7XG5cdFx0bGV0IG5hbWUgPSBmbmFtZSggY29uc3RydWN0b3IgKTtcblx0XHRpZihcblx0XHRcdGZhbHp5KCBuYW1lIClcblx0XHRcdHx8IG5hbWUgPT09IEZVTkNUSU9OX0NMQVNTXG5cdFx0XHR8fCBuYW1lID09PSBPQkpFQ1RfQ0xBU1Ncblx0XHQpe1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYoICFlZW4oIHRyZWUsIGNvbnN0cnVjdG9yICkgKXtcblx0XHRcdHRyZWUucHVzaCggY29uc3RydWN0b3IgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdHJlZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gd2F1a2VyO1xuIl19
//# sourceMappingURL=wauker.support.js.map
