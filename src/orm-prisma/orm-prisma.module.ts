import { Module } from '@nestjs/common';
import { OrmPrismaController } from './orm-prisma.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
    imports: [],
    controllers: [OrmPrismaController],
    providers: [PrismaService],
    exports: []
})
export class OrmPrismaModule {}
