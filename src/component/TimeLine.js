import ComponentEdit from "./ComponentEdit";

const TimeLine = ({ data }) => {
  return (
    <div className="content-timeline">
      <h2><ComponentEdit data={data.title} /></h2>
      <div className="time-line">
        {data.list.map((e, i) => (
          <div className="content-timeline">
            <p className="milestones"><ComponentEdit data={e.milestones} /></p>
            {e.list ? (
              <ul>
                {e.list.map((item, index) => (
                  <li><ComponentEdit data={item} /></li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TimeLine;
