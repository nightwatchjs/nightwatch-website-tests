exports.command = function(list) {
  this.execute(
    function(data) {
      return data;
    },
    [list],
    function(result) {
      console.log(result);
    }
  );
  return this;
};