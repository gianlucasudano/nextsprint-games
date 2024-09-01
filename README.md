# Frontend Developer Test

This project is a technical test designed to evaluate your knowledge of Next.js fundamentals, including:

- Fetching data
- Performing mutations
- Implementing Next.js in-built caching strategies
- Managing cache invalidation
- Handling forms
- TypeScript
- Styling

## Task Overview

You are required to create a layout with basic CRUD functionality using React 18+ and Next.js 14+. The main features of the task include:

- **Game Creation**: Allow users to create games using a form on a separate page.
- **Game List**: Display a list of created games, updating the list as new items are added. The results should be cached and the cache should refresh when new games are added.

### Technical Requirements

- **React 18+**: Utilize the latest features of React.
- **Next.js 14+**: Leverage the full capabilities of Next.js, including server-side rendering and caching strategies.
- **mockapi.io**: Use mockapi.io with fetch API and server actions to handle data retrieval, mutations, caching, and cache invalidation.

### Bonus Points

You can earn bonus points by implementing the following:

1. **Authentication Integration**: Add authentication to the application.
2. **Zod Types and Schemas**: Utilize Zod for form validation and schema handling.
3. **Form Validation**: Implement robust form validation.
4. **Static Page Generation**: Use Next.js static generation features.
5. **Design**: Show a good eye for design and user experience.

## Tech Approach

### Initial App Setup

This project is a [Next.js](https://nextjs.org/) application, initialized using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Project Organization and File Colocation

I adopted a conventional approach to structure the project, ensuring clear separation of concerns, scalability, and straightforward management and access to resources.

- [Next.js File Colocation](https://nextjs.org/docs/app/building-your-application/routing/colocation)

* **Pros**: Facilitates easy management and access to resources.
* **Cons**: None identified.

### UI Components

I created both reusable and non-reusable React components. There is room for improvement, such as removing hardcoded props and reducing the specificity of some components. In other words, certain components could be refactored to be more agnostic, making them more suitable for a growing project.

- **Pros**: Enables the creation of simple components, reducing development time.
- **Cons**: Some components may need to be revisited and made more scalable/extensible.

### Testing [TODO]

Due to time constraints, I was unable to implement testing. However, I would have liked to add unit tests, particularly for components that involve conditional rendering based on API call states.

I would have used React Testing Library, MSW, and Vitest, which are recommended by most popular frameworks.

## Tasks Prioritization

### Initial Approach

The initial approach focused on research. After carefully reading through the task requirements, I explored online documentation to identify the technologies I needed to use. I then attempted to draft a preliminary work plan. However, I deviated from this plan because I had limited hours available during the first few days of work. Instead of tackling potentially more challenging problems first, I began with tasks where I felt more confident.

### Original Plan:

- **Day 1-2**: Setup and creation of main pages.
- **Day 3-4**: Implementation of CRUD functionality and caching management.
- **Day 5**: Styling and implementation of optional bonus features.
- **Day 6**: Final testing and publication.

### Updated Plan (Broad Outline):

- Initial setup
- Creation of basic interactive components and pages
- Navigation component and its integration into the layout
- Game card component
- Game card list, action functions, fetch API (GET, POST, DELETE)
- Creation of the form to add new games
- Managed page layout with responsive behavior

## Issues and how I resolved

### TypeError: `(0 , react__WEBPACK_IMPORTED_MODULE_1__.useActionState) is not a function or its return value is not iterable`

One issue I encountered during development was related to the use of the `useActionState` hook. Unfortunately, the official documentation and examples did not provide a solution, or perhaps I didn't search thoroughly enough.

I finally found a solution to the problem in a thread on GitHub:
[GitHub Issue #65673 - Comment](https://github.com/vercel/next.js/issues/65673#issuecomment-2112746191)

## Things That Could Be Improved

There are several aspects that could be improved before a potential production release. Here is a TODO list of the key areas:

- Remove unused CSS declarations.
- Add unit tests, at least for the `add-game-form` component.
- Refine data and form validation, particularly for the delete action and the `removable-card` component.
- Update project icons (favicons).

## Feedback about the test

Overall, I really enjoyed the test and found it to be a positive experience. It increased my curiosity about the challenges of working in NETX SPRINT and offered an initial idea of the types of challenges that may be encountered.

I appreciated the honesty of the test and the fact that it allowed me to learn new things and practice my existing skills. Overall, it was a great opportunity to showcase my abilities and demonstrate my passion for programming.

# Installation

Download, or clone the repo in one folder and install packages.

```bash
To install dependencies use `npm i`
```

Create a file .env.local, based on the model .env.local.example, and add your MOCKAPI_PROJECT_TOKEN

```bash
MOCKAPI_PROJECT_TOKEN = ''
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The Project Utilized the Following Tools/Dependencies

### Dependencies
- **[Next.js 14.2.6](https://nextjs.org/):** A React framework that enables server-side rendering and static site generation.
- **[React 18.3.1](https://reactjs.org/):** A JavaScript library for building user interfaces.
- **[React DOM 18.3.1](https://reactjs.org/docs/react-dom.html):** Serves as the entry point to the DOM and server renderers for React.
- **[Zod ^3.23.8](https://zod.dev/):** A TypeScript-first schema declaration and validation library.

### Dev Dependencies
- **[@types/node ^20](https://www.npmjs.com/package/@types/node):** Type definitions for Node.js.
- **[@types/react 18.3.0](https://www.npmjs.com/package/@types/react):** Type definitions for React.
- **[@types/react-dom 18.3.0](https://www.npmjs.com/package/@types/react-dom):** Type definitions for React DOM.
- **[ESLint ^8](https://eslint.org/):** A pluggable linting utility for JavaScript and JSX.
- **[eslint-config-next 14.2.6](https://www.npmjs.com/package/eslint-config-next):** ESLint configuration used by Next.js.
- **[TypeScript ^5](https://www.typescriptlang.org/):** A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.


## Resources / Links / Documentation

### Next.js Documentation
- [Next.js Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)
- [Server Actions and Mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [Routing and Colocation](https://nextjs.org/docs/app/building-your-application/routing/colocation)
- [Optimizing Fonts](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Static Site Generation](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)

### React Documentation
- [React Server Actions](https://react.dev/reference/rsc/server-actions)

### Tutorials and Examples
- [Next.js Forms Example (GitHub)](https://github.com/vercel/next.js/tree/canary/examples/next-forms)
- [YouTube - Next.js Data Fetching Strategies](https://www.youtube.com/watch?v=dDpZfOQBMaU)
- [YouTube - Next.js Caching Strategies](https://www.youtube.com/watch?v=9UCoVM6QhnU)
- [Blog - Next.js Caching Strategies for Optimal Performance](https://nextjsstarter.com/blog/nextjs-caching-strategies-for-optimal-performance/)

### Tools
- [MockAPI](https://mockapi.io/)

### Issue Resolution
- [GitHub Issue - useActionState Error](https://github.com/vercel/next.js/issues/65673#issuecomment-2112746191)

