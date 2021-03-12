import React, { FC, FormEvent, useState } from 'react';
import Select from 'react-select/async-creatable';
import makeAnimated from 'react-select/animated';
import { Flex } from '@chakra-ui/layout';
import Button from 'components/Button/Button';

import MultiValueLabel from './MultiValueLabel';
import customStyles from './Search.styles';
import { Option } from 'react-select/src/filters';

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
  const [selectedValues, setSelectedValues] = useState<(SearchResult | any)[] | null>(null);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Flex
      as='form'
      align='center'
      onSubmit={onSubmit}
    >
      <Select
        isMulti
        defaultOptions
        cacheOptions
        placeholder={placeholder}
        components={components}
        loadOptions={loadOptions}
        onChange={onChange}
        filterOption={filterOption}
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

  function filterOption(option: Option, _rawInput: any): boolean {
    return !selectedLabels?.some((value) => value === option.label);
  }

  async function loadOptions(inputValue: string): Promise<SearchResult[]> {
    const terms = await searchTerms(inputValue);

    if (terms) {
      return terms;
    }

    return [];
  }

  function isValidNewOption(inputValue: string, terms: SearchResult[], _options: any) {
    const isOptionExist = terms.some((term: SearchResult) => term.value === inputValue);

    if (isOptionExist) {
      return false;
    }

    if (typeof validateNewOption !== 'undefined') {
      return validateNewOption(inputValue);
    }

    return true;
  }

  function onChange(values: any, _action: any): void {
    const currentValues = values.map((result: SearchResult) => result.value);
    const currentLabels = values.map((result: SearchResult) => result.label);

    if(currentValues.length > 0) {
      setSelectedValues(currentValues);
      setSelectedLabels(currentLabels);
      setCanSubmit(true);
    } else {
      setSelectedValues(null);
      setSelectedLabels([]);
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
