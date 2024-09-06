import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-display dark:text-[#86989e] dark:bg-[#1c222a]">
            <Outlet></Outlet>            
        </div>
    );
};

export default Root;