"use client"

import { useEffect, useState } from "react"


export default function Home() {
  const [isLoading,setIsLoading]= useState(true)
  const [isMounted,setIsMounted] = useState(false)
  const [data,setData] = useState(null)
  const getDadJokes = async()=>{
    try{
      const res = await fetch(`https://api.api-ninjas.com/v1/celebrity?nationality=us`,{
        "method":"GET",
        "content-type":"",
        "headers":{
          "X-Api-Key":"nIWUGjIm/KhyU3uS62yQrQ==dqSPa1jntQO7eR04"
        }
      })

      if (!res.ok){
        return new Error("Something went wrong")
      }
      const json = await res.json()
      setData(json)

    }catch(err){
      
    }
    finally{
      setIsLoading(false)
    }
   
  }
  useEffect(()=>{
    setIsMounted(true)
    getDadJokes()

  },[])

  if(!isMounted) return
  return (
    <>
       {/* {isLoading?
      <p>Loading...</p>
      :
      <div>
      {data&&data.map((item,index)=>{
        return <div key={index}>
          <ul className="flex flex-col gap-5">
            <li>name: {item.name}</li>
            <li>net worth: {item.net_worth}</li>
            <li>Height: {item.height}m</li>
          </ul>
          <section className="flex gap-5">
            <p>Occupation</p>
            <br/>
            {item.occupation&&item?.occupation.map((o,i)=>{
              return <p key={i} className="p-3 rounded-md border text-grey-600 ">{o.replace(/_/g, ' ')}</p>
            })}
          </section>
        </div>
      })}
      
     </div>
    } */}
    <pre className="bg-[#1f2937] text-[#e5e7eb]">
        <code className="grid p-10">
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
          <br/>
          <span className="line">
          <span className="text-[rgb(199,146,234)]">const</span>
          <span className="text-[rgb(166,172,205)]"> swell </span>
          <span className="text-[rgb(137,221,255)]">=</span>
          <span className="text-[rgb(166,172,205)]"> </span>
          <span className="text-[rgb(130,170,255)]">require</span>
          <span className="text-[rgb(166,172,205)]">(</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(195,232,141)]">swell-node</span>
          <span className="text-[rgb(137,221,255)]">'</span>
          <span className="text-[rgb(166,172,205)]">)</span>
          </span>
            

        </code>

      </pre>
    </>
   
   
  )
}
