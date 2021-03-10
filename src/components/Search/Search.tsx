import React, { FC, FormEvent, useState } from 'react';
import Select from 'react-select/async-creatable';
import makeAnimated from 'react-select/animated';
import { Flex } from '@chakra-ui/layout';
import Button from 'components/Button/Button';

import MultiValueLabel from './MultiValueLabel';
import customStyles from './Search.styles';

export interface SearchResult {
  label: string;
  value: any;
}

type SearchTerms = (inputValue: string) => Promise<SearchResult[] | undefined>;

interface Props {
  searchTerms: SearchTerms;
  onSubmitSearch: (selectedValues: any | null) => void;
  validateNewOption?: (inputValue: string) => boolean;
  labelButton?: string;
  placeholder?: string;
}

const animatedComponents = makeAnimated();

const components = {
  ...animatedComponents,
  MultiValueLabel,
  DropdownIndicator: null,
};

const Search: FC<Props> = ({
  searchTerms,
  validateNewOption,
  onSubmitSearch,
  labelButton = 'Search',
  placeholder = 'Search a terms...',
}) => {
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Flex
      as='form'
      align='center'
      onSubmit={onSubmit}
    >
      <Select
        isMulti
        placeholder={placeholder}
        components={components}
        loadOptions={loadOptions}
        onChange={onChange}
        isValidNewOption={isValidNewOption}
        isClearable
        styles={customStyles}
        name="search-terms"
      />
      <Button
        isLoading={isLoading}
        type='submit'
        disabled={!canSubmit}
      >{labelButton}</Button>
    </Flex>
  );

  async function loadOptions(inputValue: string): Promise<SearchResult[]> {
    const terms = await searchTerms(inputValue);

    if(terms) {
      return terms;
    }

    return [];
  }

  function isValidNewOption(inputValue: string, _value: any, options: any) {
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

  function onSubmit(event: FormEvent): void {
    event.preventDefault();
    setIsLoading(true);
    onSubmitSearch(selectedValues);
    setIsLoading(false);
  }
}

export default Search;
