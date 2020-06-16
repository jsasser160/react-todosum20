import React from 'react';
const List = ({ title, todos}) => (
  <div>
    <h1>{title}</h1> 
    { todos.map( t => <li key={t.id}>{t.todosName}</li>) }
  </div>
)
export default List;