import PropTypes from 'prop-types';
import { StatsList, StatsListItem, StatsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatsList>
      <StatsListItem>
        <StatsItem>Good: {good}</StatsItem>
      </StatsListItem>
      <StatsListItem>
        <StatsItem>Neutral: {neutral}</StatsItem>
      </StatsListItem>
      <StatsListItem>
        <StatsItem>Bad: {bad}</StatsItem>
      </StatsListItem>
      <StatsListItem>
        <StatsItem>Total: {total}</StatsItem>
      </StatsListItem>
      <StatsListItem>
        <StatsItem>Positive feedback: {positivePercentage}%</StatsItem>
      </StatsListItem>
    </StatsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
