let db = require("../util/db");

const getAllUsers = (req, res) => {
    console.log('Inside GET users route')
    db.query("SELECT * FROM users", (err, rows) => {
        if(err){
            return res.json(err)
        }
        res.json(rows)
    })
}

const getUserById = (req, res) => {
    console.log('Inside GET userById route')
    const userId = req.params.id
    const sql = "SELECT * FROM users WHERE id = ?"
    db.query(sql, [userId], (err, rows) => {
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json(rows)
    })
}

const createUser = (req, res) => {
    console.log('Inside POST createUser route')
    const {first_name, last_name} = req.body
    const sql = "INSERT INTO users (first_name, last_name) VALUES (?, ?)"
    db.query(sql, [first_name, last_name], (err, results) => {
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json({status: 'success', message: `New user added with the id of: ${results.insertId}`})
    })
}

const updateUser = (req, res) => {
    console.log('Inside PUT updateUser route')
    const id = req.params.id
    const {first_name, last_name} = req.body
    const body = [first_name, last_name, id]
    const sql = "UPDATE users SET first_name = ?, last_name = ? WHERE id = ?"
    db.query(sql, body, (err, results) => {
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json({status: 'success', message: `User updated`, results})
    })
}

const deleteUser = (req, res) => {
    console.log('Inside DELETE userRoute')
    const id = req.params.id
    const sql = "DELETE FROM users WHERE id = ?"
    db.query(sql, [id], (err,results) => {
        if(err){
            return res.status(500).json(err)
        }
        res.status(200).json({status: 'success', message: `User deleted`, results})
    })

}

module.exports = {getAllUsers, getUserById, createUser, updateUser, deleteUser}