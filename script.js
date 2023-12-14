import Chart, { elements } from 'chart.js/auto';

let responseData = null;

const req = new XMLHttpRequest();
req.addEventListener("load", evt => {
    responseData = JSON.parse(req.responseText);
    responseData = responseData[2].data;
 

  
    
    
    (async function() {
      console.log(responseData)

      let filter1  = responseData.filter(element => element.status =="SAT")
      let filter2 = responseData.filter(element => element.status =="UNSAT")
      let filter3 = responseData.filter(element => element.status =="UNKNOWN")
      console.log(filter1)

        const chartData = [
            { year: "SAT", count: filter1.length },
            { year: "UNSAT", count: filter2.length },
            { year: "UNKNOWN", count: filter3.length},

        ];

        new Chart(
            document.getElementById('acquisitions'),
            {
                type: 'pie',
                data: {
                    labels: chartData.map(row => row.year),
                    datasets: [
                        {
                            label: 'nombre de ',
                            data: chartData.map(row => row.count)
                        }
                    ]
                }
            }
        );
    })();
});
         

 
req.open("GET", "https://www.cril.univ-artois.fr/~lecoutre/teaching/jssae/code5/results.json");
req.send();