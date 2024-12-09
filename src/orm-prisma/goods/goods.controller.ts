import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('orm-prisma/goods')
export class GoodsController {
    constructor(private readonly prisma: PrismaService) {}

    @Get()
    async findGoodsAll() {
        return await this.prisma.tb_goods.findMany();
    }
}
