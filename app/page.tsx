import Image from 'next/image'
import styles from './page.module.css'
import Nav from './components/nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>
        <h1 className="text-xs">
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>
      </main>
    </div>
  )
}
