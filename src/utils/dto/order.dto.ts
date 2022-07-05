import { ApiProperty } from "@nestjs/swagger";

export class OrderDto {

    @ApiProperty()
    nameProduct: string;

    @ApiProperty()
    price: string

    @ApiProperty()
    amount: number

    @ApiProperty()
    brand: string;

    @ApiProperty()
    users: string
}

export class OrderUpdateDto {

    @ApiProperty()
    nameProduct: string;

    @ApiProperty()
    price: string

    @ApiProperty()
    amount: number

    @ApiProperty()
    brand: string;
}