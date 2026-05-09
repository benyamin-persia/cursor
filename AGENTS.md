# AGENTS.md

## Cursor Cloud specific instructions

Node.js/TypeScript Express project. Node v22 via nvm, npm as package manager.

### Quick reference

| Action  | Command        |
|---------|----------------|
| Install | `npm install`  |
| Dev     | `npm run dev`  |
| Build   | `npm run build`|
| Lint    | `npm run lint` |
| Test    | `npm test`     |

### Notes

- Dev server (`npm run dev`) uses `tsx watch` for hot-reload on port 3000 (override with `PORT` env var).
- Build (`npm run build`) compiles TypeScript to `dist/` via `tsc`.
- Lint uses ESLint 9 flat config (`eslint.config.mjs`) with `typescript-eslint`.
- Tests use Jest with `ts-jest` preset; test files live alongside source as `*.test.ts`.
