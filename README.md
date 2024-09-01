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

`Initial App Setup`:

To speed up the initial setup, I utilized my [starter web application](https://github.com/gianlucasudano/web-dev-lab).
While this allowed for more time to understand the integration of dependencies required for this home task, it did result in some unnecessary dependencies and unused features being included.

* **Pros**: Environment was ready to use and based on my previous expertise.
* **Cons**: Some unnecessary dependencies and features are not used or useless for this kind of project.

`Folder Structure`:

I followed a conventional approach to ensure separation of concerns, scalability, and easy management and accessibility of resources.

* **Pros**: Ensures easy management and accessibility of resources.
* **Cons**: No cons

`UI and Use of Third-Party Libraries`:

I used ready-made components, combining those in customized components.

* **Pros**: Speeds up implementation and allows for focus on the main task.
* **Cons**: There is a small risk associated with the use of external libraries, such as annoying problems or difficulties with profiling.

`Testing`:

I used React Testing Library and Vitest, which is recommended by most known frameworks.

* **Pros**: Ensures the quality of the app and provides a reliable testing framework.
[Vitest](https://vitest.dev/guide/comparisons.html#jest)

* **Cons**: no cons

## Tasks-Prioritization

To begin with, my goal was to render the layers and map using hard-coded data. To achieve this, I followed a structured approach that involved defining the initial props input for layers, followed by the initial props for DeckGL. I also defined constant values and types to ensure consistency throughout the codebase.

This approach helped me to proceed safely and avoid common issues that can arise from simple typographical errors. Additionally, by using clear rules and guidelines, I was able to work efficiently and avoid frustrating issues that could have slowed down progress.

Throughout the implementation process, I gradually added the required features, optimized the code, added the missing tests, and refactored or adjusted pieces of code that were not consistent.

As a result of these efforts, the final outcome is a rendered map with all layers displayed on the homepage. The map is also controlled by three different controls, providing users with a smooth and user-friendly experience.

## Issues and how I resolved

*`Error 401 using the default value of API_BASE_URL`*

One issue I encountered during development was an error 401 when using the default value of API_BASE_URL. I discovered that there are different API base URLs available, and the one to be used is associated with the account created in the Carto app.

Initially, this was not clear to me, as it was not mentioned in the documentation. However, I was able to identify the correct URL by observing the network call in the public share version of the app.

I later discovered that the API base URL is available in the developer's area of the Carto app! 🙃

*`ERR_REQUIRE_ESM`*

I also faced an issue with an ERR_REQUIRE_ESM error while working on the project. This error occurred due to the imported files by dependencies using the "require" syntax instead of "import" as modules.

To resolve this issue, I researched and found a solution on the web, which I then applied to my codebase. By implementing the solution, I was able to successfully address the error and continue with the project.

## Things that could be improved

There are a couple of areas in the project that could be improved.

Firstly, the **LayerStepsSlider** component could benefit from better handling of the **onChange** event, as there is currently a potential issue with continuous executions of the callback function. This could be resolved by debouncing the event. While the Material UI Slider component does expose an API called **onChangeCommitted**, using it converts the component to an uncontrolled one and generates a warning in the console. Therefore, alternative solutions should be explored.

Secondly, there is an issue with the profiling of the Slider component, which causes it to re-render each time the user interacts with the map and performs an action such as zooming in or out.

Additionally, the readability of the **Home** file could be improved by reducing the amount of code. For example, the **handleOnChangeCommitted** function could be moved outside of the **Home** component, and each **LayerController** could be moved to a separate file or a higher-order component that receives a renderer function could be used instead. This would help to improve the organization and structure of the codebase.

## Feedback about the test

Overall, I really enjoyed the test and found it to be a positive experience. It increased my curiosity about the challenges of working in Carto and offered an initial idea of the types of challenges that may be encountered.

I appreciated the honesty of the test and the fact that it allowed me to learn new things and practice my existing skills. Overall, it was a great opportunity to showcase my abilities and demonstrate my passion for programming.

# Installation

Download, or clone the repo in one folder and install packages.

```bash
To install dependencies use `npm install`
```

# Usage

To run the app, open your terminal and execute the command `npm run dev`. Once the app has started, you should see something similar to the following.
###  Runs the app `npm run dev`
```bash
     VITE v4.1.1  ready in 643 ms
      ➜  Local:   http://localhost:5173/
      ➜  Network: use --host to expose
      ➜  press h to show help
```

#
### Navigates on the browser `http://localhost:5173`
Once the app and the server are running, open a browser and visit this page: http://localhost:5173
#
To run all tests, open a new tab in your terminal and execute the command `npm run test`. Once the tests has executed, you should see something similar to the following.
### Runs the tests `npm run test`
``` bash
    ✓ src/pages/Example/ErrorCard.test.tsx (1)
    ✓ src/pages/Example/AddData.test.tsx (2) 801ms
    ✓ src/pages/Example/DataDisplay.test.tsx (3) 791ms
    ✓ src/App.test.tsx (2)

    Test Files  4 passed (4)
         Tests  8 passed (8)
      Start at  18:50:49
      Duration  5.92s (transform 227ms, setup 3.52s, collect 7.34s, tests 1.75s)


    PASS  Waiting for file changes...
          press h to show help, press q to quit
```

You can see an online version at this address https://gs-carto-map.vercel.app/

## The project utilized the following tools/dependencies:

- "vite": https://vitejs.dev/
- "vitest": https://vitest.dev/
- "react": https://reactjs.org/
- "typescript": https://www.typescriptlang.org/
- "testing-library": https://testing-library.com/
- "Carto Layer": https://deck.gl/docs/api-reference/carto/carto-layer
- "DeckGL react": https://deck.gl/docs/api-reference/react/deckgl
- "Deck core": https://deck.gl/docs/api-reference/core/deck
- "Deck layers": https://deck.gl/docs/api-reference/layers
- "react-map-gl v5": https://deck.gl/docs/api-reference/carto/basemap
- "MUI": https://mui.com/
- "mui-color-input": https://viclafouch.github.io/mui-color-input/
