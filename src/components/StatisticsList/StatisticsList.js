import { StatisticsItem } from 'components/StatisticItem/StatisticsItem';
import PropTypes from 'prop-types';
import {
  SectionStats,
  StatsItem,
  StatsList,
  StatsTitle,
} from './StatisticsList.styled';
import { getRandomHexColor } from 'components/utils/Utils';

export const StatisticsList = ({ stats, title }) => {
  return (
    <SectionStats>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>
        {stats.map(stat => (
          <StatsItem
            style={{ backgroundColor: getRandomHexColor() }}
            key={stat.id}
            title={stat.label}
          >
            <StatisticsItem stats={stat} />
          </StatsItem>
        ))}
      </StatsList>
    </SectionStats>
  );
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
