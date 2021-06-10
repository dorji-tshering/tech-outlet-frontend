import { NavLink, useParams, useRouteMatch } from 'react-router-dom';
import Iphone from '../assets/images/iphone.jpeg';
import styles from '../styles/containerStyles/SubCategory.module.css';

const SubCategory = () => {
        const match = useRouteMatch();
        const { categoryId, subCateId } = useParams();

        const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                                11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

        return (
                <div className={styles.container}>
                        <h3>Products of {categoryId} {'>'} {subCateId}</h3>
                        <section className={styles.products}>
                                {products.map((productId, i) =>
                                        <NavLink to={`${match.url}/product${productId}`} 
                                        className={styles.product} key={Math.random()}>
                                                <img src={Iphone} alt="product" className={styles.p_thumbnail}/>
                                                <p className={styles.p_name}>Product {productId}</p>
                                                <p className={styles.p_price}>Nu.500</p>
                                        </NavLink>      
                                )}
                        </section>
                </div>
        )
}

export default SubCategory;