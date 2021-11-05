import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey, my name is Michael and I'm a Data Scientist. 
          I'm currently learning about web development, and will be building this personal website where I 
          eventually plan on posting about stuff I'm working on and things I enjoy. More to come soon...
        </p>
        <p>
          In the meantime, you can find me on{' '}
          <a href="https://linkedin.com/in/chengzhouyang">LinkedIn</a> or {' '}
          <a href="https://github.com/mch-yang">GitHub</a>.
        </p>
      </section>
    </Layout>
  )
}