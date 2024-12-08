import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmTypeormModule } from './orm-typeorm/orm-typeorm.module';

@Module({
    imports: [
        OrmTypeormModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
