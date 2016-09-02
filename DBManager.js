var pg = require('pg');

pg.defaults.ssl = true;

var connectionString = "postgres://tzszwlmjuudltv:ecnCIBha8zxWmRAs2pCYNOhM-X@ec2-54-243-203-87.compute-1.amazonaws.com:5432/d1fne0mar9cv10";

pg.connect(connectionString, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});