import { Suspense,lazy } from 'react'
import { PageLoader } from './components/page-loader'
import {Routes,Route} from 'react-router-dom'

//merchantDashboards import
import MerchantDashboard from './dashboards/merchantDashboard/MerchantDashoard';
import Overview from './pages/non-authed/Dashboards/merchantDashoard/Home'
import Properties from './pages/non-authed/Dashboards/merchantDashoard/Properties';
import FileUpload from './pages/non-authed/Dashboards/merchantDashoard/Files';
import Tenant from './pages/non-authed/Dashboards/merchantDashoard/MyTenant';
import Subscription from './pages/non-authed/Dashboards/merchantDashoard/Subscription';
import SubscriptionHistory from './pages/non-authed/Dashboards/merchantDashoard/SubscriptionHistory';
import CardDetails from './pages/non-authed/Dashboards/merchantDashoard/CardDetails';
import Message from './pages/non-authed/Dashboards/merchantDashoard/Message';
import Settings from './pages/non-authed/Dashboards/merchantDashoard/Settings';
import AllMails from './pages/non-authed/Dashboards/merchantDashoard/AllMailDetails'

// Landing Page import
const Home = lazy(() => import(/*webpackChunkName:'home Page'*/'./pages/non-authed/home/Home'))
const Login = lazy(() => import(/*webpackChunkName:'login Page'*/'./pages/non-authed/login/Login'))
const  CreateAccount= lazy(() => import(/*webpackChunkName:'CreateAccount Page'*/'./pages/non-authed/NewAccount/CreateAccount'))



function App() {

  return (
    <div className="App">
      <Suspense fallback = {<PageLoader/>}>
          <Routes>
             <Route path='/' element= { <CreateAccount />} />
             <Route path='/login' element= { <Login />} />
         
          <Route path="/merchant-dashboard" element={<MerchantDashboard />}>
            <Route index element={<Overview />} />
            <Route path="properties" element={<Properties />} />
            <Route path="tenant" element={<Tenant />} />
            <Route path="fileUpload" element={<FileUpload />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="subscriptionHistory" element={<SubscriptionHistory />} />
            <Route path="cardDetails" element={<CardDetails />} />
            <Route path="message" element={<Message />} />
            <Route path="allMails" element={<AllMails />} />
            <Route path="settings" element={<Settings />} />
          </Route>
            </Routes>
      </Suspense> 
    </div>
  )
}

export default App
