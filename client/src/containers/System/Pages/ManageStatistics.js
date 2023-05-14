import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CreateNew, Update, Search } from '../../../components'
import { useSearchParams} from 'react-router-dom';
import { Pagination } from '../../Public'
import * as actions from '../../../store/actions'
import { apiDeleteBook } from '../../../services';
import moment from 'moment'
import Order from '../Order';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const generateOptions = (data) =>{
      const categories = data.map((item) => item.month);
      const count = data.map((item) => item.count);
      return {
        chart: {
          height: 500,
        },
        title: {
          text: 'Tổng ca nhiễm',
        },
        xAxis: {
          categories: categories,
          crosshair: true,
        },
        colors: ['#F3585B'],
        yAxis: {
          min: 0,
          title: {
            text: ' Số đơn',
          },
          labels: {
            align: 'right',
          },
          categories: data.count,
          // crosshair: true,
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: 'Tổng Ca nhiễm',
            data: data.map((item) => item.Confirmed),
          },
        ],
      };
};

const ManageStatistics = () => {
   const [options, setOptions] = useState({});
  const formatDate = (time_book) => {
    return moment(time_book).format("dddd, DD/MM/YYYY");
  }
  // const formatTime = (time_book) => {
  //   return moment(time_book).format('hh:mm');
  // }
  //  const formatDate = (time_book) => {
  //       return moment(time_book).format("YYYY-MM-DD");
  //   }
    const formatTime = (time_book) => {
        return moment(time_book).format('hh:mm');
    }
  let currentDate = new Date()
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const {count_statistics, count_statistics_year} = useSelector((state) => state.book)
  
  const [keyword, setKeyword] = useState("");

   const changeHandleSearch = (q) => {         
            setKeyword(q);         
    };
    const date = new Date()

  const [chartOptions, setChartOptions] = useState({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Số đơn hàng theo tháng'
      },
      xAxis: {
        categories: count_statistics_year.map((item) => item.month),
        title: {
          text: 'Tháng'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Số đơn '
        }
      },
      series:[{
      name: 'Số đơn hàng',
      data: count_statistics_year.map((item) => item.count),
    }]
  });
  useEffect(() =>{
           
        // dispatch(actions.getStatistics({startDate: '2023-04-01 01:01', endDate: '2023-04-30 23:59' }))
        dispatch(actions.getStatistics_year())
        // setOptions(generateOptions(count_statistics_year));
    },[])
  // console.log(count_statistics)
  console.log(count_statistics_year)
  
  
  return (

    <div className='relative p-10 bg-white'>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  )
}

export default ManageStatistics