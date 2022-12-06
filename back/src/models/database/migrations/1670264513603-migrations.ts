import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1670264513603 implements MigrationInterface {
    name = 'migrations1670264513603'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "standart" ("id" SERIAL NOT NULL, "title" character varying NOT NULL DEFAULT '', "designerId" integer, CONSTRAINT "PK_dd29134b8a2118684f782ea41ae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "designer" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_01555ea181fd3d479d5e75bed35" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "standart" ADD CONSTRAINT "FK_1af5702dc9e47bfae018520e4cb" FOREIGN KEY ("designerId") REFERENCES "designer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "standart" DROP CONSTRAINT "FK_1af5702dc9e47bfae018520e4cb"`);
        await queryRunner.query(`DROP TABLE "designer"`);
        await queryRunner.query(`DROP TABLE "standart"`);
    }

}
