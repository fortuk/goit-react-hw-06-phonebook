import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './Filter.module.css';
import contactsActions from '../redux/contacts/contacts-actions';

const Filter = ({ inputValue, onChange }) => (
  <label className={s.label}>
    Find contacts by name
    <input
      className={s.input}
      type="text"
      name="filter"
      value={inputValue}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  inputValue: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);