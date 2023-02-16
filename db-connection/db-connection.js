import { createPool } from 'mysql';

const getHost = () => process.env.HOST || 'name';

const getUser = () => process.env.USER || 'name';

const getPass = () => process.env.PASS || 'name';

const getDataBase = () => process.env.DATABASE || 'name';

const con = createPool({
  connectionLimit: 10,
  host: getHost(),
  user: getUser(),
  password: getPass(),
  database: getDataBase()
});

export default { con };