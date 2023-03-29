import { addressDefault } from "../assets/DefaultData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCalendar,
  faEnvelope,
  faPhone,
  faW,
} from "@fortawesome/free-solid-svg-icons";
import ComponentEdit from "./ComponentEdit";

const Address = () => {
  return (
    <div className="address">
      <ul>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faAddressCard} />
          </span>
          <ComponentEdit data={addressDefault.address} />
        </li>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <ComponentEdit data={addressDefault.phone} />
        </li>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faCalendar} />
          </span>
          <ComponentEdit data={addressDefault.dob} />
        </li>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <ComponentEdit data={addressDefault.email} />
        </li>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faW} />
          </span>
          <ComponentEdit data={addressDefault.web} />
        </li>
      </ul>
    </div>
  );
};
export default Address;
