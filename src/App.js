import './App.css'
const App = () => {

  
  const getMessages = async ()=>{
    const options ={ 
        method: "POST" ,
        headers : {
            "Content-Type" : "application/json"
        },   
    body : JSON.stringify(
        {
            message : "who is alexander hamilton"
            
        }
        )
      }
    console.log('button press')
    try{
      const response = await fetch ('http://localhost:8000/completions', options)
        const data =  await response.json()
        console.log(data)
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div className="App">
      <section className="sidebar">
        <button>+ New Chat</button>
        <ul className='history'>
          <li>History </li>
        </ul>
        <nav>
          <p>Brandon T. Bande</p>
        </nav>
      </section>
      <section className="main">
        <h1>ChatGPT </h1>
        <ul className='feed'>

        </ul>
        <div className='bottom-section'>
          <div className='input-container'>
            <input />
            <div id ='submit'
                  onClick={
                    getMessages
                  }
            
            >➢</div>
          </div>
          <p className='info'>
            This is a ChatGPT clone aimed at accessing the OpenAI API in ReactJS
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
