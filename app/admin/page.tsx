import { Donut } from "lucide-react";
import TopThreeRankings from "./Home/RankingCard";
import QuickStats from "./Home/StatCard";
import WeeklyChart from "./Home/WeeklyBarChart";
import DonutChart from "./Home/UserPieChart";
import LineChartComponent from "./Home/LoginAmountChart";

export default function Home() {
  return (
    <div>
        <QuickStats/>
        <TopThreeRankings/>
        <WeeklyChart/>
        <DonutChart/>
        <LineChartComponent/>
    </div>
  );
}
