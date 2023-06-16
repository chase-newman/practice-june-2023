console.log("connected");

fetch("https://data.sec.gov/submissions/CIK0001659815.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.name);
        document.getElementById("company-name").innerHTML = data.name;
    });


