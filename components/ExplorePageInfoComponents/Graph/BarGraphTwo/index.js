import styles from '@/components/ExplorePageInfoComponents/Graph/Graph.module.css'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from "react"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarGraphTwo(){

  const textColor = 'rgb(242, 245, 234)';
  const fontFamily = 'Poppins'

  const [chartData, setChartData] = useState({
      datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
      setChartData({
          labels: ['2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014', '2016', '2018', '2020', '2022', '2023'],
          datasets: [
            {
              label: 'Forest Fires',
              data: [0.63, 2.8, 3.1, 2.0, 1.6, 3.2, 1.9, 4.6, 1.4, 2.3, 0.2, 1.5, 11.5],
              backgroundColor: 'rgb(11, 170, 129)',
            },
          ],
      })

      setChartOptions({
          plugins: {
              title: {
                display: true,
                text: 'Forest loss in Canada due to Fire',
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
                  text: 'Year',
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
                  text: 'Area Burned (million hectares)',
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
                <Bar options={chartOptions} data={chartData} className={styles.testingCode}/>
              </div>
            </div>
          </div>
      </>
  )
}