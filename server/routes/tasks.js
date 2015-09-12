// var tasks = require('../api/tasks.js');
import { all } from '../api/tasks'

module.exports = function (app) {
  app.get('/tasks', function (req, res) {
    all().then(tasks => res.send(JSON.stringify(tasks)));
  });  
}

