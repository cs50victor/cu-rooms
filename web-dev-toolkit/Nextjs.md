# Next.js rendering and data fetching

- static generation [SSG] (getStatic props) -> render ALL pages at BUILD time i.e Blog

  - this is what Gatsby does, generates all static pages to html
  - getStaticPaths() - tells next which dynamic pages to render, which routes are associated to a dynamic route
  -

- server-side rendering [SSR] (getServerSideProps) -> at request time . for rapidly changing data pages
  - slower and inefficient data caching
  - page data refreshes when you refresh the page or reload
  - a good example is ebay, where listing are constantly changing
  - server/ database heavy-ish, fetch data on each request
- Increment static generation [ISR] (getStaticProps with revalidate)

  - static generation but the data keeps updating after a number of seconds
  - http request header, update the cache and revalidate

- Client side-rending [CSR] , just like your normal react
  - only loads after JS hits the client browser
  - not always optimal

# Tips to know

- you can use some data fetching methods in combination
- all pages go through the \_app.js file before build
