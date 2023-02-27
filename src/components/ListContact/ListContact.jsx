import PropTypes from 'prop-types';
import ElementContact from '../ElementContact';

const ListContact = ({ contacts, filteredContacts, onDelete }) => {
  const makeList = array => {
    return array.map(({ id, name, number }) => {
      return (
        <ElementContact
          key={id}
          contactName={name}
          contactNumber={number}
          contactId={id}
          contactDelete={onDelete}
        />
      );
    });
  };
  return (
    <ul>
      {filteredContacts ? makeList(filteredContacts) : makeList(contacts)}
    </ul>
  );
};

ListContact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ListContact;


