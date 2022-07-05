import { EntityRepository, Repository } from "typeorm"
import { Orders } from '../../entities/index'

@EntityRepository(Orders)
export class OrderRepository extends Repository<Orders> {

    async createOrder(order) {
        try {
            const newOrder = this.create(order)
            return this.save(newOrder)
        } catch (error) {
            return { Message: error.message }
        }
    }

    async listOrders(idUser) {
        return this.find({ users: idUser })
    }

    async deleteOrder(idOrder) {
        return this.delete({ ordersId: idOrder })
    }

    async updateOrder(idOrder, data) {
        return this.update({ordersId: idOrder}, data)
    }

}