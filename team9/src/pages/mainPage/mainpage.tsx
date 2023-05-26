import styles from "./styles.module.scss";
import pdfLogo from "../../assets/pdf.png";
import { useState } from "react";
import axios from "axios";
import ListPage from "../listPage/searchPage";
import { useNavigate } from "react-router-dom";
export default function MainPage() {
  const [keyWord, setKeyWord] = useState("");
  const [file, setFile] = useState<any>();
  const [a, setA] = useState(false);
  const movePage = useNavigate();
  function onSearch() {
    axios
      .get(`http://localhost:5000/api/v1/resume/search?word${keyWord}`)
      .then(() => {
        console.log("Done");
      })
      .catch((err) => {
        console.log(err);
      });
    movePage("/List", { state: keyWord });
  }
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setKeyWord(e.target.value);
  }
  function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files;
    e.target.files !== null ? setFile(!e.target.files[0]) : "";
    // //setFile(e.target.files);
  }
  function onClick() {
    axios
      .post(`localhost:5000/api/v1//resume/upload/`, {
        pdffile: file,
      })
      .then(() => {
        console.log("Done");
      })
      .catch((err) => {
        console.log(err);
      });
    setA(true);
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
          placeholder="검색항목"
          onChange={onChange}
        ></input>
        <button className={styles.btn2} onClick={onSearch}>
          {" "}
          검색
        </button>
      </div>

      <div className={styles.uploadContainer}>
        <input
          id="file-input"
          className={styles.file}
          type="file"
          onChange={onUpload}
        />
        <label className={styles.Label} htmlFor="file-input">
          <img className={styles.icon} src={pdfLogo} alt="" />
        </label>
        <button className={styles.btn2} onClick={onClick}>
          {" "}
          Submit
        </button>
        {a ? <span>성공!</span> : <span>업로드 가능!</span>}
      </div>
    </div>
  );
}
