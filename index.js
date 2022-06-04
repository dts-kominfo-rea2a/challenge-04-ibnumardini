// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (dates, idx = null) => {
  if (idx !== null) {
    const epochSeconds = toEpochSeconds(dates[idx]);

    return epochSeconds.toString();
  }

  let arrEpochSeconds = [];
  for (let i = 0; i < dates.length; i++) {
    let epochSeconds = toEpochSeconds(dates[i]);

    arrEpochSeconds.push(epochSeconds);
  }

  const chainEpochSeconds = arrEpochSeconds.sort().join("-");

  return chainEpochSeconds.toString();
};

const toEpochSeconds = (date) => {
  const epoch = Date.parse(date);
  const epochSeconds = epoch / 1000;

  return epochSeconds;
};

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
