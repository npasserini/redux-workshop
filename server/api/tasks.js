import Sequelize from 'sequelize'
import { tasks } from './sampleData'

var sequelize = new Sequelize(
  'unattended-showing', 
  'postgres', 
  'postgres', 
  {
    host: 'localhost',
    dialect: 'postgres',
    pool: { max: 5, min: 0, idle: 10000 },
  }
);

var Task = sequelize.define('task', {
  name: { type: Sequelize.STRING },
  status: { type: Sequelize.STRING }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

Task.sync({force: true}).then(function () {
  tasks.forEach(task => Task.create(task));
});

export function all() {
  return Task.findAll({}).then(function(tasks) {
    let r = tasks.map(task => task.dataValues)
    console.log(r);
    return r;
  });
}

