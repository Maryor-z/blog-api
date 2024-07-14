import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZsH-LA6ud_Ekd4YqQOzyhwIXe1uUCjazWw&s"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAutor">
                Author: <b>Maryor</b>
            </span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Aspernatur, saepe earum. Possimus qui ullam, voluptas consectetur sequi sit, dolore, 
            neque esse culpa illum alias sint facilis accusamus fugit at! Facere.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Aspernatur, saepe earum. Possimus qui ullam, voluptas consectetur sequi sit, dolore, 
            neque esse culpa illum alias sint facilis accusamus fugit at! Facere.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Aspernatur, saepe earum. Possimus qui ullam, voluptas consectetur sequi sit, dolore, 
            neque esse culpa illum alias sint facilis accusamus fugit at! Facere.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Aspernatur, saepe earum. Possimus qui ullam, voluptas consectetur sequi sit, dolore, 
            neque esse culpa illum alias sint facilis accusamus fugit at! Facere.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Aspernatur, saepe earum. Possimus qui ullam, voluptas consectetur sequi sit, dolore, 
            neque esse culpa illum alias sint facilis accusamus fugit at! Facere.
        </p>
      </div>
    </div>
  )
}
