const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function CreateTable() {
    let con;
    try {
        con = await oracledb.getConnection({
            user : "system",
            password : "admin",
            connectString : "localhost/xe"
        });
        const data = await con.execute(
            'CREATE TABLE Student (studNum NUMBER)'
        );
        console.log("Success!");

    } catch (err) {
        console.error(err);
    }
}
async function AddStudent() {
    let con;
    try {
        con = await oracledb.getConnection({
            user : "system",
            password : "admin",
            connectString : "localhost/xe"
        });
        const data = await con.execute(
            'INSERT INTO Student VALUES(:studNum)',
            {
                studNum: '2022153467'
            },
            {autoCommit: true}
        );
        console.log("Success!");

    } catch (err) {
        console.error(err);
    }
}
async function SelectAllStudents() {
    let con;
    try {
        con = await oracledb.getConnection({
            user : "system",
            password : "admin",
            connectString : "localhost/xe"
        });
        const data = await con.execute(
            'SELECT * FROM Student'
        );
        console.log("Success!");
        console.log(data.rows);
        

    } catch (err) {
        console.error(err);
    }
}
//CreateTable();
//AddStudent();
//SelectAllStudents();

//How to run: Use node app.js on terminal to debug