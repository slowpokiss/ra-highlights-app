import Popular from "./Popular";
import New from "./New";

interface props {
  type: "video";
  title: string;
  views: number;
}

export default function Article({ type, title, views }: props) {
  if (views < 100) {
    return (
      <New>
        <div className="item item-article">
          <h3>
            <a href="#">{title}</a>
          </h3>
          <p className="views">Прочтений: {views}</p>
        </div>
      </New>
    );
  }
  if (views > 1000) {
    return (
      <Popular>
        <div className="item item-article">
          <h3>
            <a href="#">{title}</a>
          </h3>
          <p className="views">Прочтений: {views}</p>
        </div>
      </Popular>
    );
  }

  return (
    <div className="item item-article">
      <h3>
        <a href="#">{title}</a>
      </h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  );
}
