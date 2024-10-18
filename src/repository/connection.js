import mysql from 'mysql2/promise.js'

const con = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    typeCast: function (field, next ){
    
        if(field.type === 'TINY' && field.length === 1){
    return (field.string() === '1');
    
        }else if(field.type.includes('DECIMAL')){
    
            return Number(field.string());
        }
        else{
            return next();
        }
    
    }
    })

    export default con;