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

export default function Graph1(){

  const textColor = 'rgb(242, 245, 234)';
  const fontFamily = 'Poppins'

  const [chartData, setChartData] = useState({
      datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
      setChartData({
          labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
          datasets: [
            {
              label: 'Forest Fires',
              data: [0.5, 0.8, 0.6, 1.2, 1.5, 1.0, 0.9, 1.3, 2.0, 1.7, 1.4],
              backgroundColor: 'rgb(11, 170, 129)',
            },
            {
              label: 'Deforestation',
              data: [3.0, 3.2, 3.5, 4.0, 4.5, 4.7, 4.9, 5.2, 5.5, 6.0, 6.3],
              backgroundColor: 'rgb(11, 129, 170)',
            },
          ],
      })

      setChartOptions({
          plugins: {
              title: {
                display: true,
                text: 'Rainforest Loss in Brazil',
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
                  text: 'Area (million hectares)',
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
                  stepSize: 2,
                  min: 0,
                  max:8
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