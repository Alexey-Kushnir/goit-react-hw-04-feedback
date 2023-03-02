import PropTypes from 'prop-types';
import {
  StatsButtonsList,
  StatsButtonsListItem,
  StatsButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StatsButtonsList>
      {options.map(option => {
        return (
          <StatsButtonsListItem key={option}>
            <StatsButton type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </StatsButton>
          </StatsButtonsListItem>
        );
      })}
    </StatsButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
