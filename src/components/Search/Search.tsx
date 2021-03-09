import { Button } from '@chakra-ui/button';
import React, { FC, FormEvent, FormEventHandler, useState } from 'react';
import Select from 'react-select/async-creatable';
import makeAnimated from 'react-select/animated';
import { OptionsType, OptionTypeBase } from 'react-select';

export interface SearchResult {
  label: string;
  value: any;
}

type SearchTerms = (inputValue: string) => Promise<SearchResult[]>;

interface Props {
  searchTerms: SearchTerms;
  onSubmitSearch: () => void;
  validateNewOption?: (inputValue: string) => boolean;
  labelButton?: string;
  placeholder?: string;
}

const animatedComponents = makeAnimated();

const components = {
  DropdownIndicator: null,
  ...animatedComponents,
};

const Search: FC<Props> = ({
  searchTerms,
  validateNewOption,
  onSubmitSearch,
  labelButton = 'Search',
  placeholder = 'Search a terms...',
}) => {
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[] | null>(null);

  return (
    <form onSubmit={onSubmit}>
      <Select
        isMulti
        placeholder={placeholder}
        components={components}
        loadOptions={loadOptions}
        onChange={onChange}
        isValidNewOption={isValidNewOption}
        isClearable
        name="search-terms"
      />
      <Button type='submit' disabled={!canSubmit}>{labelButton}</Button>
    </form>
  );

  async function loadOptions(inputValue: string): Promise<SearchResult[]> {
    return searchTerms(inputValue);
  }

  function isValidNewOption(inputValue: string, _value: any, _options: any) {
    if (typeof validateNewOption !== 'undefined') {
      return validateNewOption(inputValue);
    }

    return true;
  }

  function onChange(values: any, _action: any): void {
    const currentValues = values.map((result: SearchResult) => result.value);

    if(currentValues.length > 0) {
      setSelectedValues(currentValues);
      setCanSubmit(true);
    } else {
      setSelectedValues(null);
      setCanSubmit(false);
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(selectedValues);
    // onSubmitSearch();
  }
}

export default Search;