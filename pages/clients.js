import styles from '../styles/clients.module.css'

export const getStaticProps = async ()=> {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    
    return {
        props : { myClients: data } 
    }
} 

const Clients = ({ myClients }) => {

    return ( 
        <div>
            <h1>Eyesthetically Pleasing Clients</h1>
            {
                myClients.map(myClient => (
                    <div key= {myClient.id}>
                        <h3 className={styles.fetched}>
                            {myClient.name}
                        </h3>
                    </div>

                ))
            }
        </div>
     );
}
 
export default Clients;