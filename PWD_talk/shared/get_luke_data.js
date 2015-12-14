

module.exports = {
  get_luke: function(personId, cb) {
    fetch('http://swapi.co/api/people/' + personId +'/')
      .then((response) => response.json())
      .then((responseData) => responseData.name)
      .then(cb)
      .done();
  }
}
