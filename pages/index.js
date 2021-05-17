import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../Components/Nav'
import Footer from '../Components/Footer'
import Error from './404'
import Clients from '../pages/clients'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>FIRST PAGE: NEXT JS</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, rem reprehenderit, quos ut voluptate ea quae voluptates inventore ullam alias consequatur a. Hic excepturi vel esse placeat ex rem odit?</p>
      <Link href="/index"><a className={styles.btn}>Click Here for further details</a></Link>
    </div>
  );
}
             