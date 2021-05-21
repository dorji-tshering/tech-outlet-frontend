import { NavLink } from 'react-router-dom';
import '../../styles/homeStyles/deals.css';
import SampleProduct from '../../assets/images/iphone.jpeg';

const Deals = () => {

        const Deals = ['Summer Deals', 'Special Tshechu', 'Trending Wears', 'COVID Shields'];

        return (
                <div className="deals-container">
                        { Deals.map((deal, i) => 
                                <div className="deal-item" key={i}>
                                        <NavLink to={`/deals/${deal}`}><h3>{deal}</h3></NavLink>
                                        <section className="deal-products">
                                                {Deals.map((product, i) => 
                                                                <NavLink to={`/product/${deal}`} className="p-item" key={i}>                                                                        
                                                                        <img src={SampleProduct} alt="deals" 
                                                                        className="p-thumbnail" />
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
