import { arrowDefault } from "../assets/DefaultData";
import ComponentEdit from "./ComponentEdit";

const Arrow = () => {
    return(
        <div className="arrow">
            <h2><ComponentEdit data={arrowDefault.title} /></h2>
            <p><ComponentEdit data={arrowDefault.content} /></p>
        </div>
    )
}
export default Arrow;