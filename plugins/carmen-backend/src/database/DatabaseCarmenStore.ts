import { PluginDatabaseManager, resolvePackagePath } from "@backstage/backend-common";
import { Knex } from "knex";

export type Carmen = {
  id: string;
  created: Date;
  updated?: Date
}

export type CarmenGetOptions = {
  ids?: string[];
}
export interface CarmenStore {
  getAllCarmens(options: CarmenGetOptions): Promise<Carmen[]>;
}

const migrationsDir = resolvePackagePath(
  '@internal/backstage-plugin-carmen-backend',
  'migrations',
);

export class DatabaseCarmenStore implements CarmenStore {
  private readonly isSQLite = false;

  private constructor(private readonly db: Knex) {
    this.isSQLite = this.db.client.config.client.includes('sqlite3');
  }

  static async create({
    database,
    skipMigrations,
  }: {
    database: PluginDatabaseManager,
    skipMigrations?: boolean;
  }): Promise<CarmenStore> {
    const client = await database.getClient();

    if (!database.migrations?.skip && !skipMigrations) {
      await client.migrate.latest({
        directory: migrationsDir,
      });
    }

    return new DatabaseCarmenStore(client);
  }

  async getAllCarmens(options: CarmenGetOptions): Promise<Carmen[]> {

  }
}
