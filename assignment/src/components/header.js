const Header = {
    render(){
        return `
        <div  class=" text-white bg-blue-900  p-2 text-center while" >
        <a href="">
            <img class="mx-auto p-2" src="./image/logo (1).png" alt=" ">
        </a>
    </div>
    <div class="grid grid-cols-12 p-2 text-white bg-yellow-500 ">
        <div  class="col-span-8 mx-auto">
            <ul class="menu">
                <li class="inline-block p-2 underline"><a href="">Trang chủ</a></li>
                <li class="inline-block p-2"><a href="">Tuyển sinh</a></li>
                <li class="inline-block p-2"><a href="">Chương trình đào tạo</a></li>
                <li class="inline-block p-2"><a href="">Góc sinh viên</a></li>
                <li class="inline-block p-2"><a href="">Tuyển sinh</a></li>
            </ul>
        </div>
        <div  class="col-span-4 mx-auto pt-2">
            <form action="" class="inline-block">
                <input type="text" file:border file:border-solid class="input">
               
            </form>
            <button class="inline-block border px-2 bg-blue-900 ">Tìm kiếm</button>
        </div>
    </div>
        `;
    },
};
export default Header;
