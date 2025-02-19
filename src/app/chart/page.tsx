import dynamic from "next/dynamic";
import styles from "../../styles/chart.module.css";
import Chart from "../../components/Chart";

//const Chart = dynamic(() => import("../../components/Chart"), { ssr: false });

export default function ChartPage() {
  return (
    <div className={styles.container}>
      <h1>Stock Chart</h1>
      <Chart />
    </div>
  );
}
