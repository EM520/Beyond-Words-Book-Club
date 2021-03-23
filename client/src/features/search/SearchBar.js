import React, { useState } from 'react'
import { useHistory} from 'react-router-dom'
import styles from './Search.module.css'
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const SearchBar = () => {
  const [keyword, setKeyword] = useState('')
  const history = useHistory()

  const clickSearch = () => {
    history.push({
      pathname: '/search',
      search: `?q=${keyword}`
  })
}
  const handleSubmit = (e) => {
  e.preventDefault()
  console.log('hello')
  history.push({
    pathname: '/search',
    search: `?q=${keyword}`
  })
    setKeyword('')
    window.location.reload()
  }

  return (
    <div >
    <div className="bar">
    <form onSubmit={(e) => handleSubmit(e)}>  
      <input
      autoFocus
        className={styles.BarStyling}
        value={keyword}
        placeholder={'Search author, genre or book'}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} onClick = {()=> {clickSearch()}} className={styles.buttonSearch}/>
    </Tooltip>
    </form>

    </div>
    </div>
  )
}

export default SearchBar