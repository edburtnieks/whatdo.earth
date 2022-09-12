/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly DATABASE_HOST: string;
    readonly DATABASE_USERNAME: string;
    readonly DATABASE_PASSWORD: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
