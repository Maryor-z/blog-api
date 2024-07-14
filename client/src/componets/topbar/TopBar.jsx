import "./topbar.css";
import {Link} from "react-router-dom";

export default function TopBar() {
  const user = true;
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to = "/" > HOME</Link>
                </li>
                <li className="topListItem"><Link className="link" to = "/about" > ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to = "/contact" > CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to = "/write" > WRITE</Link></li>
                <li className="topListItem">
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <img 
            className="topImg"
            src="data:image/jpeg;base64,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" alt="" />

            ) : (
              <ul className="topList">
                <li className="topListItem">
                <Link className="link" to = "/login" >LOGIN</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to = "/register" >REGISTER</Link>
                </li>
              </ul>
            )
          }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
