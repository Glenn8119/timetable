import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from "./components/mainPage";
import CoverPage from "./components/coverPage";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={CoverPage} />
                    <Route path="/main" component={MainPage} />
                </div>
            </BrowserRouter>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)

// async function fetchData() {
//     const response = await axios.get("https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/DailyTimetable/OD/0990/to/1060/2021-03-15?$top=30&$format=JSON", {
//         headers:{
//             "Authorization":'hmac username="074a161350e14f9799c1a8bcf708cff4", algorithm="hmac-sha1", headers="x-date", signature="Base64(HMAC-SHA1("x-date:" + x-date , PioM5p7dfmOk5XhIUh0U1IolXzc))"',
//             "x-date": xDate
//         }
//     })
//     console.log(response);
// }

// muted loop autoPlay  ./video/video.mp4

