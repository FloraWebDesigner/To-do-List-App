import Nav from "../Nav"
import logo from "@/assets/logo.png";


export default function Header() {
return(
    <header id="header" className="row bg-dark p-2 d-flex flex-row justify-content-between align-items-center">
    {/* use "className" */}
    {/* my JSX comment */}
    <h2 className="site-name col-md-6">
        <img src={logo} alt="this is Trivia's logo"></img>
    <a href="https://opentdb.com/api_config.php" className="text-light">Welcome to Trivia</a>
    </h2>
    <Nav />
    </header>
)
}