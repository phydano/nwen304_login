var pg = require('pg').native
  , connectionString = process.env.DATABASE_URL
  , client
  , query;

client = new pg.Client(connectionString);
client.connect();
//query = client.query("CREATE TABLE userdatabase (id bigint,username text,typeofuser text,firstname text,points integer)");
//query = client.query('CREATE TABLE eventdatabase (title text, description text, longitude text , latitude text, greenpoints integer)');
query = client.query('CREATE TABLE newsdatabase (name text, comment text)');
query.on('end', function(result) { client.end(); });