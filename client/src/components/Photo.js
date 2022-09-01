import personalPhoto from "../assets/images/personalPhoto.png";

function Photo () {
    return (
        <div>
            <div className="photo">
        <img className="personalPhoto" src={personalPhoto} alt="" />
      </div>
        </div>
    )
}

export default Photo;