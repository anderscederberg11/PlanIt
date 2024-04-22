import styles from '@/components/ExplorePageInfoComponents/Graph/Graph.module.css'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from "react"

ChartJS.register(
  CategoryScale,
  PointElement,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineGraph(){

  const textColor = 'rgb(242, 245, 234)';
  const fontFamily = 'Poppins'

  const [chartData, setChartData] = useState({
      datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
      setChartData({
          labels: ['1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'],
          datasets: [
            {
              label: 'Temperature of Oceans',
              data: [-0.2, -0.3, 0.3, -0.1, 0.1, 0, 0.24, 0.38, 0.39, 0.58, 0.79],
              backgroundColor: 'rgb(11, 170, 129)',
              borderColor: 'rgb(11, 170, 129)',
              borderWidth: 2,
              pointRadius: 5
            }
          ],
      })

      setChartOptions({
          plugins: {
              title: {
                display: true,
                text: 'Average Ocean Temperature',
                color: textColor,
                font: {
                  family: fontFamily,
                  size: '20px'
                }
              },
              legend: {
                labels: {
                  color: textColor,
                  font: {
                    family: fontFamily,
                    size: '14px'
                  }
                }
              }
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
                title: {
                  display: true,
                  text: 'Years',
                  color: textColor,
                  font: {
                    family: fontFamily,
                    size: '14px'
                  }
                },
                ticks: {
                  color: textColor,
                  font: {
                    family: fontFamily,
                    size: '14px'
                  }
                }
              },
              y: {
                stacked: true,
                title: {
                  display: true,
                  text: 'Temperature (°C)',
                  color: textColor,
                  font: {
                    family: fontFamily,
                    size: '14px'
                  }
                },
                ticks: {
                  color: textColor,
                  font: {
                    family: fontFamily,
                    size: '14px'
                  }
                }
              },
            },
          maintainAspectRatio: false,
          responsive:true
      })
  }, [])

  return(
      <>
          <div className={styles.graphWrap}>
            <div className={styles.graphWrapCenterer}>
              <div className={styles.graphWrapWidth}>
                <Line options={chartOptions} data={chartData} className={styles.testingCode}/>
              </div>
            </div>  
          </div>
      </>
  )
}