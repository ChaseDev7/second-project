import reactLogo1 from '../images/reactjs-icon.png'

export default function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <div className="logo-container">
          <img className="react-logo-1" src={reactLogo1} />
          <h2 className="logo-title">ReactFacts</h2>
        </div>
        <div className="project-name">React Course - Project 1</div>
      </div>
    </>
  )
}