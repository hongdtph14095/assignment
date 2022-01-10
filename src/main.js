// import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
import Navigo from 'navigo' 
import HomePage from './pages/home';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import ProductsPage from './pages/products';
const router = new Navigo("/",{ linksSelector: "a"});
const print = (content) => {
  document.querySelector("#app").innerHTML = content;
}

router.on({
  "/":() => {
    document.querySelector("#app").innerHTML="Home Page";
  },
  "/about":()=>{
    document.querySelector("#app").innerHTML="About Page";
  },
  "/contact":()=>{
    document.querySelector("#app").innerHTML="Contact Page";
  },
  "/products":()=>{
    document.querySelector("#app").innerHTML="Products Page";
  },
});
router.notFound(() =>  console.log("Not found page"));
router.resolve();
// class KhuonBanh{
//   constructor(luongDuong, luongBot){
//     this.luongDuong = luongDuong;
//     this.luongBot = luongBot;
//   }
//   showInfo(){
//     console.log(`
//     Lượng đường : ${this.luongDuong}
//     Lượng Bột : ${this.luongBot}
//     `)
//   }
// }
// const banhDeo = new KhuonBanh(5,11);
// console.log(banhDeo.luongDuong);
// banhDeo.showInfo();

