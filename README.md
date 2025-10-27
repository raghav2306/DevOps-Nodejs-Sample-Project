# Sample Node.js TypeScript Express Project

This README provides step-by-step instructions to **initialize**, **build**, **test**, and **run** a Node.js project using TypeScript and Express.

---

## 📦 Prerequisites

* Node.js (v18 or newer recommended)
* npm (comes with Node.js) or yarn/pnpm

Check versions:

```bash
node -v
npm -v
```

---

## 🚀 Project Initialization

1. Initialize project with `npm init`:

   ```bash
   mkdir sample-express-ts
   cd sample-express-ts
   npm init -y
   ```

2. Install dependencies:

   ```bash
   npm install express
   ```

3. Install dev dependencies:

   ```bash
   npm install -D typescript ts-node @types/node @types/express nodemon jest ts-jest @types/jest
   ```

4. Initialize TypeScript:

   ```bash
   npx tsc --init
   ```

   Update `tsconfig.json` for Node.js/Express (common settings):

   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "module": "commonjs",
       "outDir": "dist",
       "rootDir": "src",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true
     }
   }
   ```

5. Add `src/` folder and create `src/index.ts`:

   ```ts
   import express, { Request, Response } from 'express';

   const app = express();
   const port = process.env.PORT || 3000;

   app.get('/', (req: Request, res: Response) => {
     res.send('Hello from Express + TypeScript!');
   });

   app.listen(port, () => {
     console.log(`🚀 Server running on http://localhost:${port}`);
   });
   ```

---

## 🛠️ Scripts (add to `package.json`)

```json
"scripts": {
  "dev": "nodemon --watch src -e ts --exec ts-node src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js",
  "test": "jest"
}
```

---

## 🧪 Testing Setup

1. Configure Jest for TypeScript:

   ```bash
   npx ts-jest config:init
   ```

2. Example test (`src/index.test.ts`):

   ```ts
   describe('Sample test', () => {
     it('should pass', () => {
       expect(2 + 2).toBe(4);
     });
   });
   ```

3. Run tests:

   ```bash
   npm test
   ```

---

## ▶️ Running the Project

* Development mode (auto-reload with nodemon):

  ```bash
  npm run dev
  ```

* Production mode (after build):

  ```bash
  npm run build
  npm start
  ```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📂 Typical Project Structure

```
sample-express-ts/
├── src/
│   ├── index.ts        # app entrypoint
│   ├── index.test.ts   # example test
├── dist/               # compiled JS output
├── tsconfig.json
├── package.json
├── jest.config.js
└── README.md
```

---

## 🐳 (Optional) Docker Setup

`Dockerfile` example:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build & run:

```bash
docker build -t sample-express-ts .
docker run -p 3000:3000 sample-express-ts
```

---

## Summary

* `npm run dev` → run in development
* `npm run build` → compile TypeScript
* `npm start` → run built app
* `npm test` → run tests

This setup is ready for CI/CD integration.
