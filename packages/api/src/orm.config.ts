import { MikroORM } from "@mikro-orm/core";

export default{
  migrations:{
    path:'./src/migrations',
    tableName:'migrations',
    transactional: true,
  },
  tsNode: process.env.NODE_DEV === 'true' ? true : false,
  user: 'root',
  password:'root',
  dbName:'addis-flat-data',
  hostname: 'localhost',
  port: 5432,
  entities:['dist/**/*.entity.js'],
  entitiesTs:['src/**/*.entity.ts'],
  type:'postgresql',
  debug: process.env.NODE_ENV !== 'production'
} as Parameters<typeof MikroORM.init>[0];