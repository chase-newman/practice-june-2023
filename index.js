console.log("connected");

fetch("https://data.sec.gov/submissions/CIK0001659815.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.name);
        console.log(data.filings.recent.form[0]);
        document.getElementById("company-name").innerHTML = data.name;
        document.getElementById("most-recent-filing").innerHTML = data.filings.recent.form[0];
    });

console.log(Math.floor(Math.random() * 10))


