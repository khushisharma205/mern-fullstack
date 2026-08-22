# Complete React & Full-Stack Development Handbook  
**Detailed Table of Contents with Subfolder Projects**

Each subfolder listed below is a **React Vite project** (except where noted) that covers the specific concepts of that module. The projects are designed to be hands-on and incremental, building a strong foundation from prerequisites to full-stack development.

---

## Module 00: Prerequisites · HTML · CSS · JavaScript · Projects  
*(These projects use React Vite as a playground to practice foundational web technologies within a component environment.)*

| Subfolder | Description |
|-----------|-------------|
| `00-01-html-basics` | Semantic HTML, forms, tables, multimedia, accessibility attributes. |
| `00-02-css-fundamentals` | Selectors, box model, units, positioning, display, z-index. |
| `00-03-css-flexbox-grid` | Flexbox and CSS Grid layouts with practical examples. |
| `00-04-css-responsive-design` | Media queries, mobile-first design, fluid typography, viewport units. |
| `00-05-css-animations-transitions` | CSS transitions, keyframe animations, transforms. |
| `00-06-js-fundamentals` | Variables, data types, operators, control flow, loops. |
| `00-07-js-functions-scope` | Function declarations, expressions, arrow functions, scope, closures. |
| `00-08-js-arrays-objects` | Array methods, object manipulation, destructuring, spread/rest. |
| `00-09-js-dom-manipulation` | DOM API, selecting elements, events, creating/removing nodes (using `useRef`/`useEffect` for demonstration). |
| `00-10-js-async` | Callbacks, promises, async/await, fetch, error handling. |
| `00-11-js-modules` | ES modules, import/export, default and named exports. |
| `00-12-prereq-projects` | Small integrated projects: todo list, calculator, quiz app (built with vanilla JS concepts inside React). |

---

## Module 01: React Setup

| Subfolder | Description |
|-----------|-------------|
| `01-01-vite-setup` | Creating a Vite project, folder structure, `main.jsx`, `App.jsx`, dev server. |
| `01-02-jsx-basics` | JSX syntax, embedding expressions, attributes, self-closing tags, comments. |
| `01-03-components-intro` | Functional components, importing/exporting components, rendering. |
| `01-04-reactdom-render` | `ReactDOM.createRoot`, `render`, `StrictMode`, mounting. |
| `01-05-project-structure` | Organizing files, components folder, assets, public folder. |

---

## Module 02: React Fundamentals

| Subfolder | Description |
|-----------|-------------|
| `02-01-functional-components` | Deep dive into functional components, props, default props. |
| `02-02-state-basics` | `useState` hook, updating state, batching behavior, functional updates. |
| `02-03-rendering-lists` | Rendering arrays with `.map()`, importance of keys. |
| `02-04-conditional-rendering` | `if`/`else`, ternary, logical `&&`, conditional components. |
| `02-05-fragments` | `React.Fragment`, shorthand `<>`, avoiding extra DOM nodes. |
| `02-06-composition` | `props.children`, composition vs inheritance, slots pattern. |
| `02-07-props-validation` | PropTypes, defaultProps, type checking. |

---

## Module 03: Events & DOM

| Subfolder | Description |
|-----------|-------------|
| `03-01-event-handling` | Synthetic events, `onClick`, `onChange`, event object. |
| `03-02-event-binding` | Arrow functions in render, binding in class components (brief). |
| `03-03-passing-arguments` | Passing parameters to event handlers. |
| `03-04-form-events` | `onSubmit`, `onChange`, controlled vs uncontrolled inputs. |
| `03-05-keyboard-mouse-events` | `onKeyDown`, `onKeyUp`, `onMouseEnter`, `onMouseLeave`. |
| `03-06-refs-basics` | `useRef` for DOM access, reading values, focusing elements. |
| `03-07-uncontrolled-components` | Using refs to read form values on submit. |

---

## Module 04: Components & Lifecycle

| Subfolder | Description |
|-----------|-------------|
| `04-01-class-components` | Class syntax, `this.state`, `this.setState`, rendering. |
| `04-02-lifecycle-methods` | `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`. |
| `04-03-useeffect-lifecycle` | Mimicking lifecycle with `useEffect` (mount, update, unmount). |
| `04-04-cleanup-effects` | Cleanup functions, subscriptions, timers. |
| `04-05-error-boundaries` | Class-based error boundary component, catching errors. |
| `04-06-higher-order-components` | HOC pattern, enhancing components. |
| `04-07-render-props` | Render prop pattern, sharing logic. |

---

## Module 05: Hooks

| Subfolder | Description |
|-----------|-------------|
| `05-01-usestate-deep-dive` | Lazy initialization, functional updates, object state, multiple states. |
| `05-02-useeffect-deep-dive` | Dependency arrays, infinite loops, fetching data, cleanup. |
| `05-03-usecontext` | Context API with `useContext`, provider, consumer. |
| `05-04-usereducer` | Reducer pattern, dispatch actions, complex state logic. |
| `05-05-usecallback-usememo` | Memoizing functions and values, performance optimization. |
| `05-06-useref-deep-dive` | Mutable ref, storing previous values, `forwardRef`. |
| `05-07-custom-hooks` | Creating reusable hooks, sharing logic across components. |
| `05-08-rules-of-hooks` | Rules, ESLint plugin, conditional hooks pitfalls. |
| `05-09-uselayouteffect` | Synchronous effect, difference from `useEffect`. |
| `05-10-useimperativehandle` | Exposing imperative methods, `forwardRef`. |
| `05-11-usedebugvalue` | Debugging custom hooks in React DevTools. |

---

## Module 06: Advanced State

| Subfolder | Description |
|-----------|-------------|
| `06-01-lifting-state` | Lifting state up, shared state between siblings. |
| `06-02-context-reducer-pattern` | Combining `useReducer` and Context for global state. |
| `06-03-state-normalization` | Normalizing nested data structures, using IDs. |
| `06-04-immutable-updates` | Immutable update patterns for objects and arrays. |
| `06-05-immer-integration` | Using Immer for simpler immutable updates. |
| `06-06-url-state` | Using URL search params as state, `useSearchParams`. |
| `06-07-server-state-intro` | Introduction to server state vs client state, React Query basics. |
| `06-08-state-machines` | XState introduction, finite state machines. |

---

## Module 07: Forms

| Subfolder | Description |
|-----------|-------------|
| `07-01-controlled-forms` | Controlled inputs, text, select, checkbox, radio. |
| `07-02-uncontrolled-forms` | Uncontrolled inputs, `defaultValue`, refs. |
| `07-03-form-validation` | Manual validation, error messages, validation on submit. |
| `07-04-react-hook-form` | Using React Hook Form library. |
| `07-05-formik` | Using Formik library. |
| `07-06-custom-form-hooks` | Building a custom `useForm` hook. |
| `07-07-dynamic-forms` | Adding/removing fields dynamically. |
| `07-08-file-upload` | File input, preview, uploading with FormData. |
| `07-09-multi-step-forms` | Wizard pattern, step navigation, state per step. |

---

## Module 08: API Integration

| Subfolder | Description |
|-----------|-------------|
| `08-01-fetch-api` | Fetching data with `fetch` in `useEffect`, loading/error. |
| `08-02-axios` | Axios setup, interceptors, base URL. |
| `08-03-loading-error-states` | Handling loading, error, success UI states. |
| `08-04-abort-controller` | Cancelling requests, cleanup. |
| `08-05-react-query` | React Query for data fetching, caching, mutations. |
| `08-06-swr` | SWR library for data fetching. |
| `08-07-graphql-intro` | Apollo Client, queries, mutations. |
| `08-08-websockets` | Real-time data with WebSockets (e.g., Socket.IO client). |

---

## Module 09: React Router

| Subfolder | Description |
|-----------|-------------|
| `09-01-basic-routing` | `BrowserRouter`, `Routes`, `Route`, `Link`. |
| `09-02-nested-routes` | Nested routes, `Outlet`, layout routes. |
| `09-03-route-params` | `useParams`, dynamic route segments. |
| `09-04-navigation` | `useNavigate`, `useLocation`, `NavLink` active styles. |
| `09-05-query-params` | `useSearchParams`, reading/writing query strings. |
| `09-06-protected-routes` | Route guards, redirect if not authenticated. |
| `09-07-lazy-loading-routes` | Code splitting with `React.lazy`, `Suspense`. |
| `09-08-404-handling` | Catch-all route, custom 404 page. |
| `09-09-route-transitions` | Animating route changes with Framer Motion. |

---

## Module 10: Authentication & Authorization

| Subfolder | Description |
|-----------|-------------|
| `10-01-jwt-auth` | Login, storing JWT, sending Authorization header. |
| `10-02-protected-routes` | Route guards, redirect on unauthorized. |
| `10-03-role-based-access` | User roles, permissions, conditional rendering. |
| `10-04-refresh-tokens` | Token refresh flow, axios interceptors. |
| `10-05-oauth-social-login` | Google/GitHub OAuth flow (frontend part). |
| `10-06-password-reset` | Password reset flow, email link, new password form. |
| `10-07-auth-context` | AuthProvider, `useAuth` hook, context for user session. |

---

## Module 11: State Management

| Subfolder | Description |
|-----------|-------------|
| `11-01-redux-basics` | Redux store, actions, reducers, `connect`. |
| `11-02-redux-toolkit` | `createSlice`, `configureStore`, `useSelector`, `useDispatch`. |
| `11-03-rtk-query` | Data fetching with RTK Query. |
| `11-04-zustand` | Zustand store, selectors, actions. |
| `11-05-jotai` | Atoms, derived atoms, `useAtom`. |
| `11-06-recoil` | Recoil atoms, selectors. |
| `11-07-mobx` | Observables, actions, reactions, `observer`. |
| `11-08-comparison-context-vs-redux` | When to use Context vs Redux, trade-offs. |

---

## Module 12: Performance Optimization

| Subfolder | Description |
|-----------|-------------|
| `12-01-react-memo` | `React.memo` for preventing re-renders. |
| `12-02-usememo-usecallback-optimization` | Optimizing with `useMemo`, `useCallback`. |
| `12-03-code-splitting-lazy` | Code splitting, `React.lazy`, `Suspense`. |
| `12-04-virtual-lists` | Virtualized lists with `react-window` or `react-virtualized`. |
| `12-05-debounce-throttle` | Custom hooks for debounce/throttle. |
| `12-06-bundle-analysis` | Analyzing bundle size, `source-map-explorer`, `vite-bundle-visualizer`. |
| `12-07-profiling` | React DevTools Profiler, identifying bottlenecks. |
| `12-08-tree-shaking` | ES modules, sideEffects, tree shaking best practices. |

---

## Module 13: Advanced React

| Subfolder | Description |
|-----------|-------------|
| `13-01-portals` | `createPortal` for modals, tooltips, dropdowns. |
| `13-02-forwardref` | Passing refs to child components. |
| `13-03-compound-components` | Tabs, accordion, select components using compound pattern. |
| `13-04-controlled-uncontrolled-patterns` | Flexible components supporting both modes. |
| `13-05-state-reducer-pattern` | `useReducer` for component state logic. |
| `13-06-render-props-advanced` | Advanced render prop usage. |
| `13-07-hoc-advanced` | Advanced HOC patterns, composition. |
| `13-08-context-advanced` | Dynamic context, multiple providers, context selectors. |

---

## Module 14: React Testing

| Subfolder | Description |
|-----------|-------------|
| `14-01-jest-setup` | Configuring Jest with Vite, `vitest` alternative. |
| `14-02-react-testing-library` | `render`, `screen`, queries. |
| `14-03-testing-components` | User events, assertions, testing UI. |
| `14-04-testing-hooks` | `renderHook`, testing custom hooks. |
| `14-05-mocking` | Mocking modules, API calls, `jest.mock`. |
| `14-06-testing-async` | `waitFor`, `findBy`, async testing. |
| `14-07-snapshot-testing` | Snapshot tests, updating snapshots. |
| `14-08-e2e-testing` | End-to-end with Cypress or Playwright (separate setup). |

---

## Module 15: React + TypeScript

| Subfolder | Description |
|-----------|-------------|
| `15-01-ts-setup-vite` | Vite with TypeScript template, config. |
| `15-02-typing-props` | Interfaces for props, `FC`, children. |
| `15-03-typing-state` | `useState` with types, union types. |
| `15-04-typing-events` | Typing event handlers (`ChangeEvent`, `FormEvent`). |
| `15-05-typing-refs` | `useRef` types, `RefObject`. |
| `15-06-typing-context` | Context with TypeScript, provider types. |
| `15-07-typing-hooks` | Typing custom hooks. |
| `15-08-advanced-types` | Generics, utility types, type vs interface. |

---

## Module 16: Modern React

| Subfolder | Description |
|-----------|-------------|
| `16-01-react18-features` | `createRoot`, automatic batching, `flushSync`. |
| `16-02-suspense` | `React.Suspense` for data fetching with `React.lazy` or libraries. |
| `16-03-starttransition` | `useTransition` for non-urgent updates. |
| `16-04-usedeferredvalue` | `useDeferredValue` for deferred rendering. |
| `16-05-concurrent-mode` | Understanding concurrent rendering concepts. |
| `16-06-server-components-intro` | React Server Components (with Next.js or RSC demo). |
| `16-07-streaming-ssr` | Streaming server-side rendering (overview, Next.js). |

---

## Module 17: Styling

| Subfolder | Description |
|-----------|-------------|
| `17-01-css-modules` | Scoped CSS with CSS Modules. |
| `17-02-styled-components` | CSS-in-JS with Styled Components. |
| `17-03-emotion` | Emotion library for CSS-in-JS. |
| `17-04-tailwind-css` | Utility-first CSS with Tailwind. |
| `17-05-sass` | Sass preprocessor, variables, mixins. |
| `17-06-css-in-js-comparison` | Comparing different CSS-in-JS libraries. |
| `17-07-ui-libraries` | Material-UI, Ant Design, Chakra UI usage. |
| `17-08-theming-dark-mode` | Theme context, CSS variables, dark mode toggle. |

---

## Module 18: React Architecture

| Subfolder | Description |
|-----------|-------------|
| `18-01-project-structure` | Feature-based structure, atomic design, folder organization. |
| `18-02-component-design-principles` | SOLID, DRY, component cohesion. |
| `18-03-design-patterns` | Container/presentational, custom hooks pattern, provider pattern. |
| `18-04-dependency-injection` | Using Context for dependency injection, testing benefits. |
| `18-05-reusable-component-library` | Building a small design system, publishing components. |
| `18-06-monorepo-setup` | pnpm workspaces, Turborepo, sharing code. |
| `18-07-micro-frontends` | Module Federation, splitting app into micro frontends. |

---

## Module 19: React Security

| Subfolder | Description |
|-----------|-------------|
| `19-01-xss-prevention` | Escaping output, avoiding `dangerouslySetInnerHTML`. |
| `19-02-sanitization` | Sanitizing HTML with DOMPurify. |
| `19-03-csrf-protection` | CSRF tokens, same-site cookies. |
| `19-04-cors` | Configuring CORS, preflight requests. |
| `19-05-token-security` | Secure token storage, httpOnly cookies, localStorage risks. |
| `19-06-content-security-policy` | Implementing CSP headers. |
| `19-07-dependency-audit` | `npm audit`, Snyk, keeping dependencies secure. |

---

## Module 20: Deployment

| Subfolder | Description |
|-----------|-------------|
| `20-01-build-optimization` | `npm run build`, analyzing bundle, environment variables. |
| `20-02-environment-variables` | `.env`, Vite env variables, mode-specific. |
| `20-03-deploy-vercel` | Deploying to Vercel. |
| `20-04-deploy-netlify` | Deploying to Netlify. |
| `20-05-deploy-aws` | S3 + CloudFront deployment. |
| `20-06-docker` | Containerizing React app with Docker. |
| `20-07-ci-cd` | GitHub Actions for CI/CD. |
| `20-08-ssr-deployment` | Deploying SSR apps (Next.js) on Vercel/Node. |

---

## Module 21: Projects  
*(Each is a larger, full-featured React Vite project integrating all previous concepts.)*

| Subfolder | Description |
|-----------|-------------|
| `21-01-ecommerce-app` | Product listing, cart, checkout, auth, API integration. |
| `21-02-social-media-dashboard` | User feed, posts, likes, comments, profiles. |
| `21-03-task-management-app` | Kanban board, drag-and-drop, CRUD. |
| `21-04-chat-application` | Real-time chat, WebSockets, rooms. |
| `21-05-blog-platform` | Blog posts, Markdown, comments, admin panel. |
| `21-06-portfolio-website` | Portfolio with animations, contact form. |
| `21-07-admin-dashboard` | Data visualization, charts, tables. |
| `21-08-video-streaming-app` | Video list, player, comments (YouTube clone). |
| `21-09-food-delivery-app` | Menu, cart, order tracking. |
| `21-10-real-estate-listing` | Listings, maps, filters. |

---

## Full-Stack Add-On: Express & MongoDB  
*(Each subfolder is a full-stack project with a React Vite frontend and an Express/MongoDB backend.)*

| Subfolder | Description |
|-----------|-------------|
| `FS-01-express-setup` | Express server, routes, middleware, basic API. |
| `FS-02-rest-api-crud` | Building a RESTful API with CRUD operations. |
| `FS-03-mongodb-mongoose` | MongoDB connection, Mongoose models, schema. |
| `FS-04-auth-jwt` | JWT authentication, protected routes, user model. |
| `FS-05-file-upload` | File upload with Multer, storing files. |
| `FS-06-validation-error-handling` | Input validation, error handling middleware. |
| `FS-07-deployment-fullstack` | Deploying frontend and backend (e.g., Vercel + Render). |

---

## Final Cheat Sheet  
| Subfolder | Description |
|-----------|-------------|
| `cheat-sheet` | A React Vite app that displays a comprehensive cheat sheet of React concepts, hooks, patterns, and common snippets. |

## Final Interview Revision  
| Subfolder | Description |
|-----------|-------------|
| `interview-revision` | A React Vite app with flashcards, key concepts, and interview questions for quick revision. |

---

This structure ensures **no topic is missed** and provides a hands-on project for every concept, building from zero to full-stack proficiency.
