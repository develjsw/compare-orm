import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { tb_member as Member } from '@prisma/client';
import { FindMemberDto } from '../dto/find-member.dto';

@Injectable()
export class MemberService {
    constructor(private readonly prisma: PrismaService) {}

    async findMemberByConditions(dto: FindMemberDto): Promise<Member[]> {
        const { member_name, nick_name, tel, email, member_status } = dto;

        return this.prisma.tb_member.findMany({
            where: {
                ...(member_name && { member_name }),
                ...(nick_name && { nick_name }),
                ...(tel && { tel }),
                ...(email && { email }),
                ...(member_status && { member_status })
            },
            orderBy: {
                member_id: 'desc'
            }
        });
    }
}
