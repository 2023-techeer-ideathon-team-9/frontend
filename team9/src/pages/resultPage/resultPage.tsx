import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";

type Props = {
  company_name: string;
  content: string;
};

export default function ResultPage({ company_name, content }: Props) {
  //localhost:5000/api/v1/chatgpt/getresult/
  const [text, setText] = useState<any>({
    company_name: "",
    content: "",
  });
  useEffect(() => {
    axios
      .post(`http://localhost:5000/api/v1/chatgpt/getresult/`, {
        company_name: { company_name },
        content: { content },
      })
      .then((response) => {
        console.log(response);
        setText(response);
      });

    return;
  }, []);
  return (
    <>
      <div>{text.company_name}</div>
      <div>{text.content}</div>
    </>
  );
}
