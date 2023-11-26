import reactLogo1 from '../reactjs-icon.png'

export default function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <div className="logo-container">
          <img src={reactLogo1} />
          <h2 className="logo-title">React Facts</h2>
        </div>
        <h1>This is the Navbar</h1>
      </div>
    </>
  )
}