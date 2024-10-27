"use client"

import Image from 'next/image'
import Link from 'next/link';
import {useRouter} from "next/navigation"


export default function Home() {
const router = useRouter();


  return (
    <div>
<h1>basic routing</h1>
<br></br>
      <Link href="/ourproducts">go to our products</Link>
      <br></br>
      <br></br>
      <Link href="/contactus">contact us</Link>
<br></br>
<br></br>
<Link href="/Home">go to home </Link>
      
    </div>
  )
}

