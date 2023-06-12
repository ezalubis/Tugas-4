import { useState } from "react";
import Tombol from "./Tombol";
import "./Demon.css"
export default function Demon(props){
    
  const [detail, setDetail]= useState(false);
  const [like, setLike]= useState(false);
    // function handleMoreClick() {
    //     setShowMore(!showMore);
    // }
    return(
        <>  
            <div className="container">
            <div className="head" >   
            <h1 >{props.nama}</h1>
            </div>
            <div className="gambar">
                <img src={props.gambar} alt="" />
           </div>
           <div className="deskripsi">
            {detail && <p>{props.detail}</p>}
            </div>
            <div className="about">
            <Tombol onClick={()=>setDetail(!detail)}>
                {detail ? "Hide" : "Show"}
            </Tombol>
            <Tombol onClick={()=>setLike(!like)}>
                {like ? "Tidak Suka" : "Suka"}
            </Tombol>
            </div>
            </div>
        </>
    )
}