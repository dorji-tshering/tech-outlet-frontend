import { useParams, NavLink } from 'react-router-dom';
import styles from '../styles/containerStyles/Deal.module.css';
import Iphone from '../assets/images/iphone.jpeg';

const Deal = () => {
        const { dealId } = useParams();

        const dealProducts = [Iphone, Iphone, Iphone, Iphone,
                                Iphone, Iphone, Iphone, Iphone];

        return (
                <div className={styles.deal_container}>
                        <h3 className={styles.deal_title}>{dealId}</h3>
                        <section className={styles.deal_products}>
                                {dealProducts.map((image, i) => 
                                        <NavLink to={`/product/${i}`} key={Math.random(1000)}
                                        className={styles.deal_product}>
                                                <img src={image} alt="deal product" className={styles.product_image} />
                                                <p className={styles.product_name}>{`product ${i+1}`}</p>
                                                <p className={styles.product_price}>Nu.700</p>
                                        </NavLink>      
                                )}
                        </section>
                </div>
        )
}

export default Deal;
