import { statsIcon } from 'components/utils/Utils';
import PropTypes from 'prop-types';

export const StatisticsItem = ({ stats: { label, percentage } }) => {
  const icon = statsIcon(label);
  return (
    <>
      {icon}
      <span>{percentage}</span>
    </>
  );
};

StatisticsItem.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
