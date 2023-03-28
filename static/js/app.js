
// Place url in a constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"


d3.json(url).then(function(data) {
  console.log(data);
});


function init() {

let dropdownMenu = d3.select("#selDataset");
    
    d3.json(url).then((data) => {
        
        let names = data.names;
             names.forEach((id) => {
            console.log(id);

            dropdownMenu.append("option")
            .text(id)
            .property("value",id);
        });

        // Set the first sample from the list
        let sample_one = names[0];
          console.log(sample_one);

    //display all sample
        displayMetadata(sample_one);
        displayBarChart(sample_one);
        displayBubbleChart(sample_one);
        displayGaugeChart(sample_one);

    });
};


function displayMetadata(sample) {

    // Use D3 to retrieve all of the data
    d3.json(url).then((data) => {

        // Retrieve  metadata
        let metadata = data.metadata;

        // Filter based on the value of the sample
        let value = metadata.filter(result => result.id == sample);
            console.log(value)

        let valueData = value[0];

        // Clear out metadata
        d3.select("#sample-metadata").html("");

        // Use Object.entries to add each key/value pair to the panel
        Object.entries(valueData).forEach(([key,value]) => {
                console.log(key,value);

            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });

};

// Function to  build the bar chart
function displayBarChart(sample) {

    // Use D3 to retrieve all data
    d3.json(url).then((data) => {

        // Retrieve all sample data
        let sampleInfo = data.samples;

        // Filter based on the value of the sample
        let value = sampleInfo.filter(result => result.id == sample);

        // Get the first index from the array
        let valueData = value[0];

        // Get the otu_ids, lables, and sample values
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;
           
            console.log(otu_ids,otu_labels,sample_values);

       
            // Set top ten items to display in descending order
        let ylabel = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
        let xlabel = sample_values.slice(0,10).reverse();
        let labels = otu_labels.slice(0,10).reverse();
        
        // Set up the trace for the bar chart
        let trace = {
            x: xlabel,
            y: ylabel,
            text: labels,
            type: "bar",
            orientation: "h"
        };

        
        let layout = {
            title: "Top 10 OTUs Present"
        };

        
        Plotly.newPlot("bar", [trace], layout)
    });
};

// function to display the bubble chart
function displayBubbleChart(sample) {

    // Use D3 to retrieve all of the data
    d3.json(url).then((data) => {
        
        let sampleInfo = data.samples;

        // Filter based on the value of the sample
        let value = sampleInfo.filter(result => result.id == sample);

        // Get the first index from the array
        let valueData = value[0];

        
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

    
        console.log(otu_ids,otu_labels,sample_values);
        
        // for bubble chart
        let trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };

        
        let layout = {
            title: "Bacteria Per Sample",
            hovermode: "closest",
            xaxis: {title: "OTU ID"},
        };

        
        Plotly.newPlot("bubble", [trace1], layout)
    });
};


function optionChanged(value) { 
     console.log(value); 

    
    displayMetadata(value);
    displayBarChart(value);
    displayBubbleChart(value);
    displayGaugeChart(value);
};

init();