import React, { useState } from 'react'
import TenantsTable from '../../../../components/merchantDashboard/Tenants/tenantsTable'

function Tenants() {

  // const [showRequestTable, setRequestTable] = useState(true)

  return (
    <div>
      {/* {showRequestTable ? (<RequestTable />) :
        (<NoRequestTable />)
      } */}

      <TenantsTable />
    </div>
  )
}

export default Tenants