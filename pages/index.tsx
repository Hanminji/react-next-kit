import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { getAuthor } from '../src/api/author'
import { GetStaticProps } from 'next'

export default function Home({
  author
}: {
  author: {
    name: string
  }
}) {
  return (
    <div>
      <Head>
        <title>[Enter application name]</title>
      </Head>
      <section className={utilStyles.heading2Xl}>
        <p>React boilerplate</p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>author: {author.name}</p>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const author = getAuthor()
  return {
    props: {
      author
    }
  }
}