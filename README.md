# Next.js 15 App Router: Server Component Issue

This repository demonstrates an unexpected behavior encountered when using server components in conjunction with client components within the Next.js 15 app directory.  The issue revolves around data fetching and component rendering inconsistencies.

## Description

The original code (bug.js) showcases a simple app using server and client components.  However, under certain conditions,  data fetched in the server component doesn't properly update the client component's display, leading to stale data or unexpected rendering behavior.

The solution (bugSolution.js) provides a workaround or correction to the issue, explaining the underlying cause and how to fix it.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the unexpected behavior in the browser.
5. Compare with the solution provided in `bugSolution.js`.