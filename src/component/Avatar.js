import { avatarDefault } from "../assets/DefaultData";

const Avatar = () => {
    return(
        <div className="image">
            <img src={avatarDefault.url} alt="" srcset="" width="450px" height="auto" />
        </div>
    )
}
export default Avatar;