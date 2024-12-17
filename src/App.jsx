import { Header } from "./components/Header"
import { Post } from "./Post"

import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Manoel Rodriguez"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente molestias optio laborum 
          tenetur blanditiis inventore cumque quaerat odio suscipit eos esse sunt repellat id impedit, 
          quo nisi doloribus aspernatur expedita."
          />
        </main>
      </div>
    </div>
  )
}

export default App
