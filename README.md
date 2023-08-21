# CLAIM SERVICE
# mb-claim-service

Microservizio responsabile della gestione sinistri.

## Tech stack

NestJS, Typescript
DB: MongoDB

## API

### Claim (users)

| Endpoint | Method | Description |
| --- | --- | --- |  
| /claim | POST | Create a new claim |
| /claim/{id} | PUT | Update a claim |
| /claim/{id} | DELETE | Delete a claim |

### Claims admin

| Endpoint | Method | Description |
| --- | --- | --- | 
| /admin/claims | POST | Create a new claim |
| /admin/claims/{id} | PUT | Update a claim |
| /admin/claims/{id} | DELETE | Delete a claim |

## Database

### Claim

| Field | Type | Description |
| --- | --- | --- |
| user_id | ObjectID | User id |
| order_id | ObjectID | Order id* |
| claim_category | String | Claim category (e.g. 'Infortuni', 'Auto') |
| claim_status | String | Claim status -> 'open' | 'closed' |
| claim_description | String | Claim description |
| files | Object[] | Array of files meta** |
| date_started | Date | Claim date creation |
| date_closed | Date | Claim closing date |
| date_creted | Date | Document created date |
| date_updated | Date | Document updated date |

* Order id is optional at the moment since it will not be used

** Files [{
key: String,
title: String,
}]


## Before you start
- change package.json name with your own and run `yarn`.
- have a look of example env into `/src/config/.example.env` and create a new env file for your needs.

## Running the app
```bash
# APP RUNNING
# development
$ yarn debug
# development
$ yarn start
# watch mode
$ yarn start:dev
# production mode
$ yarn start:prod
# --------------
# LINT 
$ npm lint  
# --------------
# BUILD 
$ npm build  
# --------------
# TEST
# unit tests
$ yarn test
# e2e tests
$ yarn test:e2e
# test coverage
$ yarn test:cov
# test coverage debug
$ yarn test:debug
``` 


## Test
```bash
# unit tests
$ yarn test
# e2e tests
$ yarn test:e2e
# test coverage
$ yarn test:cov
# test coverage debug
$ yarn test:debug
```

# What's inside
## Config module
#### https://docs.nestjs.com/techniques/configuration
This module manage a JSON object (you can see that object in `config/configuration.ts`), for having all the configurations in one place, this module allows you to inject that JSON configuration onto another modules for inject your configuration during setup.\
I've also created a small helper function into `configuration.ts` that allow you to call env var (process.env) without the prefix object (process.env) and, if the selected variable isn't set the function set the default as your wish.\


## Class Validators
#### https://docs.nestjs.com/pipes#class-validator
You can configure the validator into `main.ts`.\
```ts
// use validation pipe
app.useGlobalPipes(
    new ValidationPipe({
        transform: true,
        whitelist: true,
    }),
);
```

## Guard
#### https://docs.nestjs.com/microservices/guards
This is like a bodyguard that watch every request and send `true/false`. Works in junction with `isPublic` decorator. 

## Decorators
#### https://docs.nestjs.com/custom-decorators#custom-route-decorators
I've created a public decorator that set a flag into request context for mark an endpoint as public (skip guard check).

## Open Api
#### https://docs.nestjs.com/openapi/introduction
The configuration is into `main.ts`, currently mounted on `/documentation` path

## Exception Filter (Domain Exception)
#### https://docs.nestjs.com/exception-filters
you can edit this configuration (and extend it) by looking into `exceptions` folder.


## Additional Documentation Info
- #### [Logger Class](https://docs.nestjs.com/techniques/logger)
- #### [Mongoose](https://docs.nestjs.com/recipes/mongodb#mongodb-mongoose)
- #### [TypeORM](https://docs.nestjs.com/recipes/sql-typeorm)
- #### [WebSocket](https://docs.nestjs.com/websockets/gateways)
- #### [Terminus](https://docs.nestjs.com/recipes/terminus)
