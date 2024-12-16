import { Controller, Get, NotFoundException, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { FindMemberDto } from './dto/find-member.dto';
import { MemberService } from './servicies/member.service';
import { MemberEntity } from '../entities/mysql/member.entity';

@Controller('orm-typeorm/members')
export class MemberController {
    constructor(private readonly memberService: MemberService) {}

    @Get()
    @UsePipes(ValidationPipe)
    async findMemberByConditions(@Query() findMemberDto: FindMemberDto) {
        const memberList: MemberEntity[] = await this.memberService.findMemberByConditions(findMemberDto);

        if (!memberList.length) {
            throw new NotFoundException();
        }

        return memberList;
    }
}
