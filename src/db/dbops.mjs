import knex from 'knex';
import config from './knexfile.js';


const knexInsatnce = knex(config.development);

function dbConnCheck() {
  return knexInsatnce.select().from('users');
}


export default dbConnCheck;
