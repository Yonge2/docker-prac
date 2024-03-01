const express = require('express');
const app = express()

const db = require('./db')


app.get('/', (req, res) => res.send('Hello World'));

app.get('/fir', async(req, res)=>{
    const connection = await db.getConnection()
    const result = await connection.query("CREATE TABLE test(a int(4));")
    return res.status(200).json({result})
})

app.get('/in', async(req, res)=> {
    const connection = await db.getConnection()
    await connection.query('insert into test value(1)')
    return res.status(201).send('ok')
})
app.get('/out', async(req, res)=> {
    const connection = await db.getConnection()
    const a = await connection.query('select * from test')
    return res.status(200).json({a})
})


app.listen(3000, () => {
    console.log('My REST API running on port 3000!');
})