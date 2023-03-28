
    
    
    
    
    Belly Button diversity challange
    
 
    
    
The 'init()' function initializes the webpage by selecting the dropdown menu and populating it with options based on the data. It also calls functions to display metadata, a bar chart, a bubble chart, and a gauge chart based on the first sample in the list.

The 'displayMetadata(sample)' function displays the metadata for the selected sample by filtering the data based on the sample ID and using Object.entries() to add each key/value pair to the HTML panel.

The 'displayBarChart(sample)' function displays a horizontal bar chart of the top 10 OTUs present in the selected sample, using Plotly.js to create a trace and layout.

The 'displayBubbleChart(sample)' function displays a bubble chart of the bacteria per sample in the selected sample, also using Plotly.js to create a trace and layout.

The 'optionChanged(value)' function is called whenever a new option is selected from the dropdown menu, and it updates the visualizations based on the new value.

Finally, the 'init()' function is called to initialize the webpage and display the initial visualizations.
