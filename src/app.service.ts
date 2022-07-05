import { Injectable } from '@nestjs/common';
import { OrderRepository, UsersRepository } from './database/repositories/index'

@Injectable()
export class AppService {
  constructor(private usersRepository: UsersRepository,
    private orderRepository: OrderRepository
  ) { }

  async createUser(user) {
    return await this.usersRepository.createUser(user)
  }

  async createOrder(order) {
    return await this.orderRepository.createOrder(order)
  }

  async listOrders(idUser) {
    return await this.orderRepository.listOrders(idUser)
  }

  async deleteOrder(idOrder) {
    return await this.orderRepository.deleteOrder(idOrder)
  }

  async updateOrder(idOrder, data) {
    return await this.orderRepository.updateOrder(idOrder, data)
  }
}
