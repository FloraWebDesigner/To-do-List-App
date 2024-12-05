import {Link} from "react-router-dom"
import Trivia from "../components/Trivia"
import { useEffect } from "react"

export default function  About() {

useEffect(() => {
    document.title="About | My Trivia App";
},[])

    return (
<main className="bg-secondary">
    <div className="container text-light">
    <h1 className="text-start my-3">About Trivia Database</h1>
    <p>The Open Trivia Database provides a rich trivia question library.</p>

        <Link to="/" className="w-100 btn btn-dark">Start Test</Link>
        </div>
    </main>

    )
}