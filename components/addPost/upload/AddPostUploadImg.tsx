import { useCallback, useRef } from "react";
import styles from "./AddPostUploadImg.module.scss";

interface IAddPostUploadImg {
  onUploadImg: (e: any) => void;
  loading: boolean;
  imgUrl: File | null;
}

const AddPostUploadImg = ({
  onUploadImg,
  loading,
  imgUrl,
}: IAddPostUploadImg) => {
  const imgRef = useRef<HTMLInputElement>(null);

  const onClickImageUpload = useCallback(() => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  }, [imgRef]);

  return (
    <div className={styles.addPostUploadImg}>
      <input
        type="file"
        name="image"
        ref={imgRef}
        hidden
        onChange={onUploadImg}
      />
      <button className={styles.uploadBtn} onClick={onClickImageUpload}>
        {loading ? (
          <div className={styles.loadingSpinner}></div>
        ) : (
          "이미지 업로드"
        )}
      </button>
      {imgUrl && (
        <img
          className={styles.uploadImg}
          src={URL.createObjectURL(imgUrl)}
          alt="img"
        />
      )}
    </div>
  );
};

export default AddPostUploadImg;
