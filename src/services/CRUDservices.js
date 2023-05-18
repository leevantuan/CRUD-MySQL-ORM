const connection = require('../config/database');

const getFindUserId = async (Id) => {
    let [results, fields] = await connection.query(`SELECT * FROM Users WHERE Id = ?`, [Id]);
    return results;

}
//Create in CRUD
const postCreateUser = async (data) => {

    let { name, email, city } = data;

    const [err, results] = await connection.query(
        ` INSERT INTO Users ( Email, Name , City ) VALUES (?, ?, ?) `, [email, name, city],
    )
    return results;

}
//Read in CRUD
const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
}
//Update in CRUD
const postUpdateUser = async (data) => {

    let { name, email, city, id } = data;

    const [err, results] = await connection.query(
        ` UPDATE Users SET Email=?, Name = ?, City = ? WHERE Id = ?; `, [email, name, city, id],
    )
    return results;
}
//Delete in CRUD
const postDeleteUser = async (Id) => {
    const [err, results] = await connection.query(` DELETE FROM Users  WHERE Id = ? `, [Id],)
    return results;
}


module.exports = {
    getAllUsers, getFindUserId,
    postCreateUser, postUpdateUser, postDeleteUser
}