import { Injectable, NotFoundException } from '@nestjs/common';
import { GoodsRepository } from '../repositories/goods.repository';
import { GoodsEntity } from '../../entities/mysql/goods.entity';

@Injectable()
export class GoodsService {
    constructor(private readonly goodsRepository: GoodsRepository) {}

    async findGoodsAll(): Promise<GoodsEntity[]> {
        const goodsList: GoodsEntity[] = await this.goodsRepository.findGoodsAll();
        // const testCase1 = goodsList.filter((goods: GoodsEntity) => goods.member_id == 1) // goods 모델 객체에 member_id는 없으므로 Error 발생

        if (!goodsList.length) {
            throw new NotFoundException();
        }

        return goodsList;
    }
}
