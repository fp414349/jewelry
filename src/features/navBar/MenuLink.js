import { Link } from "react-router-dom";


export default function MenuLink({ txt, url }) {
  return (
    
    <Link to={url} className="link">
    {txt}
  </Link>
  );
}
