import PropTypes from 'prop-types';
import { MessageStyled } from './Notification.styled';

export const Notification = ({ message }) => {
  return <MessageStyled>{message}</MessageStyled>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
