import { Header } from "./components/Header"
import { Post } from "./Post"
import "./global.css"

function App() {

  return (
    <div>
      <Header />
      <Post
        author="Manoel Rodriguez"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente molestias optio laborum 
          tenetur blanditiis inventore cumque quaerat odio suscipit eos esse sunt repellat id impedit, 
          quo nisi doloribus aspernatur expedita."
      />
    </div>
  )
}

export default App
