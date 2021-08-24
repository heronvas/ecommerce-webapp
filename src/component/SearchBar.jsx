import React from 'react'
import { InputBase, makeStyles, alpha} from '@material-ui/core'; 
import {Search} from '@material-ui/icons'

const useStyle = makeStyles((theme) => ({
    
    search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#6f706e',
        marginLeft: 20,
        width: '50%',
        display: 'flex',
        
      },
      searchIcon: {
        padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width: '100%'
      },
      inputInput: {
        // vertical padding + font size from searchIcon
        
      }
    
}))


export default function SearchBar() {
    const styles = useStyle();
    return (
        <div className={styles.search}>
            <div className={styles.searchIcon}>
              <Search/>
            </div>
            <InputBase
              placeholder="Search Here"
              classes={{
                root: styles.inputRoot,
                input: styles.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
    )
}


