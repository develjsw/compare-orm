import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { GoodsModule } from './goods/goods.module';
import { PaymentModule } from './payment/payment.module';
import { MemberModule } from './member/member.module';

dotenv.config();

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
        GoodsModule,
        PaymentModule,
        MemberModule
    ],
    providers: [],
    exports: []
})
export class OrmTypeormModule {}
