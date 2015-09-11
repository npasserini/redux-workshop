// var tasks = require('../api/tasks.js');

module.exports = function (app) {
  app.get('/tasks', function (req, res) {
    var sampleTasks = require('../api/sampleTasks.js')
    res.send(JSON.stringify(sampleTasks));
  });  
}

