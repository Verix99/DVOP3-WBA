
import './App.css'
import ListItem from './components/ListItem'

function App() {
  return (
    <>
      <body>
        <div className="background">
          <div className="text">
            <h1>Hello SSPS</h1>
            <ul>
                <ListItem title = "ahoj"/>
                <ListItem title = "Domčo"/>
                <ListItem />
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.77 14.692h.884V9.308h-2.27v.884H6.77v4.5Zm2.345 0H13V9.308H9.115v5.384Zm.885-.884v-3.616h2.115v3.616H10Zm4.444.884h.885v-2.365l2.288 2.365h1.23l-2.653-2.73l2.652-2.654h-1.19l-2.327 2.327V9.308h-.885v5.384ZM4 20V4h16v16H4Zm1-1h14V5H5v14Zm0 0V5v14Z"/></svg>
          </div>
        </div>
      </body>
    </>
  )
}

export default App
