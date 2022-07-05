import { ApiProperty } from "@nestjs/swagger";

export class userDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    lastnames: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    phone: number;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    photos: string

}
