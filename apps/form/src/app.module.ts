import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { appModules } from './modules';
import { AuthGuard } from '@app/authentication';
import { HttpExceptionFilter } from '@app/exceptions';
import { HealthCheckModule } from '@app/health-check';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      envFilePath: './config/.develop.env',
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (cnfSrv: ConfigService) => ({
        uri: `${cnfSrv.get('mongodb.protocol')}://${cnfSrv.get(
          'mongodb.user',
        )}:${cnfSrv.get('mongodb.password')}@${cnfSrv.get(
          'mongodb.host',
        )}${cnfSrv.get('mongodb.port')}/${cnfSrv.get(
          'mongodb.dbName',
        )}?authSource=admin&tls=true`,
      }),
      inject: [ConfigService],
    }),
    HealthCheckModule,
    ...appModules,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  controllers: [],
})
export class AppModule {}
