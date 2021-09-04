import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getFiltred } from "../../redux/contacts/contactsSelector";
import { RiPhoneFindLine } from "react-icons/ri";
import s from "./Filter.module.css";
import { setFilter } from "redux/contacts/contactsSlices";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFiltred);

  return (
    <div className={s.filterContainer}>
      <p className={s.filterTitle}>
        <RiPhoneFindLine
          className={s.filterIcon}
          color='#75ecec'
        ></RiPhoneFindLine>
        Find contacts by name
      </p>
      <input
        className={s.inputFilter}
        type='text'
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        placeholder='enter name'
      />
    </div>
  );
}
Filter.propTypes = {
  filter: PropTypes.string,
};
