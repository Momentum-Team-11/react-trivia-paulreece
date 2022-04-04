import { useState } from "react";
import { Listbox } from "@headlessui/react";

const MyListBox = ({ categories, onChange }) => {
  const [curCategory, setCurCategory] = useState(categories[0]);
  return (
    <>
      {console.log(categories)}
      <Listbox value={curCategory} onChange={onChange}>
        <Listbox.Button>{curCategory?.name}</Listbox.Button>
        <Listbox.Options>
          {categories.map((category) => (
            <Listbox.Option
              key={category.id}
              name={category.name}
              id={category.id}
            >
              {category.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </>
  );
};

export { MyListBox };
