import React from 'react';

const FilteredFruitList = (props) => {
  let list = !props.filter || props.filter === 'all' ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);
  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  )
}

FilteredFruitList.defaultProps = {
  filter: [],
  fruit: [],
  handleChange: () => {}
}
export default FilteredFruitList;
