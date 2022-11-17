import axios from "axios";

import React, { useEffect, useState } from "react";

// import './Axios.scss';

const Axios = () => {
  const [taskList, setTaskList] = useState([]); //Poner el paréntesis

  const getTaskList = async () => {
    const res = await axios.get(`https://ghibliapi.herokuapp.com/taskList/`); // console.log(res) puedes colocarlo en la siguiente línea en vez de tenerlo dentro del <h1>
    setTaskList(res.data);
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <div className="cartelera">
      <h1>{taskList[0].title}</h1>

      {taskList.map((task) => {
        //taskList && , antes de taskList.map

        return (
          <div className="movie">
            <h1>{task.name}</h1>
            <img width="100px" src={task.point} />
          </div>
        );
      })}
    </div>
  );
};

export default Axios;
