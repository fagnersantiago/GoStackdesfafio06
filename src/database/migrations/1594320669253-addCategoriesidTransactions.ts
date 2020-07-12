import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class addCategoriesidTransactions1594320669253 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn(
        'transactions',
        new TableColumn({
          name:'category_id',
          type:'uuid',
          isNullable: true,
        }),

      );
      await queryRunner.createForeignKey(
        'transactions',
        new TableForeignKey({
          columnNames:['category_id'],
          referencedColumnNames:['id'],
          referencedTableName:'categories',
          name:'transcationsCategory',
          onUpdate:'CASCADE',
          onDelete:'SET NULL',
        }),
      )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

      await queryRunner.dropForeignKey('transactions','transactionsCategory');
      await queryRunner.dropColumn('transactions', 'category_id');
    }

}
