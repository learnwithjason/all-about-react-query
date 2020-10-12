## What is this?

It's an example repo I used to teach a workshop about React Query!

- The `main` branch contains the initial code we started with
- The `with-react-query` branch contains the code we ended with after adding `react-query`
- The #2 PR currently open in the repo shows the changes between the two

## Challenges

- Convert the custom hooks used to fetch data to use `useQuery`
- Implement per-screen background fetching indicators
- Convert the custom hooks used to create/update/delete to use `useMutation`
- Configure mutations to automatically invalidate related queries
- Implement optimistic updates for mutations
- Prefetch individual posts on hover using `queryCache.prefetchQuery` OR
- Use `initialData` to show placeholder content for individual posts that pull from the parent `posts` query
- Remove per-screen background fetching indicators and instead build a global refetching indicator
- Dehydrate/hydrate the cache to and from localStorage using the `react-query/hydration` APIs

## How do I develop on this?

- Run `yarn` and then `yarn dev` locally.
- The Next.js API server is an in-memory local server, so the data is not actually persisted to disk. The posts that are stored or altered will be reset when the server restarts or when a file is saved and the server is recompiled.
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Why Next.js?

[Read This 😁](https://gist.github.com/tannerlinsley/65ac1f0175d79d19762cf06650707830)
