import OverlayBox from "./OverlayBox";

function Box({ value, type }) {
  return (
    <li className="body__box">
      <h2 className="box__value">
        {value}
        <OverlayBox />
      </h2>
      <h3 className="box__type">{type}</h3>
    </li>
  );
}

export default Box;
