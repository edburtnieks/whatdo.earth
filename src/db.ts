import { Kysely } from 'kysely';
import type { Generated } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface CountryTable {
    id: Generated<number>;
    name: string;
    key: string;
    draft: Generated<boolean>;
}

interface DraftTable {
    id: Generated<number>;
    type: string;
    key: string;
    content?: string;
    draft?: 'draft' | 'waiting-for-approval' | 'approved';
}

interface Database {
    country: CountryTable;
    draft: DraftTable;
}

export const db = new Kysely<Database>({
    dialect: new PlanetScaleDialect({
        host: import.meta.env.DATABASE_HOST,
        username: import.meta.env.DATABASE_USERNAME,
        password: import.meta.env.DATABASE_PASSWORD,
    }),
});
