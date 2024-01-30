import {ProductName} from "./components/product_name.jsx";
import {Offer} from "./components/offer.jsx";
function App() {
  return (
      <div className={"app"}>

        <img className={"img"} src={"https://www.stilcomp.cz/files/files/hp-elitedesk-800-g1-sff-i5-4570-8gb-ram-500gb-hdd-w10.jpg"} alt={"Obrázek"}></img>

          <div className={"info"}>
              <ProductName/>

              <p></p>
              <span className={"offerTag"}>Offers</span>
              <Offer/>
          </div>
      </div>
  )
}

export default App