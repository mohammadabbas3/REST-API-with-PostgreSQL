const postgreSQL = require('../config/db')

const getAllUser = async (req, res) => {
    try {
        let getAllUserQuery = `SELECT * FROM admin`
        postgreSQL.query(getAllUserQuery).then((result) => {
            // console.log(result)
            return res.send({
                success: true,
                status: 200,
                data: result.rows
            })
        }).catch((err) => {
            console.log("err", err)
            return res.send({
                success: false,
                status: 500,
                message: 'something went wrong'
            })
        })
    } catch (error) {
        return res.send({
            success: false,
            status: 500,
            message: 'something went wrong'
        })
    }
}

const getUserById = async (req, res) => {
    try {
        const { params } = req
        const id = params?.id

        let getUserByIdQuery = `SELECT * FROM admin WHERE id = ${id}`

        postgreSQL.query(getUserByIdQuery).then((result) => {
            // console.log(result)
            return res.send({
                success: true,
                status: 200,
                data: result?.rows
            })
        }).catch((err) => {
            // console.log("err", err)
            return res.send({
                success: false,
                status: 500,
                message: 'something went wrong'
            })
        })
    } catch (error) {
        return res.send({
            success: false,
            status: 500,
            message: 'something went wrong'
        })
    }
}

module.exports = { getAllUser, getUserById }