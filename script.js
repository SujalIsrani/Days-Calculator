function calculateDays() {
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);
    
    // Calculate the difference in milliseconds between the two dates
    const differenceInMs = endDate.getTime() - startDate.getTime();
    
    // Convert the difference to days
    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    
    // Display the result
    document.getElementById("result").innerHTML = `The number of days between the two dates is ${differenceInDays}.`;
  }
  