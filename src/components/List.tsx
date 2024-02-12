import Article from "./Article";
import Video from "./Video";

export default function List(props: any) {
  return props.list.map((item : any) => {
      switch (item.type) {
          case 'video':
              return (
                  <Video {...item} />
              );

          case 'article':
              return (
                  <Article {...item} />
              );
      }
  });
};