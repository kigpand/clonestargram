import { useCallback, useRef } from "react";
import styles from "./MakeUpload.module.scss";

interface IMakeUpload {
  onUploadImg: (e: any) => void;
}

const MakeUpload = ({ onUploadImg }: IMakeUpload) => {
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
      <button className={styles.uploadBtn} onClick={onClickImageUpload}>
        이미지 업로드
      </button>
    </div>
  );
};

export default MakeUpload;
