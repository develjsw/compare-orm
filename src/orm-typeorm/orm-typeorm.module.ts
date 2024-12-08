import { Module } from '@nestjs/common';
import { OrmTypeormController } from './orm-typeorm.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config()

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.MYSQL_DB_HOST,
            port: parseInt(process.env.MYSQL_DB_PORT, 10),
            database: process.env.MYSQL_DB_NAME,
            username: process.env.MYSQL_DB_USERNAME,
            password: process.env.MYSQL_DB_PASSWORD,
            entities: ['dist/**/entities/mysql/*.entity{.ts,.js}'],
            synchronize: false,
            logging: 'all'
        }),
    ],
    controllers: [OrmTypeormController],
    providers: [],
    exports: []
})
export class OrmTypeormModule {}