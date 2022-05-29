import Head from 'next/head'

import { Icon } from '../components/Icon'

import '../public/global.css'

export default function App({ Component, pageProps }) {
  let children
  if (pageProps.markdoc) {
    children = (
      <>
        <nav>
          <Icon href="https://twitter.com/fixitup2" name="logo-twitter" />
          <Icon href="https://github.com/mfix22" name="logo-github" />
        </nav>
        <main>
          <h1>{pageProps.markdoc.frontmatter.title}</h1>
          <Component {...pageProps} />
        </main>
      </>
    )
  } else {
    children = <Component {...pageProps} />
  }

  return (
    <>
      <Head>
        <title>Mike Fix</title>
        <link
          href="https://fonts.googleapis.com/css?family=Reenie+Beanie|Bitter"
          rel="stylesheet"
        />
      </Head>
      <script src="https://unpkg.com/ionicons@4.4.2/dist/ionicons.js" />
      {children}
    </>
  )
}
