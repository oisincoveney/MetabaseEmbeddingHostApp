import "./TestError.css"

export const TestError = ({message}) => {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{fontSize: "10rem"}}>😔</div>
            <h1>Something bad happened</h1>
            <p>{message}</p>
        </div>
    )
}