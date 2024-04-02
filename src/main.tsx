import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {RecoilRoot} from 'recoil'

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossOrigin="anonymous"
/>

ReactDOM.createRoot(document.getElementById('root')).render(
  
	<React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</React.StrictMode>
)
