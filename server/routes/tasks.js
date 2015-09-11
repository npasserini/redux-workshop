
module.exports = function (app) {
  app.get('/tasks', function (req, res) {
    var tasks = require('../api/sampleTasks.js')
    res.send(JSON.stringify(tasks));
  });  
}
