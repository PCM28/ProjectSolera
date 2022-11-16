import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AxiosPushTaskList.scss';
import { useParams } from 'react-router-dom';

const AxiosPushTaskList = (props) => {
  const [taskList, setTaskList] = useState([]); //Poner el paréntesis
  const { id } = useParams();

  // axios.post('http://localhost:5000/ListTeam/' + id + '/activity', {
  axios.post('http://localhost:5000/activity/', {
    name: props.task,
    points: props.points,
  });

  return;
};
export default AxiosPushTaskList;
