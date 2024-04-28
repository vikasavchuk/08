import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectFilteredContacts, selectLoading } from "../../redux/contacts/selectors";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {
  const selectContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
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