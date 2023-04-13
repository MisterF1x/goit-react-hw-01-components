import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 80%;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: ${p => p.theme.radii.sm};
  border-collapse: collapse;
  border-style: hidden;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 5px 9px 0px rgba(139, 139, 139, 0.8);
  overflow: hidden;
`;
export const TransactionThead = styled.thead`
  background-color: #43519d;
  color: ${p => p.theme.colors.white};
`;
export const TransactionTh = styled.th`
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  background-color: #04aa6d;
  border-right: 1px solid #ddd;
  color: ${p => p.theme.colors.white};
  :last-child {
    border-right: none;
  }
`;
export const TransactionTd = styled.td`
  text-align: center;
  border: 1px solid #ddd;
  padding: 10px;
`;
export const TransactionTr = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;
