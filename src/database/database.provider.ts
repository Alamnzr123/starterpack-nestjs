import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mssql',
                host: 'DESKTOP-R7J0RGA',
                port: 1433,
                username: 'alamnzr',
                password: 'sas',
                database: 'backend-test',
                extra: {
                    trustServerCertificate: true,
                },
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];