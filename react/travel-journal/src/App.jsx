import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(card => {
        return (
            <Card
                {...card}
            />
        )
    })
    return (
        <>
            <Header/>
            <div className="container">
              {cards}
            </div>
        </>
    )
}