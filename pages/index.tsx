import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {GetStaticPropsContext} from "next";
import {useTranslations} from "next-intl";


// pages/index.js
export function getStaticProps({locale}: GetStaticPropsContext) {
    const [base] = locale?.split('-')
    return {
        props: {
            messages: require(`../messages/index/${base || 'en'}.json`),
        }
    };
}

export default function Home() {
    const t = useTranslations();
    return (
        <div className={styles.container}>
            <Head>
                <title>Pirus.io</title>
                <meta name="description" content="Piru Piru"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {t('welcome')} Pirus.io!
                </h1>

                <p className={styles.description}>
                    {t('weMake', {
                        important: (children) => <code className={styles.code}>{children}</code>,
                    })}
                </p>
            </main>

            <footer className={styles.footer}>
                Powered by
                <strong>mimis</strong>
            </footer>
        </div>
    )
}
