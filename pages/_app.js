import Head from 'next/head'

import { Icon } from '../components/Icon'
import { Link } from '../components/Link'

import '../public/global.css'

export default function App({ Component, pageProps }) {
  let children
  if (pageProps.markdoc) {
    children = (
      <main>
        <h1>{pageProps.markdoc.frontmatter.title}</h1>
        <Component {...pageProps} />
        <footer>
          <p className="small">
            <hr />© 2016–{new Date().getFullYear()} Mike Fix 🤙🏻
            <br />
            <Link href="https://github.com/mfix22/mikefix.me">
              Open-source
            </Link>{' '}
            and powered by <Link href="https://markdoc.dev">Markdoc</Link>
          </p>
        </footer>
      </main>
    )
  } else {
    children = <Component {...pageProps} />
  }

  return (
    <>
      <Head>
        <title>Mike Fix</title>
        <link
          href="https://fonts.googleapis.com/css?family=Potta+One"
          rel="stylesheet"
        />
      </Head>
      <script src="https://unpkg.com/ionicons@4.4.2/dist/ionicons.js" />
      {children}
    </>
  )
}
