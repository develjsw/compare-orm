import { IsOptional, IsString } from 'class-validator';

export class FindMemberDto {
    @IsOptional()
    @IsString()
    member_name: string;

    @IsOptional()
    @IsString()
    nick_name: string;

    @IsOptional()
    @IsString()
    tel: string;

    @IsOptional()
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    member_status: string;
}
