import "./App.css";
import Name from "./component/Name";
import Avatar from "./component/Avatar";
import Address from "./component/Address";
import Arrow from "./component/Arrow";
import TimeLine from "./component/TimeLine";
import { experienceDefault, listSkillDefault } from "./assets/DefaultData";
import { educationDefault } from "./assets/DefaultData";
import List from "./component/List";
import Hobbies from "./component/Hobbies";

function App() {
  return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-5 col-left">
              <Avatar />
              <Name />
              <Address />
              <List data={listSkillDefault} />
            </div>
            <div className="col-md-7 col-7 col-right">
              <Arrow />
              <div className="exp">
                <TimeLine data={experienceDefault} />
              </div>
              <div className="education">
                <TimeLine data={educationDefault} />
              </div>
              <div className="hobbies">
                <h2>Sở thích</h2>
                <Hobbies />
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default App;
