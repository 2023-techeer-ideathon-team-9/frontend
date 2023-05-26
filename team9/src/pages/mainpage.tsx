import styles from "./styles.module.scss";

export default function MainPage() {
  return (
    <div className={`${styles.cardContainer} grid-cols-4`}>
      <div className="flex bg-white w-32 h-32 text-blue-600">Hello</div>
    </div>
  );
}
