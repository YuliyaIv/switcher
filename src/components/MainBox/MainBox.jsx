import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import FilterButtons from '../FilterButtons/FilterButtons';
import MultipleStatusChanges from '../MultipleStatusChanges/MultipleStatusChanges';
import PresetSwitches from '../PresetSwitches/PresetSwitches';
import SearchBar from '../SearchBar/SearchBar';
import { getFilteredCategories } from '../../helpers/utils'

const MainBox = ({ listCategories, listPresets }) => {
  const [presets, setPresets] = useState();
  const [categories, setCategories] = useState();
  const [filterValue, setFilterValue] = useState();
  const [selectedPresetName, setSelectedPresetName] = useState('');


  useEffect(() => {
    setPresets(listPresets)
  }, [listPresets, setPresets])

  useEffect(() => {
    setCategories(getFilteredCategories(listCategories, filterValue))
  }, [listCategories, filterValue])


  return <div className='box'>
    <div className='header'>
      <PresetSwitches
        presets={presets}
        selectedPresetName={selectedPresetName}
        setSelectedPresetName={setSelectedPresetName}
      />
      <SearchBar
        setFilterValue={setFilterValue}
      />
    </div>
    <div className='main'>
      <Categories
        categories={categories}
        presets={presets}
      />
    </div>
    <div className='footer'>
      <FilterButtons
        setFilterValue={setFilterValue}
      />
      <MultipleStatusChanges />
    </div>
  </div>
}

export default MainBox