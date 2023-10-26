const mysql= require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:  'cori',
    database: 'db_cori'
});

connection.connect(function(err) {
    console.log('sucess');
});

connection.query("SELECT * FROM tabela_users", function (err, rows, fields) 
{
    if (!err){
        console.log("certo", rows);
    }else{
        console.log('erro');
    }
})