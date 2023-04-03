import React from 'react';
import SearchInput from '../../molecues/SearchInput/SearchInput';
import UserAvatar from '../../molecues/UserAvatar/UserAvatar';
import {
  Congratulations,
  Container,
  Payments,
  ProfileReport,
  Profit,
  Sales,
  Searchbar,
  TotalRevenue,
  Transactions,
} from './Dashboard.style';

const Dashboard = () => {
  return (
    <Container>
      <Searchbar>
        <SearchInput />
        <UserAvatar />
      </Searchbar>
      <Congratulations>cong</Congratulations>
      <Profit>profit</Profit>
      <Sales>Sales</Sales>
      <TotalRevenue>TotalRevenue</TotalRevenue>
      <Payments>Payments</Payments>
      <Transactions>Transactions</Transactions>
      <ProfileReport>ProfileReport</ProfileReport>
    </Container>
  );
};

export default Dashboard;
