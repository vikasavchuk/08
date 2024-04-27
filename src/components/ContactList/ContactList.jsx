import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectError, selectFilteredContacts, selectLoading } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const ContactList = () => {
  const selectContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error />}
      <ul className={css.listUl}>
        {selectContacts.length > 0 &&
          selectContacts.map((item) => (
            <li className={css.itemLi} key={item.id}>
              <Contact name={item.name} number={item.number} id={item.id} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;