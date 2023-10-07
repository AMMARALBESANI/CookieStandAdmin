import  Header  from "./Componet/Header";
import Head from 'next/head'
import Main from "./Componet/Main"
import { Footer } from './Componet/Footer';
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
  <main>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
   <Header />
   <Main />
   <Footer />
  </main>

  </RootLayout>
  )
}
