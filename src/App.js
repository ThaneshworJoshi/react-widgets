import React, { useState } from 'react';
import Accordion from './componets/Accordion';
import Search from './componets/Search';
import Transalate from './componets/Transalate';
import Dropdown from './componets/Dropdown';
import Route from './componets/Route';
import Header from './componets/header';

const items = [
  {
    title: 'What is react?',
    content: 'React is front end javascript framework'
  },
  {
    title: 'Why use react?',
    content: 'React is favorite js library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use react by creating components'
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Shade of Blue',
    value: 'blue'
  }
];

export default () => {

  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label='Select a color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Transalate />
      </Route>
    </div>
  );
}







// function App() {

//   const [selected, setSelected] = useState(options[0])
//   const [showDropdown, setShowDropdown] = useState(true);

//   return (
//     <div>
//       <Accordion items={items} />
//       <Search />

//       <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
//       {
//         showDropdown ?
//           <Dropdown
//             selected={selected}
//             onSelectedChange={setSelected}
//             options={options}
//           /> : null
//       }

//       <Transalate />
//     </div>
//   );
// }



// export default App;
