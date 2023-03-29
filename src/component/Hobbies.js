import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faGamepad, faMusic, faTree } from "@fortawesome/free-solid-svg-icons";
const Hobbies = () => {
  return (
    <ul>
      <li>
        <FontAwesomeIcon icon={faBook} />
      </li>
      <li>
        <FontAwesomeIcon icon={faGamepad} />
      </li>
      <li>
        <FontAwesomeIcon icon={faMusic} />
      </li>
      <li>
        <FontAwesomeIcon icon={faTree} />
      </li>
    </ul>
  );
};
export default Hobbies;
