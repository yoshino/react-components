# README

## Setup

```
docker compose build
docker compose run backend rails db:create
```

## Start at Local

```
docker compose up
```

backend(Ruby on Rails) works on 3000 port.  
frontend(Next.js) works on 4000 port.

## Lint and Format

RuboCop for Rails.

```
docker compose run backend rubocop
```

Lint for Next.js

```
docker compose run yarn lint
```

Format for Next.js

```
docker compose run yarn format
```

## Test

RSpec for Rails.

```
docker compose bundle exec rspec
```
