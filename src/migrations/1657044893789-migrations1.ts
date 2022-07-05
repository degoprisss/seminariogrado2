import {MigrationInterface, QueryRunner} from "typeorm";

export class migrations11657044893789 implements MigrationInterface {
    name = 'migrations11657044893789'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "ordersId" uuid NOT NULL DEFAULT uuid_generate_v4(), "nameProduct" character varying NOT NULL, "price" character varying NOT NULL, "amount" integer NOT NULL, "brand" character varying NOT NULL, "usersId" uuid, CONSTRAINT "PK_28944233272b501d98f6bb0dbd6" PRIMARY KEY ("ordersId"))`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_c6c2785c13b07ddbc4a9792770a" FOREIGN KEY ("usersId") REFERENCES "users_project_end"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_c6c2785c13b07ddbc4a9792770a"`);
        await queryRunner.query(`DROP TABLE "orders"`);
    }

}
