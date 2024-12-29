import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import LineChartType from "../components/home/LineChartType";
import CategoryChart from "../components/home/CategoryChart";
import BarChartType from "../components/home/BarChartType";

const Home = () => {
  return (
    <div className="flex-1 relative z-10 overflow-auto">
      <Header title="Overview" />
      <main className="px-4 lg:px-8 py-6 mx-auto max-w-7xl">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$12,345"
            color="#6366F1"
          />
          <StatCard
            name="New Users"
            icon={Users}
            value="1,234"
            color="#8B5CF6"
          />
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="567"
            color="#EC4899"
          />
          <StatCard
            name="Conversion Rate"
            icon={BarChart2}
            value="12.5%"
            color="#10B981"
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LineChartType />
          <CategoryChart />
          <BarChartType />
        </div>
      </main>
    </div>
  );
};

export default Home;
