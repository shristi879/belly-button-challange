Watch live here : https://shristi879.github.io/belly-button-challange/


The init() function is executed  and then calls three other functions to display the metadata, horizontal bar chart, and bubble chart for a specific sample ID , we selected 940 and the sample ID is added to a dropdown menu.

The value function is called whenever the user selects a different sample ID from the dropdown menu. It sets the option variable to the new value and calls the three display functions again to update the charts and metadata for the selected sample ID.
The displayMetaData(option,dataSet) function displays the metadata for the selected sample ID by filtering the metadata array in the dataSet object using the id attribut;It then converts the metadata object to an HTML string using the displayObject() function;formats the object's key-value pairs into a series of HTML tags.

The displayHBarChart function displays a horizontal bar chart for the selected sample ID by filtering the samples array in the dataSet object using the id attribute. It then extracts the otu_ids, sample_values, and otu_labels arrays from the selected sample data and creates a trace object with these values; the trace object is then added to an array of data objects, and the Plotly.newPlot() function is called to create the chart.

 Creating a trace object with otu_ids and sample_values arrays for the x and y axes and using the otu_labels array for the text labels. The marker size and color are also set based on the sample_values and otu_ids arrays, respectively.

##For Bonus 

The function first calculates the level of the gauge based on the wfreq value, by multiplying it by 20. It then calculates the angle of the gauge pointer based on the level and converts it to radians.
Next, the function creates a path for the gauge pointer using the mainPath string and the pathX and pathY values calculated earlier. It then creates an array of data for the Plotly chart, consisting of two objects: a scatter plot for the gauge pointer, and a pie chart for the gauge itself.

The scatter plot represents the gauge pointer and has a size of 12 . The pie chart represents the gauge and has ten slices with different colors and labels, based on the frequency range. The hole property of the pie chart is set to 0.5 to create a donut shape. The function creates a layout object for the chart which includes the shapes property to add the gauge pointer and the xaxis and yaxis properties to set the range and visibility of the axes.

