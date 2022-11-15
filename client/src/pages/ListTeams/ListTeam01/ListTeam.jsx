import React from "react";
import "./ListTeam.scss";
function ListTeam01() {
  const rows = [];
  for (let index = 0; index < 10; index++) {
    rows.push(
      <tr>
        <td>Trabajo en equipo 1</td>
        <td>5 puntos</td>
        <td>
          <button className="edit">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="delete">
            <i class="fa-solid fa-circle-minus"></i>
          </button>
        </td>
      </tr>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th className="title">TEAM1</th>
          <th className="title">50 puntos total</th>
          <th>
            <button className="add" type="button">
              {" "}
              <i class="fa-solid fa-plus"></i>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ListTeam01;
