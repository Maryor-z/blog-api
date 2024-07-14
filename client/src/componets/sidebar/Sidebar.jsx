import "./sidebar.css"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
            src="https://t4.ftcdn.net/jpg/00/94/88/23/240_F_94882306_gdTjxS01ptuEjEy0GQVZAhZNjiWsMfpt.jpg"
            alt=""
        />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora optio, 
            non magni dolore maxime quis commodi perspiciatis blanditiis veniam error, 
            architecto illum eveniet natus delectus, nisi ipsum vel quod repellendus.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        </div>
      </div>
    </div>
  )
}
