import './App.css'

function App() {

  return (
    <div>
      <div className='logo-box'>
        <img src='./twitter-logo-png.png' alt='logo' className='logo'/>
        <h2>Sign In to Twitter</h2>
        <button>
        <img src='./google-logo-png.png' alt='logo'/>
        Sign In with Google
        </button>
        <button>
        <img src='./apple-logo-png.png' alt='logo'/>
        Sign In with Google
        </button>

        <hr></hr>

        <span>Or</span>

        <form>
          <input type='text' placeholder='Phone, email, username' />
          <button>Next</button>
        </form>

        <button>Forgot Password</button>
        <p>Don't have an account <a>Sign Up</a></p>
      </div>
    </div>
  )
}

export default App
