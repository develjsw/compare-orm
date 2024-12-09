import { Injectable } from '@nestjs/common';
import { GoodsRepository } from '../repositories/goods.repository';
import { GoodsEntity } from '../../entities/mysql/goods.entity';

@Injectable()
export class GoodsService {
    constructor(private readonly goodsRepository: GoodsRepository) {}

    async findGoodsAll(): Promise<GoodsEntity[]> {
        return await this.goodsRepository.findGoodsAll();
    }
}
