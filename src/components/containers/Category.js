import { NavLink, useParams, useRouteMatch } from 'react-router-dom';
import Iphone from '../../assets/images/iphone.jpeg';
import styles from '../../styles/containerStyles/Category.module.css';

const Category = () => {
	const match = useRouteMatch();

	const { categoryId } = useParams();

	const subCategories = ["SubCategory 1", "SubCategory 2", "SubCategory 3", "SubCategory 4", "SubCategory 5", 
				"SubCategory 6", "SubCategory 7", "SubCategory 8", ];


	return (
		<div className={styles.category_container}>
			<h3 className={styles.category_title}>{categoryId}</h3>
			<section className={styles.categories}>
				{subCategories.map((category, i) =>
					<NavLink to={`${match.url}/${category}`} 
					className={styles.sub_category} key={Math.random()}>
						<img src={Iphone} alt="subcategory" 
						className={styles.category_thumbnail} />
						<p className={styles.category_name}>{category}</p>
					</NavLink>	
				)}
			</section>
		</div>
	)
}

export default Category;
