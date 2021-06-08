import { NavLink, useParams } from 'react-router-dom';
import Iphone from '../assets/images/iphone.jpeg';
import styles from '../styles/containerStyles/Category.module.css';

const Category = ({match}) => {

	const { categoryId } = useParams();

	const subCategories = ["SubCategory 1", "SubCategory 2", "SubCategory 3", "SubCategory 4", "SubCategory 5", 
				"SubCategory 6", "SubCategory 7", "SubCategory 8", ];


	return (
		<div className={styles.categories}>
			{subCategories.map((category, i) =>
				<NavLink to={`/category/${categoryId}/${category}`} className={styles.sub_category}>
					<img src={Iphone} alt="subcategory" className={styles.c_thumbnail} />
					<p className={styles.c_name}>{category}</p>
				</NavLink>	
			)}
		</div>
	)
}

export default Category;
