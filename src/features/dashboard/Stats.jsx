import React from "react";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {
  //  number of bookings
  const numBookings = bookings.length;
  //   sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //   confirmed stays
  const checkins = confirmedStays.length;

  //   occuopancy rate
  //   number of nights of customer / number of days * number of cabins
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title={"Bookings"}
        value={numBookings}
        color={"blue"}
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title="Sales"
        value={formatCurrency(sales)}
        color="green"
      />

      <Stat
        icon={<HiOutlineCalendarDays />}
        title="Check ins"
        value={checkins}
        color="indigo"
      />

      <Stat
        icon={<HiOutlineChartBar />}
        title={"Occupancy Rate"}
        value={Math.round(occupation * 100) + "%"}
        color={"yellow"}
      />
    </>
  );
};

export default Stats;
