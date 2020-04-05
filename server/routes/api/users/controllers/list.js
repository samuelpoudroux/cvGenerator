const { getUsers } = require('../../../../repository/user');

module.exports = async (req, res, next) => {
    try {
        const { query } = req;
        const users = await console.log('getUsers',query);
        return res.status(200).json(users)
    } catch (error) {
        return next(error)
    }
}