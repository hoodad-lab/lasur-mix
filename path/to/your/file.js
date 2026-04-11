// Fine Tune Button Implementation

// Assuming sliders are set up with IDs 'sliderAdjPig' and 'sliderAdjDil'
// and display values are set up with IDs 'displayAdjPig' and 'displayAdjDil'

document.getElementById('fineTuneButton').addEventListener('click', function() {
    // Get current slider values
    var adjPig = document.getElementById('sliderAdjPig').value;
    var adjDil = document.getElementById('sliderAdjDil').value;
  
    // Round values to nearest whole number
    adjPig = Math.round(adjPig);
    adjDil = Math.round(adjDil);
  
    // Update sliders and display
    document.getElementById('sliderAdjPig').value = adjPig;
    document.getElementById('sliderAdjDil').value = adjDil;

    document.getElementById('displayAdjPig').innerText = adjPig;
    document.getElementById('displayAdjDil').innerText = adjDil;
});

// HTML Example for Fine Tune Button
// <button id='fineTuneButton'>Fine Tune</button>
