import React, { useEffect, useState } from 'react';
import SearchInput from '../../molecues/SearchInput/SearchInput';
import UserAvatar from '../../molecues/UserAvatar/UserAvatar';
import {
  Api,
  Container,
  Payments,
  ProfileReport,
  Profit,
  Sales,
  Searchbar,
  TotalRevenue,
  Transactions,
} from './Dashboard.style';
import axios from 'axios';

const Dashboard = () => {
  const [apiImage, setApiImage] = useState('');

  useEffect(() => {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((res) => {
      setApiImage(res.data.message);
    });
  }, []);
  return (
    <Container>
      <Searchbar>
        <SearchInput />
        <UserAvatar />
      </Searchbar>
      <Api>
        <img src={apiImage} alt="dog"></img>
      </Api>
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
