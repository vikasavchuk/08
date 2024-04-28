import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteContact(id));
  return (
    <div className={css.contactInfo}>
      <div>
        <p>
          <IoPersonSharp className={css.contactIcon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button className={css.contactDelete} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;