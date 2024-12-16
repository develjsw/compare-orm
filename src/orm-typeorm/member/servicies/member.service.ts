import { Injectable } from '@nestjs/common';
import { FindMemberDto } from '../dto/find-member.dto';
import { MemberRepository } from '../repositories/member.repository';
import { MemberEntity } from '../../entities/mysql/member.entity';

@Injectable()
export class MemberService {
    constructor(private readonly memberRepository: MemberRepository) {}

    async findMemberByConditions(findMemberDto: FindMemberDto): Promise<MemberEntity[]> {
        return await this.memberRepository.findMemberByConditions(findMemberDto);
    }
}
