# TrainerFinder

TrainerFinder is a centralized platform for personal trainers to find clients, and for users to find personal trainers. We provide trainers a place to set up available schedules that prospective clients can claim and pay for. We will feature a rating system for both users and trainers. This will motivate trainers to provide excellent service and for users to be excellent clients.

## Nucleobase

- Andy Lien
- Tom Cosby
- Chao Zeng
- Gui Choupeaux

## Roadmap

View the project roadmap [here](https://drive.google.com/open?id=10c67TZGKlYZL2NAHgN0q_6UWpl-oV2H2HMFLjHDAPnE)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

# Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)

## Usage

> Some usage instructions

## Requirements

- Node 6.9.x
- Redis 3.2.x
- Postgresql 9.6.x
- etc

## Development

### Installing System Dependencies

```
brew install yarn
brew install redis
brew install postgresql
```

Yarn is a replacement for npm. It's faster and *guarantees* consistency -- as you deploy your code in various environments, you won't run the risk of slight variations in what gets installed.

### Install Project Dependencies

```
yarn global add grunt-cli knex eslint
```

## App Configuration

Override settings `config/default.json` in any environment by making a copy of `config/ENV.example.json` and naming it `config/ENV.json` and setting the appropriate variable. 

For environments that require use of environment variables, you can supply variables as defined in `config/custom-environment-variables.json`.

See https://www.npmjs.com/package/config
And https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables

## Database Initialization

IMPORTANT: ensure `postgres` is running before performing these steps.
```
brew services start postgresql
brew services stop postgresql
```

### Database Creation:
http://gruntjs.com/getting-started
npm install -g grunt-cli
Use grunt to create a new database for your development and test environments:

Development envronment: `grunt pgcreatedb:default`

Other environments, specify like so: `NODE_ENV=test grunt pgcreatedb:default`

### Run Migrations & Data Seeds

In terminal, from the root directory:

To migrate to the latest version, run:

`knex migrate:latest --env NODE_ENV`

To rollback a version, run:

`knex migrate:rollback --env NODE_ENV`

To populate the database with seed data, run:

`knex seed:run --env NODE_ENV`

Note: `--env NODE_ENV` may be omitted for development. For example, `knex migrate:latest` will run all migrations in the development environment, while `knex migrate:latest --env test` will migrate in the test environment.

## Running the App

To run webpack build: `yarn run build`

To run server: `yarn run server-dev`

To run tests: `yarn run test`

To run your redis server for the session store `redis-server`

### Database Command:
https://devcenter.heroku.com/articles/heroku-postgresql#provisioning-heroku-postgres

On local machine:
Connect to postgres:
`psql -h localhost` OR `psql'

Show databases:
`\l'

Connect to db:
`\c thesis_devel`

Show table:
`\dt` OR '\d'

Select:
`select * from profiles;`

Quit:
`\q`

---------------------------------------
On heroku:
Connect to postgres:
`heroku pg:psql --app trainerfinder`

push data from a local database into a remote Heroku Postgres database
`heroku pg:push thesis_devel DATABASE_URL --app trainerfinder`
Pushing thesis_devel ---> postgresql-amorphous-39879

Show databases: prod or staging
`\l dftlpt03rrpdht` or ddq89cunejrqik

Connect to db:
`\c dftlpt03rrpdht`


`heroku pg:credentials --app trainerfinder`

----------------------------------------

log on heroku 
`heroku run bash --app trainerfinder-staging`
`knex migrate:latest`
"postinstall": "grunt pgcreatedb:default & knex migrate:latest & knex migrate:rollback & knex seed:run"

----------------------------------------
Debug server

npm install -g nodemon
npm install -g node-inspector 

nodemon --debug server/index.js
node-inspector



