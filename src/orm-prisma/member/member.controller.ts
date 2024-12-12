import { Controller, Get, NotFoundException, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { MemberService } from './servicies/member.service';
import { FindMemberDto } from './dto/find-member.dto';
import { tb_member as Member } from '@prisma/client';

@Controller('orm-prisma/members')
export class MemberController {
    constructor(private readonly memberService: MemberService) {}

    @Get()
    @UsePipes(ValidationPipe)
    async findMemberByConditions(@Query() findMemberDto: FindMemberDto) {
        const memberList: Member[] = await this.memberService.findMemberByConditions(findMemberDto);

        if (!memberList.length) {
            throw new NotFoundException();
        }

        return memberList;
    }
}
