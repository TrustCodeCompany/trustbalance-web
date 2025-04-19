# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
Update

```
TrustBalance
├─ .babelrc
├─ .husky
│  ├─ _
│  │  ├─ applypatch-msg
│  │  ├─ commit-msg
│  │  ├─ h
│  │  ├─ husky.sh
│  │  ├─ post-applypatch
│  │  ├─ post-checkout
│  │  ├─ post-commit
│  │  ├─ post-merge
│  │  ├─ post-rewrite
│  │  ├─ pre-applypatch
│  │  ├─ pre-auto-gc
│  │  ├─ pre-commit
│  │  ├─ pre-merge-commit
│  │  ├─ pre-push
│  │  ├─ pre-rebase
│  │  └─ prepare-commit-msg
│  └─ pre-commit
├─ .prettierrc.json
├─ README.md
├─ coverage
│  ├─ clover.xml
│  ├─ coverage-final.json
│  ├─ lcov-report
│  │  ├─ base.css
│  │  ├─ block-navigation.js
│  │  ├─ favicon.png
│  │  ├─ index.html
│  │  ├─ prettify.css
│  │  ├─ prettify.js
│  │  ├─ sort-arrow-sprite.png
│  │  ├─ sorter.js
│  │  └─ src
│  │     ├─ App.tsx.html
│  │     ├─ TestComponent.tsx.html
│  │     ├─ components
│  │     │  ├─ Hello.tsx.html
│  │     │  ├─ Hello2.tsx.html
│  │     │  ├─ Hello3.tsx.html
│  │     │  └─ index.html
│  │     ├─ config
│  │     │  └─ jest
│  │     │     ├─ index.html
│  │     │     └─ setupTests.ts.html
│  │     ├─ index.html
│  │     ├─ main.tsx.html
│  │     └─ vite-env.d.ts.html
│  └─ lcov.info
├─ eslint.config.js
├─ index.html
├─ jest.config.ts
├─ jest.setup.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ login-image.png
│  ├─ register-image.jpg
│  └─ vite.svg
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  └─ ErrorBoundary.tsx
│  ├─ config
│  │  └─ jest
│  │     └─ setupTests.ts
│  ├─ index.css
│  ├─ main.tsx
│  ├─ modules
│  │  ├─ auth
│  │  │  ├─ __tests__
│  │  │  │  ├─ components
│  │  │  │  ├─ mocks
│  │  │  │  │  └─ MockAuthRepository.ts
│  │  │  │  └─ pages
│  │  │  │     └─ LoginPage.test.tsx
│  │  │  ├─ adapters
│  │  │  │  └─ ApiAuthAdapter.ts
│  │  │  ├─ components
│  │  │  │  ├─ LoginForm.tsx
│  │  │  │  ├─ LoginResult.tsx
│  │  │  │  └─ RegisterForm.tsx
│  │  │  ├─ context
│  │  │  │  └─ authStore.ts
│  │  │  ├─ entities
│  │  │  │  └─ User.ts
│  │  │  ├─ infrastructure
│  │  │  │  └─ ApiAuthRepository.ts
│  │  │  ├─ pages
│  │  │  │  ├─ LoginPage.tsx
│  │  │  │  └─ RegisterPage.tsx
│  │  │  ├─ repositories
│  │  │  │  └─ AuthRepository.ts
│  │  │  ├─ schemas
│  │  │  │  ├─ loginSchema.ts
│  │  │  │  └─ registerSchema.ts
│  │  │  └─ usecases
│  │  │     └─ LoginUseCase.ts
│  │  ├─ dashboard
│  │  │  ├─ __tests__
│  │  │  │  ├─ components
│  │  │  │  │  ├─ AvatarMenu.test.tsx
│  │  │  │  │  ├─ Footer.test.tsx
│  │  │  │  │  ├─ Sidebar.test.tsx
│  │  │  │  │  └─ TopMenu.test.tsx
│  │  │  │  └─ pages
│  │  │  │     └─ DashboardPage.test.tsx
│  │  │  ├─ components
│  │  │  │  ├─ AvatarMenu.tsx
│  │  │  │  ├─ Footer.tsx
│  │  │  │  ├─ Sidebar.tsx
│  │  │  │  ├─ TopMenu.tsx
│  │  │  │  └─ index.ts
│  │  │  └─ pages
│  │  │     ├─ DashboardPage.tsx
│  │  │     └─ index.ts
│  │  └─ pets
│  │     ├─ __tests__
│  │     │  ├─ components
│  │     │  └─ pages
│  │     ├─ adapters
│  │     │  └─ ApiPetAdapter.ts
│  │     ├─ context
│  │     │  └─ PetStore.ts
│  │     ├─ entities
│  │     │  └─ Pet.ts
│  │     ├─ infrastructure
│  │     │  └─ ApiPetRepository.ts
│  │     ├─ repositories
│  │     │  └─ PetRepository.ts
│  │     └─ usecases
│  │        ├─ AddPetUseCase.ts
│  │        ├─ DeletePetUseCase.ts
│  │        ├─ GetPetsUseCase.ts
│  │        └─ UpdatePetUseCase.ts
│  ├─ routes
│  │  └─ index.tsx
│  ├─ setupTests.ts
│  ├─ types
│  │  └─ global.d.ts
│  └─ vite-env.d.ts
├─ test
│  └─ __mocks__
│     └─ fileMock.js
├─ tree-maker
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```