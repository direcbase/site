<script>
    import { onMount } from "svelte";
    // library that creates chart objects in page
    import {
        Chart as ChartJS,
        CategoryScale,
        LineController,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
        } from 'chart.js';

    function initChart(ctx){
        const labels = ['Mon', '', '', '', '', '', 'Sun'];
        const yGradient = ctx.createLinearGradient(0, 0, 0, 400);
            yGradient.addColorStop(0, 'rgba(53, 162, 235, 1)');   
            yGradient.addColorStop(1, 'rgba(53, 162, 235, 0)');
        const y1Gradient = ctx.createLinearGradient(0, 0, 0, 400);
            y1Gradient.addColorStop(0, 'rgba(255, 99, 132, 1)');   
            y1Gradient.addColorStop(1, 'rgba(255, 99, 132, 0)');
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Requests',
                    data: [1,4,7,3,2,8,10],
                    yAxisID: 'y',
                    lineTension: 0.2,   
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: yGradient,//'rgba(53, 162, 235, 0.5)',
                    //fillColor: yGradient,
                    fill: true,
                },
                
                {
                    label: 'Realtime Subscribers',
                    data: [1,6,7,1,2,18,10],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: y1Gradient,//'rgba(255, 99, 132, 0.5)',
                    yAxisID: 'y1',
                    lineTension: 0.2,
                    fill: true,
                },
                
            ]
        };
        const options = {
            responsive: true,
            interaction: {
                mode: 'index' ,
                intersect: false,
            },
            //stacked: true,
            plugins: {
                title: {
                    display: true,
                    text: 'This week log',
                },
            },
            
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: false
                    },
                    title: {
                        display: false,
                        text: 'Day'
                    }
                },
                y: {
                    type: 'linear' ,
                    display: true,
                    position: 'left' ,
                    title: {
                        display: true,
                        text: 'Request'
                    }
                },
                y1: {
                    type: 'linear' ,
                    display: true,
                    position: 'right' ,
                    grid: {
                        drawOnChartArea: false,
                    },
                    title: {
                        display: true,
                        text: 'Subscriber'
                    }
                },
            },
        };
        return {
                type: 'line',
                data,
                options
            };
    }
    let config;
    // init chart
    onMount(async () => {
        
        ChartJS.register(
            LineController,
            CategoryScale,
            LinearScale,
            PointElement,
            LineElement,
            Title,
            Tooltip,
            Legend,
            Filler
            );
        const ctx = document.getElementById('line-chart').getContext('2d');
        config = initChart(ctx);
        const chart = new ChartJS(ctx, config);
    });
  </script>
  
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded "
  >
    <div class="p-4 flex-auto">
      <!-- Chart -->
      <div class="relative h-350-px">
        <canvas id="line-chart"></canvas>
      </div>
    </div>
  </div>
  