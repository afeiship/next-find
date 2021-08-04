(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.find = function (inArray, inCallback, inPath, inDefaults) {
    var res = inArray.find(inCallback);
    return arguments.length > 2 ? nx.get(res, inPath, inDefaults) : res;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.find;
  }
})();
