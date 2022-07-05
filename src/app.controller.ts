import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { OrderDto, OrderUpdateDto } from './utils/dto/order.dto';
import { userDto } from './utils/dto/users.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create/user')
  @ApiTags('Users')
  createUser(@Body() users: userDto) {
    return this.appService.createUser(users)
  }

  @Post('create/order')
  @ApiTags('Order')
  createOrder(@Body() order: OrderDto) {
    return this.appService.createOrder(order)
  }

  @Get('list/order/:idUser')
  @ApiTags('Order')
  @ApiParam({ description: 'Id del usuario del cual se buscaran los pedidos', name: 'idUser' })
  listOrder(@Param('idUser') idUser: string) {
    return this.appService.listOrders(idUser)
  } 

  @Delete('delete/order/:idOrder')
  @ApiTags('Order')
  @ApiParam({ description: 'Id de la orden a eliminar', name: 'idOrder' })
  deleteOrder(@Param('idOrder') idOrder: string ) {
    return this.appService.deleteOrder(idOrder)
  }

  @Put('update/order/:idOrder')
  @ApiTags('Order')
  @ApiParam({ description: 'Id de la orden que se quiere actualizar', name: 'idOrder' })
  updateOrder(@Body() data: OrderUpdateDto, @Param('idOrder') idOrder: string, ) {
    return this.appService.updateOrder(idOrder, data)
  }
}
