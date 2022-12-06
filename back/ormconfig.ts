import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config()

export default new DataSource({
  type: 'postgres',
  host: String(process.env.POSTGRES_HOST),
  port: Number(process.env.POSTGRES_PORT),
  username: String(process.env.POSTGRES_USER),
  password: String(process.env.POSTGRES_PASSWORD),
  database: String(process.env.POSTGRES_DB),
  synchronize: false,
  cache: false,
  entities: ['src/models/database/entity/**/*.ts'],
  migrations: ['src/models/database/migrations/**/*.ts'],
});