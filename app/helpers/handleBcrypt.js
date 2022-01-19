const bcrypt = require('bcryptjs');

const encrypt = async ( value ) => {
    const hash = await bcrypt.hash(value, 10);
    return hash;
}

module.exports = { encrypt }