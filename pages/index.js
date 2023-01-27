import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import App from '@/components/App'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Portal Next</title>
      </Head>

      <Navbar />
      <Main />
      <App />
    </div>
      
  )
}
