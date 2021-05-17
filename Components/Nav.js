import Link from 'next/link'
import Image from 'next/image'

const Navigation = ()=>{
    return (
        <nav>
            <div className="logo">
                <Image src="/EYESTHETICS WITH TEXT.svg" width={140} height={80}></Image>
            </div>
            <div className="nav">
                <ul>
                    <Link href = "/"><a>Home</a></Link>
                    <Link href = "/clients"><a>Clients</a></Link>
                    <Link href = "/about"><a>About Us</a></Link>
                    <Link href = "/support"><a>Contact Us</a></Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;