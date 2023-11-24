import {render} from "react-dom";
import {Counter} from "./components";

function App() {
    return <div>
        <Counter/>
    </div>;
}

render(<App/>, document.getElementById("root"));
