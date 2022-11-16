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
  //(
  // <div className="cartelera">
  //   <h1>{films[0].title}</h1>
  //   {films.map((film) => {
  //     //films && , antes de films.map
  //     return (
  //       <div className="movie">
  //         <h1>{film.title}</h1>
  //         <img
  //           width="100px"
  //           src={film.image}
  //         />
  //       </div>
  //     );
  //   })}
  // </div>
  // );
};
export default AxiosPushTaskList;
