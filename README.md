# API with Patterns

**API that focuses to try to implements these patters: Factory, Command, Repository.**

<br>

# Environment Variables

To run this project, you will need to add the following environment variables to your .env

<br>

| VARIABLES     | EXAMPLE VALUES |
| ------------- | -------------- |
| `DB_DIALECT`  | mysql          |
| `DB_HOST`     | localhost      |
| `DB_USERNAME` | admin          |
| `DB_PASSWORD` | admin          |
| `DB_DATABASE` | api            |
| `PORT`        | 3333           |

<br>

# How to run **Locally**

Clone the project

```
  git clone https://github.com/jeanrabello/ApiWithPatterns.git
```

Enter the project directory

```
  cd ApiWithPatterns
```

Install dependencies

```
  npm install
  yarn
```

Create database tables

```
  npm run migrate
  yarn migrate
```

Run seeds

```
  npm run seed
  yarn seed
```

Run server

```
  npm run dev
  yarn dev
```
