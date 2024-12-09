import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmTypeormModule } from './orm-typeorm/orm-typeorm.module';
import { OrmPrismaModule } from './orm-prisma/orm-prisma.module';

@Module({
    imports: [OrmTypeormModule, OrmPrismaModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
