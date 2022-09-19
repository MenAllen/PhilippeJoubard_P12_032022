import {Link, NavLink} from 'react-router-dom';
import React from "react";
import styled from "styled-components";
import { useFetch } from "../utils/api";
import { Loader } from "../utils/Atoms";
import { USER_MAIN_DATA } from "../data/mockedData";

const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
`;

function Home() {

  const dataList = USER_MAIN_DATA;

  return  (
  <React.Fragment>
    <Paragraph><strong>Bienvenue !</strong></Paragraph>
    <Link to={`/user/${dataList[0].id}`}><Paragraph>{dataList[0].userInfos.firstName}</Paragraph></Link>
    <Link to={`/user/${dataList[1].id}`}><Paragraph>{dataList[1].userInfos.firstName}</Paragraph></Link>
  </React.Fragment> )
}

export default Home;
