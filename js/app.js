//////////////////////////////////////////////////
// FETCH DATA FROM GOOGLE SHEETS
/////////////////////////////////////////////////
$.ajax(
  "https://sheets.googleapis.com/v4/spreadsheets/1CZy5ARuZPmpNls7UiGMzUrNoBKb6aWbpNZcNUI6L6gI/values/Sheet1?alt=json&key=AIzaSyC6tYEsAXpmdEaoHBGxO_la4W0go0O1ZBU"
)
  //.then for when the data when arrives
  .then((data) => {
    // Map over the data, generate a simpler dataset
    const projects = data.values.map((item) => {
      return {
        name: item[0],
        git: item[2],
        live: item[1],
        img: item[3],
        description: item[4],
      };
    });

    /////////////////////////////////////////////////
    // JQUERY RENDERING
    /////////////////////////////////////////////////

    const final = projects.map((project) => {
      return `
      <my-card name="${project.name}"  img=${project.img} live=${project.live} description=" ${project.description}" git=${project.git}></my-card>
      `;
    });

    const $section = $("section");

    $section.html(final.join(""));
  })

  //.catch in case of an error
  .catch((error) => {
    console.error(error);
  });
