import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
    imports: [],
    controllers: [GoodsController],
    providers: [PrismaService],
    exports: []
})
export class GoodsModule {}
