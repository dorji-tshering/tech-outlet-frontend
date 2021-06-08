import { NavLink } from 'react-router-dom';
import styles from '../../styles/homeStyles/Deals.module.css';
import SampleProduct from '../../assets/images/iphone.jpeg';

const Deals = () => {

        const Deals = ['Summer Deals', 'Special Tshechu', 'Trending Wears', 'COVID Shields'];

        return (
                <div className={styles.deals_container}>
                        { Deals.map((deal, i) => 
                                <div className={styles.deal_item} key={i}>
                                        <NavLink to={`/deals/${deal}`}><h3>{deal}</h3></NavLink>
                                        <section className={styles.deal_products}>
                                                {Deals.map((product, i) => 
                                                                <NavLink to={`/product/${deal}`} className={styles.p_item} key={i}>                                                                        
                                                                        <img src={SampleProduct} alt="deals" 
                                                                        className={styles.p_thumbnail} />
                                                                        <p>30% Off</p>
                                                                </NavLink>
                                                
                                                )}
                                        </section>
                                        <NavLink to={`/deals/${deal}`}>View All</NavLink>
                                </div>
                        )}
                </div>
        )
}

export default Deals;
