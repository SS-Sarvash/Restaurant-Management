import './App.css'
import vidBg from './assets/FireBg.mp4'
import NavBar from './components/NavBar'
import Bg from './components/Bg'
import { useState,useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddCard from './components/AddCard'
import LoginForm from './components/LoginForm'
import Register from './components/Register'
function App() {                      //App function
  const [data,setData] = useState([]) //declaration of state for data
  const [uPermission,setUpermission]=useState(false);
  useEffect(()=>{                     //this function is used to render the screen with new data
    const getTasks= async () =>{
      const tasksFromServer = await fetchTasks()
      setData(tasksFromServer)
    }
    getTasks()
  },[])                               //based on this data variable, the screen renders with the new data from json file.
                                      
  // useEffect(() => {                      //rendering with timer functionality
  //   setTimeout(() => {
  //     const getTasks= async () =>{       //declaration
  //       const tasksFromServer = await fetchTasks()
  //       setData(tasksFromServer)
  //     }
  //     getTasks() //invocation
  //   }, 3000);
  // },[data]);

  const fetchTasks = async () => {    //The data fetch function
    const res = await fetch('http://localhost:5000/cards')
    const data = await res.json()
    return data
  }

  const addCard = async (card) =>{    //function to POST the card details to json
    const res = await fetch('http://localhost:5000/cards',{
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(card)
    })
    const resp = await res.json()
    setData([...data, resp])
  }


  const deleteCard = async (id)=>{    //the method for deleting json data

    await fetch(`http://localhost:5000/cards/${id}`,
    {method: 'DELETE'})
    setData(data.filter((card)=> card.id !==id,
    console.log(id)
    ))
}




  return (
    <>
    <div className='main'>
    <video src={vidBg} autoPlay loop muted>
    </video>
          <div className='content'>
          <Router>
          
          <NavBar/>
          <br></br>
          
          <Routes>
          
          <Route exact path='/' element={<AddCard onAdd={addCard}/>}/>

          <Route path='/Admin' element={<Bg style data={data} onDelete={deleteCard} permission={uPermission}/>}/>
          

          <Route path='/Login' element={<LoginForm setPermission={setUpermission} permission={uPermission}/>}/>

          <Route path='/Register' element={<Register/>}/>
          
          </Routes>
          </Router>
          </div>
          
    </div>
    </>
  )
}

export default App 
