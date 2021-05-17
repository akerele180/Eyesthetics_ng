
import { Children } from 'react';
import Footer from '../Components/Footer'
import Navigation from '../Components/Nav';

const Layout = ({children}) => {
    return ( 
        <div className="content">
            <Navigation />
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;