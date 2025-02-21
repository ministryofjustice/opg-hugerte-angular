# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The HugeRTE Angular component 1.0.0 is based on the TinyMCE Angular component 9.0.0-rc. Unreleased changes from Tiny made after their 8.0.1 release are included in this changelog.

## 1.0.0 - 2025-02-21

### Fixed
- Updated dependencies.

### Changed
- HugeRTE dependency is an optional peer dependency.
- The prefix for the uuid-based default editor ID has been changed from `tiny-angular` to `hugerte-angular`.
- The `TINYMCE_SCRIPT_SRC` injection token has been renamed to `HUGERTE_SCRIPT_SRC`.

### Removed
- Removed `apiKey` prop.
- Removed `licenseKey` prop.
- Removed `cloudChannel` prop.

### Added
- Added `cdnVersion` prop.
- `onCommentChange` is now considered a valid event, although it probably comes from a TinyMCE premium plugin anyway.
