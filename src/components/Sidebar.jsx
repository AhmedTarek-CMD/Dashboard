import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, color, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    href: "/",
  },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
  { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
  { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
  { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        open ? "w-64" : "w-20"
      }`}
      animate={{ width: open ? 256 : 80 }}
    >
      <div className="h-full p-4 backdrop-blur-md border-r border-gray-700 flex flex-col opacity-50 bg-gray-800">
        <motion.button
          className="max-w-fit transition-colors hover:bg-gray-700 p-2 rounded-full"
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu />
        </motion.button>
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item, index) => (
            <NavLink className={"btn"} key={index} to={item.href}>
              <motion.div className="flex items-center p-4 transition-colors mb-4 text-sm font-medium rounded-lg hover:bg-gray-700">
                <item.icon
                  size={20}
                  style={{ minWidth: "20px" }}
                  color={item.color}
                />
                <AnimatePresence>
                  {open && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </NavLink>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
