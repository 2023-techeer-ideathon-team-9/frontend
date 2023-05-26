import styles from "./styles.module.scss";
import pdfLogo from "../../assets/pdf.png";
import { useState } from "react";
import axios from "axios";
export default function MainPage() {
  const [keyWord, setKeyWord] = useState("");
  const [file, setFile] = useState<any>();
  function onSearch() {
    axios
      .get(`localhost:5000/api/v1/resume/search?word${keyWord}`)
      .then(() => {
        console.log("Done");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setKeyWord(e.target.value);
  }
  function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files;
    e.target.files !== null ? setFile(!e.target.files[0]) : "";
    // //setFile(e.target.files);
  }
  console.log(keyWord);
  console.log(file);
  return (
    //  <div className="${styles.container}"">
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          className={styles.search}
          type="text"
          placeholder="지원동기"
          onChange={onChange}
        ></input>
        <button className={styles.btn2} onClick={onSearch}></button>
      </div>

      <div className={styles.uploadContainer}>
        <input id="file-input" className={styles.file} type="file" />
        <label className={styles.Label} htmlFor="file-input">
          <img className={styles.icon} src={pdfLogo} alt="" />
        </label>
        <button className={styles.btn2}></button>
      </div>
    </div>
  );
}
