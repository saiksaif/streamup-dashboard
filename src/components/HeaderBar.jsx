import HeaderInfo from "./HeaderInfo";
import { useLocation } from "react-router-dom"
import style from "./styles/headerBar.module.css";

function HeaderBar() {
  const location = useLocation()
  let title = location.pathname.split('/').join('')
  console.log(title)

  return (
    <div className="shadow-lg hover:shadow-2xl duration-300 rounded-2xl bg-white p-3 flex justify-between">
      {title ? (
        <span className={style.capitalize + ' text-xl font-semibold px-2 pt-1'}>
          {title}
        </span>
      ) : ''}
      <HeaderInfo />
    </div>
  );
}

export default HeaderBar;
