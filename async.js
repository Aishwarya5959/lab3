async function fetchData() {
    try {
        let response = await fetch("xyz.txt");
        let data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData();
