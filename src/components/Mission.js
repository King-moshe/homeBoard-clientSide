import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';

export default function Mission() {
  const nav = useNavigate();

  const chartData = {
    chart: {
      animations: {
        enabled: false
      },
      dropShadow: {
        enabled: true,
        left: 3,
        blur: 3,
        color: "#E7F9F9"
      },
      foreColor: "white",
      fontFamily: "Roboto",
      height: '100%',
      id: "xbOsH",
      toolbar: {
        show: false
      },
      type: "donut",
      width: '100%'
    },
    plotOptions: {
      bar: {
        borderRadius: 10
      },
      radialBar: {       
        dataLabels: {
          name: {},
          value: {},
          total: {}
        }
      },
      pie: {
        donut: {
          size: "54%",
          labels: {
            show: true,
            name: {
              fontSize: 37,
              fontWeight: 400
            },
            value: {
              fontSize: 24,
              fontWeight: 300
            },
            total: {
              show: true,
              fontSize: 18,
              fontWeight: 500,
              color: "white"
            }
          }
        }
      }
    },
    colors: [
      "#35EF0B",
      "#E61964",
      "#0F7BE6"
    ],
    dataLabels: {
      style: {
        fontWeight: 700
      }
    },
    fill: {
      opacity: 1
    },
    grid: {
      padding: {
        top: 100,
        right: -74,
        left: 10
      }
    },
    labels: [
      "פרוייקטים",
      "לקוחות",
      "קבלנים"
    ],
    legend: {
      position: "right",
      fontSize: 14,
      offsetY: 0,
      itemMargin: {
        vertical: 0
      }
    },
    series: [
      11,
      24,
      32
    ],
    stroke: {
      width: 7
    },
    tooltip: {
      fillSeriesColor: true
    },
    xaxis: {
      labels: {
        trim: true,
        style: {}
      },
      title: {
        style: {
          fontWeight: 700
        }
      }
    },
    yaxis: {
      labels: {
        style: {}
      },
      title: {
        style: {
          fontWeight: 700
        }
      }
    },
    theme: {
      palette: "palette3"
    }
  };

  return (
    <div className='mission mr-[20px] md:flex block pt-[10px] justify-between h-[66vh] w-full md:w-2/3 mb-4 bg-stone-800 text-white rounded-lg'>
      <div className='md:w-1/2 w-full md:border-l'>
        <div className='w-full h-5/6'>
          <img alt='list' src='https://images.pexels.com/photos/6192122/pexels-photo-6192122.jpeg?auto=compress&cs=tinysrgb&w=1600' className='w-full h-full p-3'/>
        </div>
        <div className='w-full h-1/6 p-2 justify-around flex items-center  mt-2'>
          <button onClick={() => { nav('/users/newUser') }} className='w-1/4 bg-red-600 rounded-lg p-1 ml-3 mb-3'>הוסף משתמש</button>
          <button onClick={() => { nav('/projects/newProject') }} className='w-1/4 bg-lime-400 rounded-lg p-1 ml-3 mb-3'>הוסף פרויקט</button>
          <button onClick={() => { nav('/users/newUser') }} className='w-1/4 bg-orange-400 rounded-lg p-1 mb-3'>הוסף משימה</button>
        </div>      
      </div>
      <div className='md:w-1/2 w-full h-1/2 md:h-full'>
        <h2 className='w-full pr-3'>התפלגות נתונים באתר</h2>
        <ReactApexChart options={chartData} series={chartData.series} type={chartData.chart.type} width={chartData.chart.width} height={chartData.chart.height} />
      </div>
    </div>
  );
}
