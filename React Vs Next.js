// React vs Next.js — core questions (explained + short code)
// 1) What’s the difference between SSR and CSR?

// Answer (short):

// CSR (Client-Side Rendering): Browser downloads JS, runs it, renders UI. First paint can be slow and SEO is weaker for crawlers if content is JS-only.

// SSR (Server-Side Rendering): Server renders HTML for the initial request and sends that HTML to client. Faster first paint and better SEO. Client still hydrates afterward.

// Why it matters: SSR improves first meaningful paint and SEO; CSR keeps more logic on client and may be more interactive afterward.
// i.e:
// CSR: index.html -> bundle.js -> React renders in browser
// SSR: server renders HTML -> browser receives HTML -> React hydrates


// 2) When would you use Next.js over plain React?

// Answer: Use Next.js when you want built-in routing, SEO-friendly pages (SSR/SSG), file-based routing, or server code (API routes) within the same app. Use plain React for pure-SPA client-only apps or when you have a separate backend and simple static hosting.

// Concrete cases:

// Marketing site, blogs, e-commerce: Next.js (SSG/SSR)

// Internal dashboard with heavy client interactions and no SEO needs: React SPA might be fine.


// 3) How does static site generation (SSG) differ from server-side rendering (SSR)?

// Answer:

// SSG: Pages are generated at build time into static HTML. Fast, scalable. Good for content that doesn’t change often.

// SSR: Pages are generated on each request (server renders HTML every time). Good for real-time or user-specific content.

// Next.js examples:

// // pages/posts/[id].js

// // SSG (build-time)
// export async function getStaticProps({ params }) {
//   const post = await fetchPost(params.id);
//   return { props: { post } }
// }
// export async function getStaticPaths() {
//   return { paths: [{ params: { id: '1' } }], fallback: false }
// }

// // SSR (per-request)
// export async function getServerSideProps({ params }) {
//   const post = await fetchPost(params.id);
//   return { props: { post } }
// }

// 4) How do you handle dynamic routes in Next.js?

// Answer: Use file-based routing with brackets. Example: pages/posts/[id].js or nested like pages/users/[userId]/settings.js. Use getStaticPaths (for SSG) or getServerSideProps (for SSR) to fetch data for dynamic params.

// Example: pages/users/[id].js — params.id gives the route param.
// Example: pages/(admin)/dashboard.js will be accessible at /dashboard, not /admin/dashboard.
//() used for neglecting segments in the URL structure.


// 5) What happens during hydration?

// Answer: Browser receives server-rendered HTML.
// React then attaches event listeners and "hydrates" the already-present DOM
// so it becomes interactive. If server and client markup differ, React may log warnings and re-render parts.
// -Hydration is when React converts the pre-rendered HTML from the server into a fully interactive application by attaching event handlers.

// ===============================Note=====================
// server side component cannot use browser apis like localStorage, window, document etc.
// because these apis are not available on the server side.
// They are only available in the browser environment. Attempting to use
// these apis in a server component will result in errors during server-side rendering.

// example
// we cannot use localStorage in server component.
// so we cannot use jwt in localStorage we use cookies instead.
