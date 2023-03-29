import { nameDefault } from "../assets/DefaultData";
import ComponentEdit from "./ComponentEdit";

const Name = () => {
    return(
        <div className="name">
            <h3><ComponentEdit data={nameDefault.name} /></h3>
            <p><ComponentEdit data={nameDefault.position} /></p>
        </div>
    )
}
export default Name;