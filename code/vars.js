
// TODO: refactor this up as a module called by app.js
//   .setup()
//   .render()

(function() {

  let primary, secondary, allColors;


  function setupColors() {
    primary = ['red', 'green', 'blue'];
    secondary = ['yellow', 'magenta', 'cyan'];

    allColors = [...primary, 'white', 'black',...secondary];
    // spread operator (spreading elements of an iterable collection)
  }


  function reportColors() {
    console.log(`Let's include all of the colors: ${allColors}`);
  }


  setupColors();
  reportColors();

})();
