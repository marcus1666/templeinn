const templeURL = "/templeinn/data/temples.json";

fetch(templeURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });

function makeCard(tempList) {
  const templeHtml = tempList.map((temple) => {
    //temple services
    const services = temple.services.map((service) => {
      return `<li>${service}</li>`;
    });

    //temple closure
    const closures = temple.closure.map((temple) => {});

    return `
        <div class="temple-card">
            <div class="temple-image">
              <div class="temple-name-overlay">
                <p>${temple.name}</p>
                <a href="${temple.link}" target="_blank">
                  <p>Book Appointment</p>
                  <span class="underline"></span>
                </a>
              </div>
            </div>
            <div class="temple-details">
              <div class="temple-location">
                <div>
                  <p>${temple.address}</p>
                  <p>${temple.phone}</p>
                  <p>${temple.email}</p>
                </div>
                <button>
                  <img src="./images/unfav.png" alt="favourite" />
                </button>
              </div>
              <div class="temple-services">
                <p>Services</p>
                <ul>
                  ${services.join("")}
                </ul>
              </div>
              <div class="temple-history">
                <p>History</p>
                <p>
                  ${temple.history}
                </p>
              </div>
              <div class="temple-schedule">
                <p>Ordinance/session schedule</p>
                <p>
                    ${temple.schedule}
                </p>
              </div>
              <div class="temple-closure">
                <p>Temple closure schedule</p>
                <p>2022</p>
                <ul>
                  <li>Saturday, 20 August 2022</li>
                  <li>Tue, 13 September 2022 - Tue, 27 September 2022</li>
                </ul>
              </div>
            </div>
          </div>`;
  });
}
