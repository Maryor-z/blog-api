import Header from "../../componets/header/Header"
import Posts from "../../componets/posts/Posts"
import Sidebar from "../../componets/sidebar/Sidebar"
import "./home.css"

export default function Home() {
  return (
    <>
      <Header/>
      <div className="home">
          <Posts />
          <Sidebar />
      </div>
    </>
  );
}
