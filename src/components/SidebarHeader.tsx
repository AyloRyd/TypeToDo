import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import TasklyLogo from "../assets/todo-icon.png";
import { useProjects } from "../hooks/useProjects";
import { useTheme } from "../hooks/useTheme";
import { useSidebar } from "../hooks/useSidebar";

const SidebarHeader = () => {
  const { handleGoHomePage } = useProjects();
  const { theme, toggleTheme } = useTheme();
  const { closeSidebar } = useSidebar();

  return (
    <div className="flex justify-between items-center mb-12">
      <div
        onClick={() => {
          handleGoHomePage();
          closeSidebar();
        }}
        className="cursor-pointer flex items-center"
      >
        <img src={TasklyLogo} alt="Taskly logo" className="h-6 mr-2" />
        <p className="font-bold text-xl text-stone-700 dark:text-stone-200">Taskly</p>
      </div>
      <button
        onClick={toggleTheme}
        className="cursor-pointer w-fit h-fit p-2 rounded-xl bg-stone-200 dark:bg-stone-700 text-stone-100 hover:bg-stone-300 dark:hover:bg-stone-600 hover:text-stone-100 transition-colors ease-in-out"
      >
        {theme === "light" ? (
          <HiSun size={25} className="text-amber-500" />
        ) : (
          <HiMoon size={25} />
        )}
      </button>
    </div>
  );
};

export default SidebarHeader;
