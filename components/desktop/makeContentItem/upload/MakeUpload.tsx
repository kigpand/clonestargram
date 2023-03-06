import { useCallback, useRef } from "react";
import styles from "./MakeUpload.module.scss";

interface IMakeUpload {
  onUploadImg: (e: any) => void;
  loading: boolean;
  imgUrl: string[];
}

const MakeUpload = ({ onUploadImg, loading, imgUrl }: IMakeUpload) => {
  const imgRef = useRef<HTMLInputElement>(null);

  const onClickImageUpload = useCallback(() => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  }, [imgRef]);

  return (
    <div className={styles.makeUpload}>
      <input
        type="file"
        name="image"
        ref={imgRef}
        hidden
        onChange={onUploadImg}
      />
      {loading ? (
        <div>로딩중</div>
      ) : (
        <button className={styles.uploadBtn} onClick={onClickImageUpload}>
          {loading ? (
            <div className={styles.loadingSpinner}></div>
          ) : (
            "이미지 업로드"
          )}
        </button>
      )}
      {imgUrl.length > 0 && (
        <img
          className={styles.uploadImg}
          src={process.env.NEXT_PUBLIC_API_URL + "/" + imgUrl}
          alt="img"
        />
      )}
    </div>
  );
};

export default MakeUpload;
