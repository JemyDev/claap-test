import React, { FC, useState } from 'react';
import { components, OptionProps } from 'react-select';

const Option: FC<OptionProps<any, any>> = ({ data, ...props }) => {
  const { isDisabled } = props;
  const [newData, setNewData] = useState<any>(data);


  return (
    !isDisabled ? (
      <div onClick={onSelect}>
        <components.Option data={newData} {...props} />
      </div>
    ) : null
  );

  function onSelect(): void {
    setNewData({ isDisabled: true, ...newData });
  }

}

export default Option;
