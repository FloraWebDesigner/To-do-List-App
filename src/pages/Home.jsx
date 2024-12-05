import {Link} from "react-router-dom"
import Trivia from "../components/Trivia"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    document.title="Home | My Trivia App";
},[])
    return (
          <main className="bg-secondary text-light">
    <Trivia />
          </main>
      )
}


