import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Search.module.css'
import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const SearchBar = () => {
  const [keyword, setKeyword] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
    history.push({
      pathname: '/search',
      search: `?q=${keyword}`,
    })
    setKeyword('')
  }

  return (
    <div>
      <div className={styles.BarContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            autoFocus
            className={styles.BarStyling}
            value={keyword}
            placeholder={'Search author, genre or book'}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

export default SearchBar
