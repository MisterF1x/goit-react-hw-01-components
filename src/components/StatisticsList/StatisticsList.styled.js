import styled from '@emotion/styled';

export const SectionStats = styled.section`
  width: 400px;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  border-radius: ${p => p.theme.radii.sm};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 5px 9px 0px rgba(139, 139, 139, 0.8);
  overflow: hidden;
`;
export const StatsTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 100;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.accent};
`;
export const StatsList = styled.ul`
  display: flex;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4px;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${p => p.theme.colors.white};
`;
