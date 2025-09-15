# MOJ’s Forked HugeRTE Angular Component

This package is a fork of [Official HugeRTE Angular](https://github.com/hugerte/hugerte-angular), a wrapper to make it easier to include [HugeRTE](https://github.com/hugerte/hugerte) in an Angular application.

## Why this fork?

The upstream HugeRTE Angular project does not publish a ready-to-install **`dist`** package.  
To make it consumable inside OPG projects, we:

1. Forked the Angular wrapper here:  
   - [ministryofjustice/opg-hugerte-angular](https://github.com/ministryofjustice/opg-hugerte-angular)

2. Build the package locally with `yarn build`.

3. Copy the generated `dist/` output into a separate repo:  
   - [ministryofjustice/opg-hugerte-angular-dist](https://github.com/ministryofjustice/opg-hugerte-angular-dist)  
   This repo acts as the “packaged” distribution for use in our projects.

This approach means we maintain a reproducible build process, while still being able to install the package directly via GitHub.

---

## Development workflow

If you need to make changes to the Angular wrapper:

1. Clone this repo (`opg-hugerte-angular`).
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Build the package:
   ```bash
   yarn build
   ```
4. Copy the contents of `dist/` into the `opg-hugerte-angular-dist` repo and commit them there.

The `opg-hugerte-angular-dist` repo is what gets referenced as the installable package.

---

## Installation

In downstream projects, install directly from the dist repo using GitHub + semver tags:

```json
"dependencies": {
  "@hugerte/hugerte-angular": "github:ministryofjustice/opg-hugerte-angular-dist#semver:v1.0.3"
}
```

Replace `v1.0.3` with the tag or version you want to use.

Then install:

```bash
yarn install
```

---

## Usage

Once installed, import the HugeRTE Angular module into your Angular app as you would with the original package:

```ts
import { HugeRteModule } from '@hugerte/hugerte-angular';

@NgModule({
  imports: [HugeRteModule, ...],
  ...
})
export class AppModule {}
```

---

## Notes

- **Keep both repos**:  
  - `opg-hugerte-angular` → the source code fork (what you modify).  
  - `opg-hugerte-angular-dist` → the packaged build (what you install).  
- The dist repo exists because upstream does not publish a compiled distribution.  
- Always run `yarn build` in this repo before updating the dist repo.  
- Use **semver tags** in the dist repo to make upgrades predictable across projects.
