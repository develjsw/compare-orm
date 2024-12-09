import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tb_payment')
export class PaymentEntity {
    @PrimaryColumn('int', {
        name: 'payment_id'
    })
    paymentId: number;

    @Column('int', {
        name: 'member_id'
    })
    memberId: number;

    @Column('int', {
        name: 'goods_id'
    })
    goodsId: number;

    @Column('int', {
        name: 'amount'
    })
    amount: number;

    @Column('char', {
        name: 'payment_status'
    })
    paymentStatus: string;

    @Column('datetime', {
        name: 'reg_date'
    })
    regDate: string;

    @Column('datetime', {
        name: 'mod_date'
    })
    modDate: string;
}
