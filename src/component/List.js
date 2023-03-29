import ComponentEdit from "./ComponentEdit";

const List = ({ data }) => {
  return (
    <div className="list">
      <h2><ComponentEdit data={data.title} /></h2>
      <ul>
        {data.list.map((e, i) => (
          <li>
            <ComponentEdit data={e} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
