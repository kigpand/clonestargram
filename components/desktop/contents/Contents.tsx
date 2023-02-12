import styles from "./Contents.module.scss";
import ContentsItem from "./contentsItem/ContentsItem";

const Contents = () => {
  const dummyData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.contents}>
      <div className={styles.lists}>
        {dummyData.map((item: any, i: number) => {
          return <ContentsItem post={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Contents;
