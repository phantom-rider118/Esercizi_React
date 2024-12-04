import Age from "./Age"

// eslint-disable-next-line react/prop-types
function Welcome({name, age}){
    return (
        <div>
            <p>Welcome, {name}!</p>
            {age > 18 && <Age age={age}/>}
            {age && <Age age={age}/>}
            {age > 18 && age < 65 && <Age age={age}/>}
            {age > 18 && name === "John" && <Age age={age}/>}
        </div>
    )
}
export default Welcome