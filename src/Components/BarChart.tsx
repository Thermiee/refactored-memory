import { ApexOptions } from "apexcharts"
import ReactApexChart from "react-apexcharts"

type Props = {
  data: any
}

const BarChart = ({ data }: Props) => {
  if (
    !data ||
    typeof data !== "object" ||
    Object.keys(data).length === 0 ||
    Object.values(data).length === 0 ||
    Object.values(data).every(val => val === 0) ||
    Object.values(data).every(val => val === null) ||
    Object.values(data).every(val => val === undefined)
  ) {
    return (
      <div className="flex flex-col justify-center items-center py-10">
        <p className="text-base font-semibold">No Data Available!</p>
      </div>
    )
  }
  const monthlyData = Object.values(data) as number[]
  const max = Math.max(...monthlyData)
  const getColumnWidth = () => {
    if (monthlyData.length > 6) {
      return "60%"
    }
    return "50%"
  }

  const verticalChartData: ApexOptions = {
    chart: {
      id: "vertical-bar",
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        speed: 800,
      },
    },
    yaxis: {
      show: true,
      min: 0,
      max: max + max * 0.1,
      tickAmount: 7,
      labels: {
        formatter(val: any) {
          if (typeof val === "number") {
            return `${val.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
          }
          return "0" 
        },
      },
    },

    xaxis: {
      categories: Object.keys(data).map(
        month => month.charAt(0).toUpperCase() + month.slice(1),
      ),
    },

    plotOptions: {
      bar: {
        columnWidth: getColumnWidth(),
        borderRadius: 5,
        colors: {
          backgroundBarColors: ["#D9D9D9"],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 5,
        },
      },
    },
    colors: ["#092428"],
    dataLabels: {
      enabled: false,
    },
  }

  const horizontalChartData: ApexOptions = {
    chart: {
      id: "horizontal-bar",
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        speed: 800,
      },
      stacked: true, 
    },
    xaxis: {
      categories: verticalChartData?.xaxis?.categories || [],
    },
    yaxis: {
      show: true,
      min: 0,
      max: max + max * 0.1,
      tickAmount: 2,
      labels: {
        formatter(val: any) {
          if (typeof val === "string") {
            return val.charAt(0).toUpperCase() + val.slice(1)
          }

          return "N/A"
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: getColumnWidth(),
        borderRadius: 5,
        colors: {
          backgroundBarColors: ["#D9D9D9"],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 5,
        },
      },
    },
    colors: ["#092428"],
    dataLabels: {
      enabled: false,
    },
  }

  const verticalSeries = [
    {
      name: "Revenue",
      data: monthlyData,
    },
  ]

  const horizontalSeries = [
    {
      name: "Revenue",
      data: monthlyData,
    },
  ]

  return (
    <div>
      <div className="lg:flex">
        <div className="hidden md:flex w-full">
          <div className="vertical-chart w-full">
            <ReactApexChart
              options={verticalChartData}
              series={verticalSeries}
              type="bar"
              height={350}
            />
          </div>
        </div>
        <div className="md:hidden w-full">
          <div className="horizontal-chart w-full">
            <ReactApexChart
              options={horizontalChartData}
              series={horizontalSeries}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BarChart
