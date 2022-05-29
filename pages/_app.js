import Head from 'next/head'

function Icon(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      mr={1}
      style={{
        color: 'var(--mint)',
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
      }}
    >
      <ion-icon name={props.name} />
    </a>
  )
}

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
        <main mt={[0, 0, 3]} pl={[0, 0, 5]}>
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
