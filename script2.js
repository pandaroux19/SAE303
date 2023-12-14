import Chart, { elements } from 'chart.js/auto';

    window.addEventListener('DOMContentLoaded', (event) => {
    
        let allSolvers = [...new Set(data[2].data.map(entry => entry.name))];
    
        let solvedProblemsAllSolvers = [];
        allSolvers.forEach(solver => {
            let solverData = data[2].data.filter(entry => entry.name === solver);
            let solvedProblems = solverData.filter(entry => entry.status === 'SAT').length;
            solvedProblemsAllSolvers.push({ solver: solver, solvedProblems: solvedProblems });
        });
    
        solvedProblemsAllSolvers.sort((a, b) => a.solvedProblems - b.solvedProblems);
    
        let ctxBarChartAllSolvers = document.getElementById('myBarChartAllSolvers').getContext('2d');
        let myBarChartAllSolvers = new Chart(ctxBarChartAllSolvers, {
            type: 'bar',
            data: {
                labels: solvedProblemsAllSolvers.map(solverData => solverData.solver),
                datasets: [{
                    label: 'Nombre de problèmes résolus',
                    data: solvedProblemsAllSolvers.map(solverData => solverData.solvedProblems),
                    backgroundColor: [
                        'rgba(255, 104, 153, 0.4)',
                        'rgba(255, 104, 204 , 0.4)',
                        'rgba(255, 153, 204, 0.4)',
                        'rgba(255, 244, 255, 0.4)',
                        'rgba(204, 168, 255, 0.4)',
                        'rgba(204, 204, 255, 0.4)',
                        'rgba(97, 204, 255, 0.4)',
                        'rgba(95, 255, 153, 0.4)',
                        'rgba(60, 255, 204, 0.4)',
                        'rgba(204, 255, 204, 0.4)',
                    ],
                    borderColor: [
                        'rgba(255, 204, 153, 1)',
                        'rgba(255, 204, 204 , 1)',
                        'rgba(255, 153, 204, 1)',
                        'rgba(255, 204, 255, 1)',
                        'rgba(204, 153, 255, 1)',
                        'rgba(204, 204, 255, 1)',
                        'rgba(153, 204, 255, 1)',
                        'rgba(204, 255, 153, 1)',
                        'rgba(153, 255, 204, 1)',
                        'rgba(204, 255, 204, 1)', 
                    ],
                    borderWidth: 3
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });