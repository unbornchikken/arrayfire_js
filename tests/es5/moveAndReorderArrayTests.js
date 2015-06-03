"use strict";
"use strict";
var assert = require("better-assert");
var _ = require("lodash");
var ref = require("ref");
var Bluebird = require("bluebird");
var async = Bluebird.coroutine;
var int = ref.types.int;
var float = ref.types.float;
function testPlatform(id) {
  if (process.env["TEST_" + id] === "1") {
    describe(id + " platform", function() {
      var fire = Bluebird.promisifyAll(require("../..")(id));
      describe("join", function() {
        it("should be implemented", function() {
          console.log(("TODO: implement join test for " + id + "\n"));
        });
      });
      describe("tile", function() {
        it("should be implemented", function() {
          console.log(("TODO: implement tile test for " + id + "\n"));
        });
      });
      describe("reorder", function() {
        it("should be implemented", function() {
          console.log(("TODO: implement iota reorder for " + id + "\n"));
        });
      });
      describe("shift", function() {
        it("should be implemented", function() {
          console.log(("TODO: implement shift test for " + id + "\n"));
        });
      });
      describe("moddims", function() {
        it("should be implemented", function() {
          console.log(("TODO: implement moddims test for " + id + "\n"));
        });
      });
      describe("flat", function() {
        it("should be implemented", function() {
          console.log(("TODO: implement flat test for " + id + "\n"));
        });
      });
      describe("flip", function() {
        it("should be implemented", function() {
          console.log(("TODO: implement flip test for " + id + "\n"));
        });
      });
      describe("transpose", function() {
        it("should be implemented", function() {
          console.log(("TODO: implement transpose test for " + id + "\n"));
        });
      });
    });
  }
}
describe("Functions to create arrays", function() {
  testPlatform("CPU");
  testPlatform("OpenCL");
  testPlatform("CUDA");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmVBbmRSZW9yZGVyQXJyYXlUZXN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7QUFBQSxXQUFXLENBQUM7QUFFWixBQUFJLEVBQUEsQ0FBQSxNQUFLLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxlQUFjLENBQUMsQ0FBQztBQUNyQyxBQUFJLEVBQUEsQ0FBQSxDQUFBLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxRQUFPLENBQUMsQ0FBQztBQUN6QixBQUFJLEVBQUEsQ0FBQSxHQUFFLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxLQUFJLENBQUMsQ0FBQztBQUN4QixBQUFJLEVBQUEsQ0FBQSxRQUFPLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxVQUFTLENBQUMsQ0FBQztBQUNsQyxBQUFJLEVBQUEsQ0FBQSxLQUFJLEVBQUksQ0FBQSxRQUFPLFVBQVUsQ0FBQztBQUM5QixBQUFJLEVBQUEsQ0FBQSxHQUFFLEVBQUksQ0FBQSxHQUFFLE1BQU0sSUFBSSxDQUFDO0FBQ3ZCLEFBQUksRUFBQSxDQUFBLEtBQUksRUFBSSxDQUFBLEdBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0IsT0FBUyxhQUFXLENBQUcsRUFBQyxDQUFHO0FBQ3ZCLEtBQUksT0FBTSxJQUFJLENBQUUsT0FBTSxFQUFJLEdBQUMsQ0FBQyxJQUFNLElBQUUsQ0FBRztBQUNuQyxXQUFPLEFBQUMsQ0FBQyxFQUFDLEVBQUksWUFBVSxDQUFHLFVBQVUsQUFBRCxDQUFHO0FBQ25DLEFBQUksUUFBQSxDQUFBLElBQUcsRUFBSSxDQUFBLFFBQU8sYUFBYSxBQUFDLENBQUMsT0FBTSxBQUFDLENBQUMsT0FBTSxDQUFDLEFBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXRELGFBQU8sQUFBQyxDQUFDLE1BQUssQ0FBRyxVQUFVLEFBQUQsQ0FBRztBQUN6QixTQUFDLEFBQUMsQ0FBQyx1QkFBc0IsQ0FBRyxVQUFTLEFBQUQsQ0FBRztBQUNuQyxnQkFBTSxJQUFJLEFBQUMsRUFBQyxnQ0FBZ0MsRUFBQyxHQUFDLEVBQUMsS0FBRyxFQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0FBRUYsYUFBTyxBQUFDLENBQUMsTUFBSyxDQUFHLFVBQVUsQUFBRCxDQUFHO0FBQ3pCLFNBQUMsQUFBQyxDQUFDLHVCQUFzQixDQUFHLFVBQVMsQUFBRCxDQUFHO0FBQ25DLGdCQUFNLElBQUksQUFBQyxFQUFDLGdDQUFnQyxFQUFDLEdBQUMsRUFBQyxLQUFHLEVBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7QUFFRixhQUFPLEFBQUMsQ0FBQyxTQUFRLENBQUcsVUFBVSxBQUFELENBQUc7QUFDNUIsU0FBQyxBQUFDLENBQUMsdUJBQXNCLENBQUcsVUFBUyxBQUFELENBQUc7QUFDbkMsZ0JBQU0sSUFBSSxBQUFDLEVBQUMsbUNBQW1DLEVBQUMsR0FBQyxFQUFDLEtBQUcsRUFBQyxDQUFDO1FBQzNELENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztBQUVGLGFBQU8sQUFBQyxDQUFDLE9BQU0sQ0FBRyxVQUFVLEFBQUQsQ0FBRztBQUMxQixTQUFDLEFBQUMsQ0FBQyx1QkFBc0IsQ0FBRyxVQUFTLEFBQUQsQ0FBRztBQUNuQyxnQkFBTSxJQUFJLEFBQUMsRUFBQyxpQ0FBaUMsRUFBQyxHQUFDLEVBQUMsS0FBRyxFQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0FBRUYsYUFBTyxBQUFDLENBQUMsU0FBUSxDQUFHLFVBQVUsQUFBRCxDQUFHO0FBQzVCLFNBQUMsQUFBQyxDQUFDLHVCQUFzQixDQUFHLFVBQVMsQUFBRCxDQUFHO0FBQ25DLGdCQUFNLElBQUksQUFBQyxFQUFDLG1DQUFtQyxFQUFDLEdBQUMsRUFBQyxLQUFHLEVBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7QUFFRixhQUFPLEFBQUMsQ0FBQyxNQUFLLENBQUcsVUFBVSxBQUFELENBQUc7QUFDekIsU0FBQyxBQUFDLENBQUMsdUJBQXNCLENBQUcsVUFBUyxBQUFELENBQUc7QUFDbkMsZ0JBQU0sSUFBSSxBQUFDLEVBQUMsZ0NBQWdDLEVBQUMsR0FBQyxFQUFDLEtBQUcsRUFBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztBQUVGLGFBQU8sQUFBQyxDQUFDLE1BQUssQ0FBRyxVQUFVLEFBQUQsQ0FBRztBQUN6QixTQUFDLEFBQUMsQ0FBQyx1QkFBc0IsQ0FBRyxVQUFTLEFBQUQsQ0FBRztBQUNuQyxnQkFBTSxJQUFJLEFBQUMsRUFBQyxnQ0FBZ0MsRUFBQyxHQUFDLEVBQUMsS0FBRyxFQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0FBRUYsYUFBTyxBQUFDLENBQUMsV0FBVSxDQUFHLFVBQVUsQUFBRCxDQUFHO0FBQzlCLFNBQUMsQUFBQyxDQUFDLHVCQUFzQixDQUFHLFVBQVMsQUFBRCxDQUFHO0FBQ25DLGdCQUFNLElBQUksQUFBQyxFQUFDLHFDQUFxQyxFQUFDLEdBQUMsRUFBQyxLQUFHLEVBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtBQUFBLEFBQ0o7QUFBQSxBQUVBLE9BQU8sQUFBQyxDQUFDLDRCQUEyQixDQUFHLFVBQVUsQUFBRCxDQUFHO0FBQy9DLGFBQVcsQUFBQyxDQUFDLEtBQUksQ0FBQyxDQUFDO0FBQ25CLGFBQVcsQUFBQyxDQUFDLFFBQU8sQ0FBQyxDQUFDO0FBQ3RCLGFBQVcsQUFBQyxDQUFDLE1BQUssQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUFBIiwiZmlsZSI6Im1vdmVBbmRSZW9yZGVyQXJyYXlUZXN0cy5qcyIsInNvdXJjZVJvb3QiOiJ0ZXN0cy9lczYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5Db3B5cmlnaHQgMjAxNSBH77+9Ym9yIE1leu+/vSBha2EgdW5ib3JuY2hpa2tlblxyXG5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGFzc2VydCA9IHJlcXVpcmUoXCJiZXR0ZXItYXNzZXJ0XCIpO1xyXG5sZXQgXyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XHJcbmxldCByZWYgPSByZXF1aXJlKFwicmVmXCIpO1xyXG5sZXQgQmx1ZWJpcmQgPSByZXF1aXJlKFwiYmx1ZWJpcmRcIik7XHJcbmxldCBhc3luYyA9IEJsdWViaXJkLmNvcm91dGluZTtcclxubGV0IGludCA9IHJlZi50eXBlcy5pbnQ7XHJcbmxldCBmbG9hdCA9IHJlZi50eXBlcy5mbG9hdDtcclxuXHJcbmZ1bmN0aW9uIHRlc3RQbGF0Zm9ybSAoaWQpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudltcIlRFU1RfXCIgKyBpZF0gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgZGVzY3JpYmUoaWQgKyBcIiBwbGF0Zm9ybVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBmaXJlID0gQmx1ZWJpcmQucHJvbWlzaWZ5QWxsKHJlcXVpcmUoXCIuLi8uLlwiKShpZCkpO1xyXG5cclxuICAgICAgICAgICAgZGVzY3JpYmUoXCJqb2luXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGl0KFwic2hvdWxkIGJlIGltcGxlbWVudGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUT0RPOiBpbXBsZW1lbnQgam9pbiB0ZXN0IGZvciAke2lkfVxcbmApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZGVzY3JpYmUoXCJ0aWxlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGl0KFwic2hvdWxkIGJlIGltcGxlbWVudGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUT0RPOiBpbXBsZW1lbnQgdGlsZSB0ZXN0IGZvciAke2lkfVxcbmApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZGVzY3JpYmUoXCJyZW9yZGVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGl0KFwic2hvdWxkIGJlIGltcGxlbWVudGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUT0RPOiBpbXBsZW1lbnQgaW90YSByZW9yZGVyIGZvciAke2lkfVxcbmApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZGVzY3JpYmUoXCJzaGlmdFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpdChcInNob3VsZCBiZSBpbXBsZW1lbnRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVE9ETzogaW1wbGVtZW50IHNoaWZ0IHRlc3QgZm9yICR7aWR9XFxuYCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkZXNjcmliZShcIm1vZGRpbXNcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaXQoXCJzaG91bGQgYmUgaW1wbGVtZW50ZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRPRE86IGltcGxlbWVudCBtb2RkaW1zIHRlc3QgZm9yICR7aWR9XFxuYCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkZXNjcmliZShcImZsYXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaXQoXCJzaG91bGQgYmUgaW1wbGVtZW50ZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRPRE86IGltcGxlbWVudCBmbGF0IHRlc3QgZm9yICR7aWR9XFxuYCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkZXNjcmliZShcImZsaXBcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaXQoXCJzaG91bGQgYmUgaW1wbGVtZW50ZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRPRE86IGltcGxlbWVudCBmbGlwIHRlc3QgZm9yICR7aWR9XFxuYCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkZXNjcmliZShcInRyYW5zcG9zZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpdChcInNob3VsZCBiZSBpbXBsZW1lbnRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVE9ETzogaW1wbGVtZW50IHRyYW5zcG9zZSB0ZXN0IGZvciAke2lkfVxcbmApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5kZXNjcmliZShcIkZ1bmN0aW9ucyB0byBjcmVhdGUgYXJyYXlzXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHRlc3RQbGF0Zm9ybShcIkNQVVwiKTtcclxuICAgIHRlc3RQbGF0Zm9ybShcIk9wZW5DTFwiKTtcclxuICAgIHRlc3RQbGF0Zm9ybShcIkNVREFcIik7XHJcbn0pOyJdfQ==