import proPicture from "./assets/react.svg"
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={proPicture} alt="picture" />
            {/* <img src="https://via.placeholder.com/150" alt="profile picture holder" /> */}
            <h2 className="card-title">Darius</h2>
            <p className="card-text">Developer studying Java</p>
        </div>
    );
}
export default Card