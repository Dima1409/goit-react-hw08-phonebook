import { useSelector } from "react-redux";
import { selectByFilter } from "redux/filter/selectors";

const useFilterSelectors = () => {
    const filtered = useSelector(selectByFilter);
    return {
        filtered,
    };
};

export default useFilterSelectors;