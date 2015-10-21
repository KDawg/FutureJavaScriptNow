
console.log('ES2015 R&D Suite Executing...');
console.log('=================');

TimeSucker();
TimeSucker(100000);
TimeSucker(1000000);
ReportTheSuck();


function TimeSucker(howMuchSuck = 1000) {
  // default values
  performance.mark('ts:before');

  let randomNumber = Math.random();
  // scoped variable declaration

  for (let i = 0; i < howMuchSuck; i++) {
    Math.cos(randomNumber);
    Math.sqrt(randomNumber);
    Math.sin(randomNumber);
  }

  performance.mark('ts:after');
  performance.measure('ts', 'ts:before', 'ts:after');
}


function ReportTheSuck() {
  let measures = performance.getEntriesByType('measure');

  console.log('ReportOnTimeSucker...');

  measures.forEach((entry, index, allEntries) => {
    // arrow syntax for anonymous function
    console.log(`${entry.duration} ms of sucking`);
    // string interpolation
  });

  console.log('=================');
}
