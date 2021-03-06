"use strict";
"use strict";
var lodash = require("lodash");
var assert = require("better-assert");
function Dim4(dim0, dim1, dim2, dim3) {
  if (_.isArray(dim0)) {
    return new Dim4(dim0[0], dim0[1], dim0[2], dim0[3]);
  }
  this.dims = [];
  if (_.isNumber(dim0)) {
    this.dims.push(dim0);
  } else {
    this.dims.push(1);
  }
  if (_.isNumber(dim1)) {
    this.dims.push(dim1);
  } else {
    this.dims.push(1);
  }
  if (_.isNumber(dim2)) {
    this.dims.push(dim2);
  } else {
    this.dims.push(1);
  }
  if (_.isNumber(dim3)) {
    this.dims.push(dim3);
  } else {
    this.dims.push(1);
  }
  var index;
  for (index = 3; index >= 0; index--) {
    if (this.dims[index] !== 1) {
      break;
    }
  }
  this.ndims = this.nDims = index + 1;
  this.elements = this.dims[0] * this.dims[1] * this.dims[2] * this.dims[3];
}
module.exports = Dim4;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpbTQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0FBQUEsV0FBVyxDQUFDO0FBRVosQUFBSSxFQUFBLENBQUEsTUFBSyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsUUFBTyxDQUFDLENBQUM7QUFDOUIsQUFBSSxFQUFBLENBQUEsTUFBSyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsZUFBYyxDQUFDLENBQUM7QUFFckMsT0FBUyxLQUFHLENBQUUsSUFBRyxDQUFHLENBQUEsSUFBRyxDQUFHLENBQUEsSUFBRyxDQUFHLENBQUEsSUFBRyxDQUFHO0FBQ2xDLEtBQUksQ0FBQSxRQUFRLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBRztBQUNqQixTQUFPLElBQUksS0FBRyxBQUFDLENBQUMsSUFBRyxDQUFFLENBQUEsQ0FBQyxDQUFHLENBQUEsSUFBRyxDQUFFLENBQUEsQ0FBQyxDQUFHLENBQUEsSUFBRyxDQUFFLENBQUEsQ0FBQyxDQUFHLENBQUEsSUFBRyxDQUFFLENBQUEsQ0FBQyxDQUFDLENBQUM7RUFDdkQ7QUFBQSxBQUNBLEtBQUcsS0FBSyxFQUFJLEdBQUMsQ0FBQztBQUNkLEtBQUksQ0FBQSxTQUFTLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBRztBQUFFLE9BQUcsS0FBSyxLQUFLLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQTtFQUFFLEtBQU87QUFBRSxPQUFHLEtBQUssS0FBSyxBQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7RUFBRTtBQUFBLEFBQ3pFLEtBQUksQ0FBQSxTQUFTLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBRztBQUFFLE9BQUcsS0FBSyxLQUFLLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQTtFQUFFLEtBQU87QUFBRSxPQUFHLEtBQUssS0FBSyxBQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7RUFBRTtBQUFBLEFBQ3pFLEtBQUksQ0FBQSxTQUFTLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBRztBQUFFLE9BQUcsS0FBSyxLQUFLLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQTtFQUFFLEtBQU87QUFBRSxPQUFHLEtBQUssS0FBSyxBQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7RUFBRTtBQUFBLEFBQ3pFLEtBQUksQ0FBQSxTQUFTLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBRztBQUFFLE9BQUcsS0FBSyxLQUFLLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQTtFQUFFLEtBQU87QUFBRSxPQUFHLEtBQUssS0FBSyxBQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7RUFBRTtBQUFBLEFBQ3JFLElBQUEsQ0FBQSxLQUFJLENBQUM7QUFDVCxNQUFLLEtBQUksRUFBSSxFQUFBLENBQUcsQ0FBQSxLQUFJLEdBQUssRUFBQSxDQUFHLENBQUEsS0FBSSxFQUFFLENBQUc7QUFDakMsT0FBSSxJQUFHLEtBQUssQ0FBRSxLQUFJLENBQUMsSUFBTSxFQUFBLENBQUc7QUFDeEIsV0FBSztJQUNUO0FBQUEsRUFDSjtBQUFBLEFBQ0EsS0FBRyxNQUFNLEVBQUksQ0FBQSxJQUFHLE1BQU0sRUFBSSxDQUFBLEtBQUksRUFBSSxFQUFBLENBQUM7QUFDbkMsS0FBRyxTQUFTLEVBQUksQ0FBQSxJQUFHLEtBQUssQ0FBRSxDQUFBLENBQUMsRUFBSSxDQUFBLElBQUcsS0FBSyxDQUFFLENBQUEsQ0FBQyxDQUFBLENBQUksQ0FBQSxJQUFHLEtBQUssQ0FBRSxDQUFBLENBQUMsQ0FBQSxDQUFJLENBQUEsSUFBRyxLQUFLLENBQUUsQ0FBQSxDQUFDLENBQUM7QUFDN0U7QUFBQSxBQUVBLEtBQUssUUFBUSxFQUFJLEtBQUcsQ0FBQztBQUFBIiwiZmlsZSI6ImRpbTQuanMiLCJzb3VyY2VSb290IjoibGliL2VzNiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbkNvcHlyaWdodCAyMDE1IEfvv71ib3IgTWV677+9IGFrYSB1bmJvcm5jaGlra2VuIChnYWJvci5tZXpvQG91dGxvb2suY29tKVxyXG5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGxvZGFzaCA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XHJcbmxldCBhc3NlcnQgPSByZXF1aXJlKFwiYmV0dGVyLWFzc2VydFwiKTtcclxuXHJcbmZ1bmN0aW9uIERpbTQoZGltMCwgZGltMSwgZGltMiwgZGltMykge1xyXG4gICAgaWYgKF8uaXNBcnJheShkaW0wKSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGltNChkaW0wWzBdLCBkaW0wWzFdLCBkaW0wWzJdLCBkaW0wWzNdKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGltcyA9IFtdO1xyXG4gICAgaWYgKF8uaXNOdW1iZXIoZGltMCkpIHsgdGhpcy5kaW1zLnB1c2goZGltMCkgfSBlbHNlIHsgdGhpcy5kaW1zLnB1c2goMSk7IH1cclxuICAgIGlmIChfLmlzTnVtYmVyKGRpbTEpKSB7IHRoaXMuZGltcy5wdXNoKGRpbTEpIH0gZWxzZSB7IHRoaXMuZGltcy5wdXNoKDEpOyB9XHJcbiAgICBpZiAoXy5pc051bWJlcihkaW0yKSkgeyB0aGlzLmRpbXMucHVzaChkaW0yKSB9IGVsc2UgeyB0aGlzLmRpbXMucHVzaCgxKTsgfVxyXG4gICAgaWYgKF8uaXNOdW1iZXIoZGltMykpIHsgdGhpcy5kaW1zLnB1c2goZGltMykgfSBlbHNlIHsgdGhpcy5kaW1zLnB1c2goMSk7IH1cclxuICAgIGxldCBpbmRleDtcclxuICAgIGZvciAoaW5kZXggPSAzOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGltc1tpbmRleF0gIT09IDEpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5uZGltcyA9IHRoaXMubkRpbXMgPSBpbmRleCArIDE7XHJcbiAgICB0aGlzLmVsZW1lbnRzID0gdGhpcy5kaW1zWzBdICogdGhpcy5kaW1zWzFdICogdGhpcy5kaW1zWzJdICogdGhpcy5kaW1zWzNdO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERpbTQ7Il19
