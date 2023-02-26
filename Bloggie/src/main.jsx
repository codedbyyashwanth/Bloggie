import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./resources/styles/main.css"
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from 'react-router-dom'

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
      <Router>
      <App />
    </Router>
  </QueryClientProvider>
)
