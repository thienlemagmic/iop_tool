import logo from './logo.svg';
import './App.css';

import React, { useState, useCallback } from "react";
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [checkInDate, setCheckInDate] = useState(null);

  const handleCheckInDate = (date) => {
    setCheckInDate(date);
  };

  var request = require("request");

  const [startDate, setStartDate] = useState(new Date().setMonth(0));
  const [endDate, setEndDate] = useState(new Date());
  const folderInput = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    console.log(startDate);
    console.log(endDate);

    var JSZip = require("jszip");
    var zip = new JSZip();

    var json = {
      "appId": "13797",
      "serverName": "PlayerLogServer",
      "serverSecret": process.env.REACT_APP_SERVER_SECRECT,
      "service": "globalEntity",
      "operation": "GET_LIST",
      "data": {
        "where": {
          "entityType": "player_log"
        },
        "orderBy": {

        },
        "maxReturn": -1
      }
    };

    var url = "https://sharedprod.braincloudservers.com/s2sdispatcher";

    request({
      url: url,
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      json: json
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var entityList = body['entityList'];
        entityList.forEach(element => {
          var csv = element['data']['csv'];
          var id = element['ownerId'];
          zip.file(id + ".csv", csv);
        });

        zip.generateAsync({ type: "blob" })
          .then(function (content) {
            saveAs(content, "all_log.zip");
          });
      }
      else {
        console.log("error: " + error);
        console.log("response.statusCode: " + response.statusCode);
      }
    });

    function saveAs(blob, fileName) {
      const element = document.createElement("a");
      const file = new Blob([blob], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = fileName;
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Download All Player Logs
        </p>

        <p>

          From
        </p>
        <DatePicker
        dateFormat = "dd-MM-yyyy"
          selected={startDate}
          onChange={date => setStartDate(date)}
        />

        <p>
          To
        </p>
        <DatePicker
        dateFormat = "dd-MM-yyyy"
          selected={endDate}
          onChange={date => setEndDate(date)}
        />

        <p>


        </p>

        <form onSubmit={handleSubmit}>
          <button type="submit">Download</button>
        </form>
      </header>
    </div>
  );
}

export default App;
