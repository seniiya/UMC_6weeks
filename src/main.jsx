import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


//캐싱 사용할 경우
// import React from "react";
// import { createRoot } from "react-dom/client";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import App from './App';


// const queryClient = new QueryClient();
// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <QueryClientProvider client={queryClient}>
//     <App />
//   </QueryClientProvider>
// );
