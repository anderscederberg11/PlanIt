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

export default function DoubleLineGraph(){

  const textColor = 'rgb(242, 245, 234)';
  const fontFamily = 'Poppins'

  const [chartData, setChartData] = useState({
      datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
      setChartData({
          labels: ['1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2018'],
          datasets: [
            {
              label: 'Arctic',
              data: [7.6, 6.6, 6.32, 6.35, 5.83, 5.74, 5.54, 5, 4.6],
              backgroundColor: 'rgb(11, 129, 170)',
              borderColor: 'rgb(11, 129, 170)',
              borderWidth: 2,
              pointRadius: 5
            },
            {
              label: 'Antartic',
              data: [18.8, 18.9, 18.6, 18.7, 19.2, 18.93, 18.97, 18.9, 19.2],
              backgroundColor: 'rgb(11, 170, 129)',
              borderColor: 'rgb(11, 170, 129)',
              borderWidth: 2,
              pointRadius: 5
            },
          ],
      })

      setChartOptions({
          plugins: {
              title: {
                display: true,
                text: 'The Poles Are Melting',
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
                  text: 'Change in ice in millions of km²',
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
                  },
                  stepSize: 5
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