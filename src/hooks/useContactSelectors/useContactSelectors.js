import { useSelector } from "react-redux";
import {selectLoading, selectError, selectContacts} from "redux/contacts/selectors";

const useContactSelectors = () => {
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const contacts = useSelector(selectContacts);

    return {
        isLoading,
        isError,
        contacts,
    };
};

export default useContactSelectors;
   