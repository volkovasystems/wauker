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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdWtlci5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImVlbiIsInJlcXVpcmUiLCJmYWx6eSIsImZuYW1lIiwiRlVOQ1RJT05fQ0xBU1MiLCJPQkpFQ1RfQ0xBU1MiLCJ3YXVrZXIiLCJlbnRpdHkiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0cmVlIiwicHJvdG90eXBlIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REEsSUFBTUEsTUFBTUMsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1HLGlCQUFpQixVQUF2QjtBQUNBLElBQU1DLGVBQWUsUUFBckI7O0FBRUEsSUFBTUMsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUN2Qzs7Ozs7Ozs7Ozs7QUFXQSxLQUFJQyxjQUFjRCxNQUFsQjtBQUNBLEtBQUksUUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUFyQixFQUErQjtBQUM5QkMsZ0JBQWNELE9BQU9DLFdBQXJCO0FBQ0E7O0FBRUQsS0FBSUMsT0FBT04sTUFBT0ssV0FBUCxDQUFYO0FBQ0E7QUFDQ04sT0FBT00sV0FBUDtBQUNHTixPQUFPTyxJQUFQLENBREg7QUFFRyxRQUFPRCxXQUFQLElBQXNCLFVBRnpCO0FBR0dDLFVBQVNMLGNBSFo7QUFJR0ssVUFBU0osWUFMYjtBQU1DO0FBQ0EsU0FBTyxFQUFQO0FBQ0E7O0FBRUQsS0FBSUssT0FBTyxDQUFFRixXQUFGLENBQVg7QUFDQSxLQUFJRyxZQUFZSCxZQUFZRyxTQUE1QjtBQUNBLFFBQU9BLFlBQVksOEJBQXVCQSxTQUF2QixDQUFuQixFQUF1RDtBQUN0RDs7Ozs7O0FBTUFILGdCQUFjRyxVQUFVSCxXQUF4QjtBQUNBLE1BQUlDLFFBQU9OLE1BQU9LLFdBQVAsQ0FBWDtBQUNBO0FBQ0NOLFFBQU9PLEtBQVA7QUFDR0EsWUFBU0wsY0FEWjtBQUVHSyxZQUFTSixZQUhiO0FBSUM7QUFDQTtBQUNBOztBQUVELE1BQUksQ0FBQ0wsSUFBS1UsSUFBTCxFQUFXRixXQUFYLENBQUwsRUFBK0I7QUFDOUJFLFFBQUtFLElBQUwsQ0FBV0osV0FBWDtBQUNBO0FBQ0Q7O0FBRUQsUUFBT0UsSUFBUDtBQUNBLENBckREOztBQXVEQUcsT0FBT0MsT0FBUCxHQUFpQlIsTUFBakIiLCJmaWxlIjoid2F1a2VyLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwid2F1a2VyXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcIndhdWtlci93YXVrZXIuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwid2F1a2VyLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwid2F1a2VyXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3dhdWtlci5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwid2F1a2VyLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0V2Fsa3MgdGhlIGluaGVyaXRhbmNlIHRyZWUuXHJcblxyXG5cdFx0VGhpcyB3aWxsIHJldHVybiBhIGxpc3Qgb2YgaW5oZXJpdGVkIGNvbnN0cnVjdG9ycy5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImVlblwiOiBcImVlblwiLFxyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcclxuXHRcdFx0XCJmbmFtZVwiOiBcImZuYW1lXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGVlbiA9IHJlcXVpcmUoIFwiZWVuXCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QgZm5hbWUgPSByZXF1aXJlKCBcImZuYW1lXCIgKTtcclxuXHJcbmNvbnN0IEZVTkNUSU9OX0NMQVNTID0gXCJGdW5jdGlvblwiO1xyXG5jb25zdCBPQkpFQ1RfQ0xBU1MgPSBcIk9iamVjdFwiO1xyXG5cclxuY29uc3Qgd2F1a2VyID0gZnVuY3Rpb24gd2F1a2VyKCBlbnRpdHkgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcIm9iamVjdFwiLFxyXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGxldCBjb25zdHJ1Y3RvciA9IGVudGl0eTtcclxuXHRpZiggdHlwZW9mIGVudGl0eSA9PSBcIm9iamVjdFwiICl7XHJcblx0XHRjb25zdHJ1Y3RvciA9IGVudGl0eS5jb25zdHJ1Y3RvcjtcclxuXHR9XHJcblxyXG5cdGxldCBuYW1lID0gZm5hbWUoIGNvbnN0cnVjdG9yICk7XHJcblx0aWYoXHJcblx0XHRmYWx6eSggY29uc3RydWN0b3IgKVxyXG5cdFx0fHwgZmFsenkoIG5hbWUgKVxyXG5cdFx0fHwgdHlwZW9mIGNvbnN0cnVjdG9yICE9IFwiZnVuY3Rpb25cIlxyXG5cdFx0fHwgbmFtZSA9PT0gRlVOQ1RJT05fQ0xBU1NcclxuXHRcdHx8IG5hbWUgPT09IE9CSkVDVF9DTEFTU1xyXG5cdCl7XHJcblx0XHRyZXR1cm4gWyBdO1xyXG5cdH1cclxuXHJcblx0bGV0IHRyZWUgPSBbIGNvbnN0cnVjdG9yIF07XHJcblx0bGV0IHByb3RvdHlwZSA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcclxuXHR3aGlsZSggcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBwcm90b3R5cGUgKSApe1xyXG5cdFx0Lyo7XHJcblx0XHRcdEBub3RlOlxyXG5cdFx0XHRcdERpc2NhcmQgcm9vdCBvZiB0aGUgY2hhaW4uXHJcblx0XHRcdFx0VGhlIHJvb3Qgb2YgdGhlIGNoYWluIGNhbiBiZSB0aGUgRnVuY3Rpb24gb3IgT2JqZWN0IGNsYXNzLlxyXG5cdFx0XHRAZW5kLW5vdGVcclxuXHRcdCovXHJcblx0XHRjb25zdHJ1Y3RvciA9IHByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcclxuXHRcdGxldCBuYW1lID0gZm5hbWUoIGNvbnN0cnVjdG9yICk7XHJcblx0XHRpZihcclxuXHRcdFx0ZmFsenkoIG5hbWUgKVxyXG5cdFx0XHR8fCBuYW1lID09PSBGVU5DVElPTl9DTEFTU1xyXG5cdFx0XHR8fCBuYW1lID09PSBPQkpFQ1RfQ0xBU1NcclxuXHRcdCl7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCAhZWVuKCB0cmVlLCBjb25zdHJ1Y3RvciApICl7XHJcblx0XHRcdHRyZWUucHVzaCggY29uc3RydWN0b3IgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0cmVlO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB3YXVrZXI7XHJcbiJdfQ==
//# sourceMappingURL=wauker.support.js.map
