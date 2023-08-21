import { env } from '@app/utils';

export default {
  mongodb: {
    protocol: env('MONGODB_PROTOCOL', 'mongodb'),
    user: env('MONGODB_USER', 'admin'),
    password: env('MONGODB_PASS', 'password'),
    host: env('MONGODB_HOST', 'localhost'),
    port: env('MONGODB_PORT') ? `:${env('MONGODB_PORT')}` : '',
    dbName: env('MONGODB_NAME', 'db'),
  },
  jwt: {
    secret: env('JWT_SECRET', 'whigNANTosPhoWBARoqu'),
  },
  appName: env('SERVICE_NAME', 'claim service'),
};
