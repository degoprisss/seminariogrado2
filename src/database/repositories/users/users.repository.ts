import { EntityRepository, Repository } from "typeorm"
import { UsersEntity } from '../../entities/index'

@EntityRepository(UsersEntity)
export class UsersRepository extends Repository<UsersEntity> {

    async createUser(user) {
        try {
            const newUser = this.create(user)
            return this.save(newUser)
        } catch (error) {
            return { Message: error.message }
        }
    }

}