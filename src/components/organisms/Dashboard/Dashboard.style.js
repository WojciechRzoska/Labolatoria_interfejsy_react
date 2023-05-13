import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3px 32px 32px 32px;
  display: grid;
  min-height: auto;
  grid-gap: 24px;
  grid-template-rows: 50px 150px 150px 150px 100px 100px 150px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'Searchbar Searchbar'
    'Api Api'
    'Profit Sales'
    'Payments Transactions'
    'TotalRevenue TotalRevenue'
    'TotalRevenue TotalRevenue'
    'ProfileReport ProfileReport';

  @media (min-width: 63em) {
    grid-template-rows: 0.125fr 0.5fr 0.5fr 0.5fr;
    grid-template-columns: 0.6fr 0.6fr 0.5fr 0.5fr;
    grid-template-areas:
      'Searchbar Searchbar Searchbar Searchbar'
      'Api Api Profit Sales'
      'TotalRevenue TotalRevenue Payments Transactions'
      'TotalRevenue TotalRevenue ProfileReport ProfileReport';
  }
`;

export const Searchbar = styled.div`
  grid-area: Searchbar;
  display: flex;
  background-color: ${({ theme }) => theme.colors.element};
  padding: 0 16px;
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
  width: 100%;

  @media (min-width: 63em) {
    flex-direction: row;
  }
`;
export const Api = styled.div`
  grid-area: Api;
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
  max-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 80%;
  }
`;

export const Profit = styled.div`
  grid-area: Profit;
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
`;

export const Sales = styled.div`
  grid-area: Sales;
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
`;

export const TotalRevenue = styled.div`
  grid-area: TotalRevenue;
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
`;

export const Payments = styled.div`
  grid-area: Payments;
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
`;

export const Transactions = styled.div`
  grid-area: Transactions;
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
`;

export const ProfileReport = styled.div`
  grid-area: ProfileReport;
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
`;
