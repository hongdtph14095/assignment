import Header from "../components/header"
import Banner from "../components/banner"
import NewsList from "../components/newsList";
import Footer from "../components/footer";

const HomePage = {
    render(){
        return /* html */`
        <div class="header">
            ${Header.render()}
        </div>
        <div class="banner">
            ${Banner.render()}
        </div>
        <div class="news">
            ${NewsList.render()}
        </div>
        <div class="footer">
            ${Footer.render()}
        </div>
        `; 
    },
};
export default HomePage;