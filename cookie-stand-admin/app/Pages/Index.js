"use client"
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import ReportTable from './ReportTable'
import CreateForm from './CreateForm'
import { timeSlots } from './data'
import Header from './Header'
import Footer from './Footer'

const Index = () => {
  // State to manage cookie stands
  const [cookieStands, setCookieStands] = useState([]);
    const [Loc, setLoc] = useState('');
  // Function to add a new cookie stand
  const handleCreateCookieStand = (newCookieStand) => {
    setCookieStands([...cookieStands, newCookieStand]);
  };

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title> 
      </Head>
<Header></Header>
      <main>
     <CreateForm onCreate={handleCreateCookieStand}   />
      <ReportTable hours={timeSlots} reports={cookieStands} />
      </main>

      <Footer reports={cookieStands}></Footer>

    </div>
  );
};

export default Index;