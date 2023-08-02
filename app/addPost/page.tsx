import { NextPage } from "next";
import styles from "../../styles/Home.module.scss";
import Header from "../../layout/header/Header";
import AddPostItem from "../../components/addPost/AddPostItem";

const AddPost: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <AddPostItem />
    </div>
  );
};

export default AddPost;
