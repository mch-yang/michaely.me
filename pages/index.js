import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const YEAR = new Date().getFullYear()

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey, my name is Michael. I'm a Data Scientist, and am currently learning about web development in my free time. 
          I'm planning on building my personal website here over the next few months, where I will eventually be posting about stuff I'm working on and things I enjoy. 
          More to come soon...
        </p>
        <p>
          In the meantime, you can find me on{' '}
          <a href="https://linkedin.com/in/chengzhouyang">LinkedIn</a>,{' '}
          or follow my progress on <a href="https://github.com/mch-yang">GitHub</a>.
        </p>
      </section>
      <section className={utilStyles.footer}>
        <p>
          © <time>{YEAR}</time> Michael Yang
        </p>
      </section>
    </Layout>
  )
}