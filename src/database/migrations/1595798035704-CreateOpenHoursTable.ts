import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class CreateOpenHoursTable1595798035704
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'open_hours',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'week_day',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'open_at',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'close_at',
            type: 'timestamp',
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

    await queryRunner.addColumn(
      'open_hours',
      new TableColumn({
        name: 'information_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'open_hours',
      new TableForeignKey({
        name: 'InformationOpenHour',
        columnNames: ['information_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'informations',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('open_hours', 'InformationOpenHour');
    await queryRunner.dropColumn('open_hours', 'information_id');
    await queryRunner.dropTable('open_hours');
  }
}
