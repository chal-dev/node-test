const mysql = require('mysql');
const conn = {
    host: 'localhost',
    port : '3306',
    user :'root',
    password :'1234',
}

var connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속


testQuery = "SELECT * FROM sys.test_table";

connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log('데이터베이스 테스트!')
    console.log(results);
});


connection.end(); // DB 접속 종료
