import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateHistoriesTable1595798908578
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'histories',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'foundation_date',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'origin',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'important_facts',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('histories');
  }
}
