import "./App.css";
import Demon from "./components/Demon";
const demons = [
  {
    nama: "Lucifer",
    gambar:"https://e0.pxfuel.com/wallpapers/629/495/desktop-wallpaper-lucifer-obey-me-anime-lucifer.jpg",
    deskripsi:"Demon King",
    sex : "Man"
  },
  {
    nama: "Nezuko",
    gambar:"https://w0.peakpx.com/wallpaper/869/791/HD-wallpaper-nezuko-chan-anime-drmon-slayer-thumbnail.jpg",
    deskripsi:"Demon kawai",
    sex : "Woman"
  },
  {
    nama: "Opera",
    gambar:"https://cdn.donmai.us/sample/29/88/__opera_mairimashita_iruma_kun_drawn_by_tetolapis__sample-29889e51eeddf78e9bf5e1313827bd41.jpg",
    deskripsi:"Demon",
    sex : "Unknown"
  },
];
function App(){
  return(
    <>
    <div className="cont">
    {demons.map((d)=>(
     <Demon
      nama={d.nama}
      detail={d.deskripsi}
      gambar={d.gambar}
     /> 
    ))}
    </div>
    </>
  )
}
export default App;