import { Generated, Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface CountryTable {
    id: Generated<number>;
    name: string;
}

interface Database {
    country: CountryTable;
}

export const db = new Kysely<Database>({
    dialect: new PlanetScaleDialect({
        host: import.meta.env.DATABASE_HOST,
        username: import.meta.env.DATABASE_USERNAME,
        password: import.meta.env.DATABASE_PASSWORD,
    }),
});
