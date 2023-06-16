console.log("connected");

fetch("https://data.sec.gov/submissions/CIK0001659815.json")
    .then(response => response.json())
    .then(data => console.log(data))


fetch("https://data.sec.gov/api/xbrl/companyfacts/CIK0000320193.json")
    .then(response => response.json())
    .then(data => console.log(data))