const dotenv = require('dotenv');
const path = require('path');
const Joi = require('@hapi/joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
        PORT: Joi.number().default(3000),
        ORACLE_DATABASE: Joi.string().required().description('SQL DATABASE'),
        ORACLE_URL: Joi.string().required().description('SQL HOST'),
        ORACLE_USER: Joi.string().required().description('SQL Username'),
        //ORACLE_PASSWORD: Joi.string().required().description('SQL Password'),
        JWT_SECRET: Joi.string().required().description('JWT secret key'),
    })
    .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if(error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    env : envVars.NODE_ENV,
    port : envVars.PORT,
    oracle : {
        database: envVars.ORACLE_DATABASE,
        host: envVars.ORACLE_URL,
        user: envVars.ORACLE_USER,
        password: envVars.ORACLE_PASSWORD
    },
    jwt : {
        secret: envVars.JWT_SECRET
    }
};