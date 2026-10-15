# TRPZ_ANG — Storage Accounting System (Angular frontend)

Angular frontend for a small warehouse/storage accounting app. Bachelor's coursework project (2023), built solo.
The backend lives in a separate repo (`TRPZ`, Rails 7 API).

## What it does

- **Registration** (`/registration`) — reactive form: role (Administrator / Accountant / Employee), username, password (min 6 chars) and a storage picked from a list loaded from the API.
- **Login / logout** (`/login`) — reactive form with validation; header navigation changes depending on login state.
- **Storages** (`/storages`, behind a route guard) — list storages, delete a storage, link to the create form.
- **Create storage** (`/creteStorage`) — template-driven form (name, location).
- **Storage details / goods** (`/goods/:id`) — edit the storage name/location inline; table of commodities with add, inline edit and delete.
- Static **Home** (`/`) and **About** (`/about`) pages; shared header and footer.

## Tech stack

- Angular 15.2 (NgModule-based, CLI 15.2.4), TypeScript 4.9
- RxJS 7.8, `HttpClient`
- Reactive Forms + template-driven forms (`FormsModule`)
- Angular Router with one `CanActivate` guard
- Plain CSS, no UI library
- Karma + Jasmine (CLI-generated specs)

## Structure

```
src/app/
├── app.module.ts / app-routing.module.ts   # single root module, 7 routes, no lazy loading
├── home/ about-us/ my-header/ my-footer/   # layout + static pages
├── login/ registration/                     # auth forms
├── storages/ add-storage-form/ goods/       # storage & commodity CRUD
└── services/
    ├── auth.service.ts            # login/register/logout state
    ├── httpapi.service.ts         # GET users, GET storages
    ├── storage-service.service.ts # storages + commodities CRUD
    └── my-guard.service.ts        # CanActivate for /storages
```

10 components, 3 services, 1 guard, no interceptors.

## Backend API

The base URL is hard-coded (`http://127.0.0.1:3000/api/v1` / `http://localhost:3000/api/v1`); there is no `environments/` config.

| Method | Endpoint | Used for |
|---|---|---|
| GET | `/users.json` | login check, header |
| POST | `/users.json` | registration |
| GET / POST | `/storages.json` | list / create storages |
| PUT / DELETE | `/storages/:id.json` | update / delete storage |
| POST | `/commodities.json` | add commodity |
| PUT / DELETE | `/commodities/:id.json` | update / delete commodity |

## Running locally

Requires Node.js compatible with Angular 15 and the Rails backend running on port 3000 (with CORS allowed for `localhost:4200`).

```bash
npm install
npm start          # ng serve → http://localhost:4200
npm run build      # production build → dist/ang-trpz
npm test           # Karma + Jasmine
```

## Known limitations

This is a student project and is kept as-is. Honest notes:

- **Authentication is client-side only.** Login downloads the full user list from `GET /users.json` and compares the name/password in the browser. No token, session cookie, or Devise endpoint is used by this frontend. Login state is an in-memory flag, so a page reload logs you out.
- Only `/storages` is guarded; `/creteStorage` and `/goods/:id` can be opened directly. The selected role is stored but not enforced anywhere in the UI.
- API URLs are hard-coded; no HTTP interceptor or central error handling.
- Tests are mostly CLI-generated "should create" stubs; several spec files are incomplete. No linter or CI configured.
