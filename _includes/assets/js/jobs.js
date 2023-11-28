const apiKey = 'bbdrasu3sa8rmdxjdthdpsp5g9kvwha4';

  function handleZipRecruiterResponse(data) {
    // Handle the data received from the API
    console.log('Data received:', data);

    // Add your data processing logic here
  }

  function handleZipRecruiterError() {
    console.error('Error fetching data from ZipRecruiter API');
  }

  function fetchZipRecruiterJobs() {
    const searchParams = 'your_search_params'; // Replace with your actual search parameters
    // const apiUrl = `https://api.ziprecruiter.com/jobs/v1?search=${searchParams}&api_key=${apiKey}&callback=handleZipRecruiterResponse`;
    const apiUrl = `https://api.ziprecruiter.com/jobs/v1?search=Perl%20Job&location=Santa%20Monica,%20CA&radius_miles=25&days_ago=&jobs_per_page=10&page=1&api_key=${apiKey}&callback=handleZipRecruiterResponse`;

    // Create a script element and append it to the document
    const script = document.createElement('script');
    script.src = apiUrl;

    // Set up error handling
    script.onerror = handleZipRecruiterError;

    document.body.appendChild(script);
  }

  // Call the function to initiate the JSONP request
  fetchZipRecruiterJobs();
