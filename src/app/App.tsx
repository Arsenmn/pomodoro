import { Header } from "../components/Header/Header"
import Main from "../components/Main"
import { useBackground } from "../hooks/useBackground.hook"




function App() {
  const { background } = useBackground()

  const backgroundLogic = {backgroundImage: background ? `url(${background})` : `url("/colouredBg.jpg")`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}

  return (
    <div 
      className="bg-center bg-cover select-none"
      style={backgroundLogic}
    >
      <header className="pt-2">
        <Header/>
      </header>
      <Main />
    </div>
  )
}

export default App
