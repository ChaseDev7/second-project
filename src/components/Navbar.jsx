import reactLogo1 from '../reactjs-icon.jpg'

export default function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <div className="logo-container">
          <img src={reactLogo1} />
        </div>
        <h1>This is the Navbar</h1>
      </div>
    </>
  )
}