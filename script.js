async function predictDisease() {
    const input = document.getElementById("imageInput");

    if (!input.files.length) {
        alert("Please select an image.");
        return;
    }

    const formData = new FormData();
    formData.append("image", input.files[0]);

    const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    document.getElementById("result").innerHTML =
        `<h2>Prediction: ${result.disease}</h2>
         <p>Confidence: ${result.confidence}%</p>`;
}