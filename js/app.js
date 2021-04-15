//////////////////////////////////////////////////
// FETCH DATA FROM GOOGLE SHEETS
/////////////////////////////////////////////////
$.ajax(
  "https://spreadsheets.google.com/feeds/list/1CZy5ARuZPmpNls7UiGMzUrNoBKb6aWbpNZcNUI6L6gI/1/public/full?alt=json"
)
  //.then for when the data when arrives
  .then((data) => {
    // Map over the data, generate a simpler dataset
    const projects = data.feed.entry.map((item) => {
      return {
        name: item.gsx$name.$t,
        git: item.gsx$git.$t,
        live: item.gsx$live.$t,
        img: item.gsx$img.$t,
        description: item.gsx$description.$t,
      };
    });

    /////////////////////////////////////////////////
    // JQUERY RENDERING
    /////////////////////////////////////////////////

    const final = projects.map((project) => {
      console.log(project);
      return `
      <my-card name="${project.name}"  img=${project.img} live=${project.live} description="${project.description}" git=${project.git}></my-card>
      `;
    });

    const $section = $("section");

    $section.html(final.join(""));
  })

  //.catch in case of an error
  .catch((error) => {
    console.error(error);
  });
