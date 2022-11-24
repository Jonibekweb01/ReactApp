import "../Select/select.css";

const Select = ({ setSelect }) => {
  return (
    <select
      onChange={(evt) => setSelect(evt.target.value)}
      className="select"
      defaultValue=""
    >
      <option className="select__option" disabled selected>
        Filter by Region
      </option>
      <option className="select__option" value="Africa">
        Africa
      </option>
      <option className="select__option" value="America">
        America
      </option>
      <option className="select__option" value="Asia">
        Asia
      </option>
      <option className="select__option" value="Europe">
        Europe
      </option>
    </select>
  );
};

export default Select;
