import { Link } from "react-router-dom"

const Navbar = () => {
    return (<nav>
        <ul>
            <li>
                <Link to="home">לדף הבית</Link>
            </li>
            <li>
                <Link to="products">למוצרים שלנו</Link>
            </li>
            <li>
                <Link to="basket">לסל הקניות</Link>
            </li>
            <li>
                <Link to="addProduct">להוספת מוצר</Link>
            </li>
        </ul>
    </nav>

    );
}
export default Navbar;