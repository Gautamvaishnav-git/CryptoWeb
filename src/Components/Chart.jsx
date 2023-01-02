import { Line } from "react-chartjs-2";

import {
  Chart as ChartJs,
  CategoryScale,
  PointElement,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  PointElement,
  Tooltip,
  Legend,
  LineElement,
  LinearScale
);

const Chart = ({ arr = [], days, currency }) => {
  const date = [];
  const price = [];

  arr.map(([dateVal, priceVal]) => {
    if (days === "24h") date.push(new Date(dateVal).toLocaleTimeString());
    else date.push(new Date(dateVal).toDateString());
    price.push(priceVal);
  });

  return (
    <>
      <Line
        options={{ responsive: true }}
        data={{
          labels: date,
          datasets: [
            {
              label: `Price in ${currency}`,
              data: price,
              borderColor: "#319795",
              backgroundColor: "white",
              pointBackgroundColor: "#319795",
              pointBorderColor: "white",
            },
          ],
        }}
      />
    </>
  );
};

export default Chart;
