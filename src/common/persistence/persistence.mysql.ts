import { createConnection, ConnectionOptions } from 'mysql2/promise';


const config = {
    host: process.env.db_mysql_host,
    user: process.env.db_mysql_user,
    password: process.env.db_mysql_password,
    database: process.env.db_mysql_database,
    port: 3308
} as ConnectionOptions;

export default createConnection(config);