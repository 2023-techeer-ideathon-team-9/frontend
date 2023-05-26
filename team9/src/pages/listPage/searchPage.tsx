import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";

type Props = {
  word: string;
};
//{ word }: Props
export default function ListPage({ word }: Props) {
  const [content, SetContent] = useState<any>([]);

  const a = ["a", "b", "b", "b", "b", "b", "b"];
  useEffect(() => {
    axios
      .post(` http://localhost:5000/api/v1/resume/search_keyword`, {
        keyword: { word },
      })
      .then((res) => {
        SetContent(res);
      });
  }, []);
  // function List() {
  //   content.forEach((text) => {
  //     return <div>{text}</div>;
  //   });

  return (
    <div className={styles.container}>
      {content.map((text, index) => (
        <div key={index}>{text}</div>
      ))}
    </div>
  );
}
