// // const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

// // <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>

// // <script defer src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>


// import React from "react";
// import ReactDOM from "react-dom"

// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

// function YourComponent() {
//   const createOrder = (data, actions) =>{
//     return actions.order.create({
//       purchase_units: [
//         {
//           amount: {
//             value: "0.01",
//           },
//         },
//       ],
//     });
//   };

//   const onApprove = (data, actions) => {
//     return actions.order.capture();
//   };

//   return (
//     <PayPalButton
//       createOrder={(data, actions) => createOrder(data, actions)}
//       onApprove={(data, actions) => onApprove(data, actions)}
//     />
//   );
// }

// export default YourComponent;


import { PayPalButton } from "react-paypal-button-v2";
import React from 'react';

export function PayPalBtn(props) {
  const { amount, currency, createSubscription, onApprove, catchError,onError, onCancel} = props;
  const paypalKey = "AdcX9bCpLzyPHipfShmWwbEa0nuejvnFg8nyQyib61s9JhmiNmRJxLsuqTTC522lqoqk8sMpnjoIrRR_"
  return (
    <PayPalButton
      amount={amount}
      currency={currency}
      createSubscription={(data, details) => createSubscription(data, details)}
      onApprove={(data, details) => onApprove(data, details)}
      onError={(err) => onError(err)}
      catchError={(err) => catchError(err)}
      onCancel={(err) => onCancel(err)}
      options={{
        clientId: paypalKey,
        vault:true,
        
      }}
      style={{
        shape: 'rect',
        color: 'blue',
        layout: 'horizontal',
        label: 'subscribe',
      }}
    />
  );
}

export default PayPalBtn;