import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateMonumentsTable1595799200459
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'monuments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'neighborhood',
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

    await queryRunner.addColumn(
      'monuments',
      new TableColumn({
        name: 'information_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'monuments',
      new TableForeignKey({
        name: 'InformationMonuments',
        columnNames: ['information_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'informations',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.addColumn(
      'monuments',
      new TableColumn({
        name: 'history_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'monuments',
      new TableForeignKey({
        name: 'HistoryMonuments',
        columnNames: ['history_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'histories',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('monuments', 'HistoryMonuments');
    await queryRunner.dropColumn('monuments', 'history_id');
    await queryRunner.dropForeignKey('monuments', 'InformationMonuments');
    await queryRunner.dropColumn('monuments', 'information_id');
    await queryRunner.dropTable('monuments');
  }
}
