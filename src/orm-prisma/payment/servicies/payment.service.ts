import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PaymentService {
    constructor(private readonly prisma: PrismaService) {}

    async findPaymentAndMemberAndGoodsByMemberId(
        member_id: number
    ): Promise<Prisma.tb_paymentGetPayload<{ include: { tb_goods: true; tb_member: true } }>[]> {
        return this.prisma.tb_payment.findMany({
            where: {
                member_id
            },
            include: {
                /*
                    [ Prisma - include(relation) 옵션 ]
                    - 실제 DB와 상관없이 schema.prisma에서 설정한 relation을 기준으로 데이터가 없다면 에러를 발생시킴
                        ex) tb_goods tb_goods @relation(fields: [goods_id], references: [goods_id], map: "fk_payment_goods")
                    - 실제 DB와 상관없이 schema.prisma에서 relation을 optional로 설정한 경우 데이터가 없을 때 null을 반환함
                        ex) tb_goods tb_goods? @relation(fields: [goods_id], references: [goods_id], map: "fk_payment_goods")
                          > [ { 필드1: 필드값1, 필드2: 필드값2, tb_goods: null }, { 필드1: 필드값1, 필드2: 필드값2, tb_goods: { 필드3: 필드값3, 필드4: 필드값4 } } ]
                */
                tb_goods: true,
                tb_member: true
            }
        });
    }
}
