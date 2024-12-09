import { Controller, Get, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { tb_goods as Goods } from '@prisma/client';

@Controller('orm-prisma/goods')
export class GoodsController {
    constructor(private readonly prisma: PrismaService) {}

    @Get()
    async findGoodsAll() {
        const goodsList: Goods[] = await this.prisma.tb_goods.findMany();
        // const testCase1 = goodsList.filter((goods: Goods) => goods.member_id == 1) // goods 모델 객체에 member_id는 없으므로 Error 발생

        if (!goodsList.length) {
            throw new NotFoundException();
        }

        return goodsList;
    }
}
