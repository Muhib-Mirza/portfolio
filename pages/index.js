import Navbar from '@/Component/Navbar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Irfan Haider</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/i.png" />
      </Head>
      <Navbar />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde tempora cum, odit voluptatum, assumenda dolore reiciendis ipsa placeat velit totam et omnis officia ducimus accusamus cupiditate eligendi corporis laudantium!
      </div>
    </>
  )
}
