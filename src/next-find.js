(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.find = function( inArray, inCallback ){
    for (var index = 0; index < inArray.length; index++) {
      var value = inArray[index];
      if(inCallback.call(inArray, index, value , inArray)){
        return value;
      }
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.find;
  }

}());
