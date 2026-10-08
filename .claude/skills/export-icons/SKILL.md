---
name: export-icons
description: Export one or more Font Awesome icons in lib/js/icons/fontawesome.ts — branch, commit, PR, and /build once CI is green.
disable-model-invocation: true
argument-hint: '<icon> [icon...]  e.g. "#FA-7.0/icon-waveform-lines" faHashtag FA_ARROW_RIGHT_TO_DOTTED_LINE'
---

Arguments: $ARGUMENTS

## Reference

### Icon formats

Normalize every argument to a PascalCase **base name** (`ArrowRightToDottedLine`) plus a **style**:

| Input                                                | Base name               | Style                          |
| ---------------------------------------------------- | ----------------------- | ------------------------------ |
| `#FA-7.0/icon-waveform-lines` (Figma)                | strip `#FA-x.y/icon-`, kebab → Pascal | regular, unless the name ends in `-solid` / `-light` / `-duotone` |
| `faArrowRightToDottedLine`                           | drop `fa`               | regular                        |
| `fasX` / `falX` / `fadX`                             | drop prefix             | solid / light / duotone        |
| `FA_ARROW_RIGHT_TO_DOTTED_LINE`                      | SCREAMING_SNAKE → Pascal | regular; `_SOLID` / `_LIGHT` suffix or `FAD_` prefix sets the style |

Arguments may be separated by spaces, commas or newlines.

### Styles

| Style   | Package                                         | Import                                                                 | Key           |
| ------- | ----------------------------------------------- | ---------------------------------------------------------------------- | ------------- |
| regular | `@fortawesome/pro-regular-svg-icons`            | `import { faX } from '…/faX';`                                         | `FA_X`        |
| solid   | `@fortawesome/pro-solid-svg-icons`              | `import { faX as fasX } from '…/faX';`                                 | `FA_X_SOLID`  |
| light   | `@fortawesome/pro-light-svg-icons`              | `import { faX as falX } from '…/faX';`                                 | `FA_X_LIGHT`  |
| duotone | `@fortawesome/pro-duotone-svg-icons`            | `import { faX as fadX } from '…/faX';`                                 | `FAD_X`       |
| brands  | `@fortawesome/free-brands-svg-icons`            | `import { faX } from '…/faX';`                                         | `FA_X`        |

An icon **exists in Font Awesome** when `node_modules/<package>/fa<BaseName>.js` exists. A regular icon missing from regular but present in `free-brands-svg-icons` is a brand icon.

An icon is **already exported** when `lib/js/icons/fontawesome.ts` has its key, or imports `fa<BaseName>` from the same package under any alias.

## Steps

1. **Fresh master.** Run `git status --porcelain`; if anything is listed, stop and ask the user how to handle their changes. Then `git switch master && git pull --ff-only && yarn install --frozen-lockfile`.
   Done when: on `master`, clean tree, level with `origin/master`.

2. **Resolve.** Normalize each argument (see Icon formats). Classify each icon as *already exported*, *missing from Font Awesome*, or *to add*.
   Done when: every argument sits in exactly one class. If nothing is *to add*, report the classes and end the run.

3. **Branch.** Create `add-<kebab-base-name>-icon` (one icon) or `add-<kebab-base-name>-and-more-icons` (several) from master.

4. **Missing icons.** If any icon is *missing from Font Awesome*, tell the user which ones and the closest names from `ls node_modules/<package> | grep -i <word>`, then ask: continue with the remaining icons, or cancel. On cancel: `git switch master`, `git branch -D <branch>`, `git status --porcelain` empty — and end the run.

5. **Add.** For every *to add* icon, insert the import next to its alphabetical neighbour within the same style's imports, and the key in `FONTAWESOME_ICONS` in alphabetical order. `initialize()` registers every key automatically.
   Done when: `git diff` shows one import and one key per *to add* icon, and nothing else.

6. **Format & verify.** `yarn format:fix`, `yarn ts:check`, `npx eslint lib/js/icons/fontawesome.ts`. Revert any file other than `lib/js/icons/fontawesome.ts` that formatting touched.
   Done when: all three exit 0 and only `fontawesome.ts` is modified.

7. **Commit.** Message: ``Add `FA_X` icon`` or ``Add `FA_A`, `FA_B`, and `FA_C` icons`` (keys alphabetical). The commit message is exactly that line — no `Co-Authored-By` or any trailer.

8. **PR.** Push with `git push -u origin <branch>`. Open a PR against `master` titled as the commit, body listing each key → import. Use `gh pr create` if `gh auth status` succeeds, else the GitHub MCP `create_pull_request`. With neither available, report the pushed branch and end the run.

9. **CI → /build.** Wait for checks: `gh pr checks <number> --watch` (or poll the MCP PR status). When every check passes, comment exactly `/build` on the PR (`gh pr comment <number> --body "/build"`). When any check fails, report the failing check and its log link and skip the comment.
   Done when: the `/build` comment is posted, or the failure is reported.

Finish with a summary: added keys, skipped keys (already exported / missing), branch, PR link, CI result.
