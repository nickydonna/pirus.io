import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pirus.io</title>
        <meta name="description" content="Piru Piru" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenide Pirus.io!
        </h1>

        <p className={styles.description}>
          Hacemos
          <code className={styles.code}>Pirus</code>
          para tus
          <code className={styles.code}>Mirus</code>
        </p>
      </main>

      <footer className={styles.footer}>
          Powered by
          <strong>mimis</strong>
      </footer>
    </div>
  )
}
