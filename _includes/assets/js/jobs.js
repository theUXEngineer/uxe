const apiKey = 'bbdrasu3sa8rmdxjdthdpsp5g9kvwha4';
const headers = { 'Authorization': `Bearer ${apiKey}` };

const searchParams = new URLSearchParams({
    location: 'san francisco,ca',
    distance: 10,
    job_title: 'javascript developer'
  });
  
  const url = `https://api.ziprecruiter.com/jobs?${searchParams}`;
  
  fetch(url, { headers })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));