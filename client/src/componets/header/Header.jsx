import "./header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitle">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://i.pinimg.com/736x/f5/3b/a3/f53ba34008d2761f5c1391c03a027861.jpg" 
        alt=""
        />
    </div>
  )
}
