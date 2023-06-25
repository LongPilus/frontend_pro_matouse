

function getCurrentDBstate() {

    url = "https://2dcf-85-199-235-252.ngrok-free.app/blocks"

    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  

    mock_json = [

        {
            "wallet": "sdfskjfdksjfd",
            "co2": 9384983,
        },
        {
            "wallet": "sdfsdfknkdf",
            "co2": 384829,
        },
        {
            "wallet": "skjdfnskjf",
            "co2": 39848439,
        }
    ]

    return mock_json 

}
