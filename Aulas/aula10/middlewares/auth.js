const jwt = require('jsonwebtoken')

function validarToken(req, res, next) {
    const token = req.headers['authorization'];
    try{ 
    const payload = jwt.verify(token, '123456');
        next();
    } catch (e) {
        console.log (e)
        res.status(401).json({msg: 'Acesso negado'});
    }
}

module.exports = validarToken;