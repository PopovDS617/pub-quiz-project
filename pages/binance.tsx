// import React, { useEffect, useState } from 'react';
// import useSWR from 'swr';

// type Props = {
//   price: string;
// };

// const Binance = () => {
//   const fetchData = async () => {
//     const response = await fetch(
//       'https://smoothie-project-e7bb3-default-rtdb.europe-west1.firebasedatabase.app/'
//     );
//     const data = await response.json();

//     return data
//   };

//   useEffect(() => fetchData(), []);

//   // console.log(data)
//   //   useEffect(() => setPrice(data.price), [data]);
//   // const [data, setData] = useState<string>('');

//   // const fetchBinance = async () => {
//   //   const response = await fetch(
//   //     'https://www.binance.com/api/v3/ticker/price?symbol=BTCUSDT'
//   //   );
//   //   const item = await response.json();
//   //   setData(item);
//   // };

//   // useEffect(() => {
//   //   fetchBinance();
//   // }, []);

//   // if (error) return <div>ошибка загрузки</div>;
//   // if (!data) return <div>загрузка...</div>;
//   console.log(data);
//   return (
//     <div>
//       Hello
//       {/* {price} */}
//     </div>
//   );
// };

// // export async function getServerSideProps(context) {
// //   const { params, req, res } = context;
// //   console.log(context);

// //   const response = await fetch(
// //     'https://www.binance.com/api/v3/ticker/price?symbol=BTCUSDT'
// //   );
// //   const data = await response.json();
// //   console.log(data);
// //   return {
// //     props: { price: data.price },
// //   };
// // }

// export default Binance;
