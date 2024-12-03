import Eta from "./components/anni"

// eslint-disable-next-line react/prop-types
function Welcome({name}){
    return(
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            <Eta/>
        </div>
    )
}
export default Welcome