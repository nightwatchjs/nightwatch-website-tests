exports.command = function(data) {
  this.execute(function(data) {return data;}, [data], function(result) {
    this.assert.ok('value' in result);
    this.assert.deepEqual(result.value, data);
  });

  return this;
};
