import React from 'react';
import Card from './Card'

function App() {
let data = [
  {
    plan:"FREE",
    price:0,
    user: "Single User",
    isUser:true,
    storage: "5GB Storage",
    isStorage:true,
    access:"Community Access",
    isAccess:true,
    public:"Unlimited Public Projects",
    isPublic:true,
    private:"Unlimited Private Projects",
    isPrivate:false,
    support:"Dedicated Phone support",
    isSupport:false,
    subdomain:"Free Subdomain",
    isSubdomain:false,
    reports:"Monthly Status Reports",
    isreports:false
  },
  {
    plan:"PLUS",
    price:9,
    user: "5 User",
    isUser:true,
    storage: "50GB Storage",
    isStorage:true,
    access:"Community Access",
    isAccess:true,
    public:"Unlimited Public Projects",
    isPublic:true,
    private:"Unlimited Private Projects",
    isPrivate:true,
    support:"Dedicated Phone support",
    isSupport:true,
    subdomain:"Free Subdomain",
    isSubdomain:true,
    reports:"Monthly Status Reports",
    isReports:false
  },
  {
    plan:"PRO",
    price:49,
    user: "Unlimited User",
    isUser:true,
    storage: "150GB Storage",
    isStorage:true,
    access:"Community Access",
    isAccess:true,
    public:"Unlimited Public Projects",
    isPublic:true,
    private:"Unlimited Private Projects",
    isPrivate:true,
    support:"Dedicated Phone support",
    isSupport:true,
    subdomain:"Free Subdomain",
    isSubdomain:true,
    reports:"Monthly Status Reports",
    isReports:true
  }
]

  return <>
   <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
      data.map((e,i)=>{
        return <Card data={e} Key={i}/>
      })
    }
    </div>
  </div>
</section>
  </>
}


export default App
