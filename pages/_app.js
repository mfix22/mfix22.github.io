import Head from 'next/head'

import { Icon } from '../components/Icon'

import '../public/global.css'

export default function App({ Component, pageProps }) {
  let children
  if (pageProps.markdoc) {
    children = (
      <>
        <nav>
          <div>
            <Icon href="https://twitter.com/fixitup2" name="logo-twitter" />
            <Icon href="https://github.com/mfix22" name="logo-github" />
          </div>
        </nav>
        <main>
          <h1>{pageProps.markdoc.frontmatter.title}</h1>
          <Component {...pageProps} />
        </main>
        <style jsx>
          {`
            nav {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
            }

            nav :global(.item) {
              margin-right: 10px;
              margin-bottom: 8px;
              font-size: 10px;
            }
          `}
        </style>
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
