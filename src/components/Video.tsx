import Popular from "./Popular";
import New from "./New";

interface props {
  type: "video";
  url: string;
  views: number;
}

export default function Video({ type, url, views }: props) {
  if (views < 100) {
    return (
      <New>
        <div className="item item-video">
          <iframe
            src={url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="views">Просмотров: {views}</p>
        </div>
      </New>
    );
  }
  if (views > 1000) {
    return (
      <Popular>
        <div className="item item-video">
          <iframe
            src={url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="views">Просмотров: {views}</p>
        </div>
      </Popular>
    );
  }

  return (
    <div className="item item-video">
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className="views">Просмотров: {views}</p>
    </div>
  );
}
