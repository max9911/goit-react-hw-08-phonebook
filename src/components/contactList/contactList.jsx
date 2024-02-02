import { useDispatch, useSelector } from 'react-redux';
import css from './contactList.module.css';
import ContactElem from 'components/contactElem/contactElem';
import { useEffect } from 'react';
import { filterContacts } from 'reduxstore/contacts/slice';

export default function ContactList({ arr, delBtn }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterContacts(''));
  }, []);

  const filterInput = useSelector(state => state.contactInfo.filterName);
  const filter = filterInput ? filterInput.toLowerCase() : false;
  console.log(filter);
  let result = '';
  if (filter) {
    result = arr.filter(el => {
      const aaa = el.name.toLowerCase();

      return aaa.includes(filter);
    });

    return (
      <div className={css.container}>
        {result.map(elm => (
          <ContactElem
            key={elm.id}
            name={elm.name}
            number={elm.number}
            delBtn={delBtn}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className={css.container}>
        {arr.map(elm => (
          <ContactElem
            key={elm.id}
            name={elm.name}
            number={elm.number}
            delBtn={delBtn}
            btnId={elm.id}
          />
        ))}
      </div>
    );
  }
}
