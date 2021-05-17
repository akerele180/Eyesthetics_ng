import Link from 'next/link'
import Head from 'next/head'

const Error = () => {
    return (
        <>
            <Head>
                <title>404 | Error</title>
            </Head>
            <meta name="keywords" content="error" />
            <div className="error">
                <h1>Omo iya mi, e no dey available</h1>
                <h2>You sef, try dey do normal things</h2>
                <p>Óyá gbé bódì e <br /><Link href="/"><a>Go to Homepage</a></Link></p>
            </div>
        </>
    );
}
 
export default Error;