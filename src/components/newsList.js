const NewsList = {
    render() {
        return `
        <div class="news">
            <h2 class="font-bold text-2xl my-4 text-blue-900 uppercase">Tin tức học tập</h2>
            <div class="grid grid-cols-3 gap-8">
                <div class="border p-4">
                        <a href=""><img src="../image/123 - Copy.jpg" width="320" alt=""></a> 
                    <h3 class="p-2 font-bold text-red-600"><a href="">Vinh danh 295 sinh viên FPT Polytechnic học kỳ Spring 2018</a></h3>
                    <p  class="p-2">Tối ngày 16/06/2018, Cao đẳng FPT Polytechnic Hà Nội đã tổ chức lễ tôn vinh "Ong vàng Poly",tuyên
                        dương 295 cá nhân và tập thể có thành tích xuất sắc trong học tập cũng như hoạt.</p>
                </div>
                <div class="border p-4">
                    <a href=""><img class="img-fluid" src="../image/224 - Copy.jpg" width="320" alt=""></a>
                    <h3 class="p-2 font-bold text-red-600"><a href="">Sinh viên có khối ngành Kinh tế học cách "chạm" vào cảm xúc</a></h3>
                    <p  class="p-2">Với sự tham gia của chuyên gia trong lĩnh vực kinh doanh, chương trình đã thu hút đông đảo sinh
                        viên Cao đẳng FPT Polytechnic tham dự. Đặc biệt các bạn sinh viên bị lôi cuốn bởi.</p>
                </div>
                <div class="border p-4">
                    <a href=""><img class="img-fluid" src="../image/tin tức.jpg" width="320" alt=""></a>
                    <h3 class="p-2 font-bold text-red-600"><a href="">Sinh viên FPoly trải nghiệm thực tế tại Mường Thanh Luxury</a></h3>
                    <p  class="p-2">Với triết lý đào tạo "Thực học - Thực nghiệp", Cao đẳng FPT Polytechnic Đà Nẵng Thường xuyên tổ
                        chức cho sinh viên tham quan các đơn vị doanh nghiệp.</p>
                </div>
            </div>
        </div>
        <div class="news">
            <h2 class="font-bold text-2xl my-4 text-blue-900 uppercase">Hoạt động sinh viên </h2>
            <div class="grid grid-cols-3 gap-8">
                <div class="border p-4">
                    <div>
                        <a href=""><img  src="../image/123 - Copy.jpg" width="320" alt=""></a>
                    </div>
                   
                    <h3 class="p-2 font-bold text-red-600"><a href="">Vinh danh 295 sinh viên FPT Polytechnic học kỳ Spring 2018</a></h3>
                    <p  class="p-2">Tối ngày 16/06/2018, Cao đẳng FPT Polytechnic Hà Nội đã tổ chức lễ tôn vinh "Ong vàng Poly",tuyên
                        dương 295 cá nhân và tập thể có thành tích xuất sắc trong học tập cũng như hoạt.</p>
                </div>
                <div class="border p-4">
                    <a href=""><img class="img-fluid" src="../image/224 - Copy.jpg" width="320" alt=""></a>
                    <h3 class="p-2 font-bold text-red-600"><a href="">Sinh viên có khối ngành Kinh tế học cách "chạm" vào cảm xúc</a></h3>
                    <p  class="p-2">Với sự tham gia của chuyên gia trong lĩnh vực kinh doanh, chương trình đã thu hút đông đảo sinh
                        viên Cao đẳng FPT Polytechnic tham dự. Đặc biệt các bạn sinh viên bị lôi cuốn bởi.</p>
                </div>
                <div class="border p-4">
                    <a href=""><img class="img-fluid" src="../image/tin tức.jpg" width="320" alt=""></a>
                    <h3 class="p-2 font-bold text-red-600"><a href="">Sinh viên FPoly trải nghiệm thực tế tại Mường Thanh Luxury</a></h3>
                    <p class="p-2">Với triết lý đào tạo "Thực học - Thực nghiệp", Cao đẳng FPT Polytechnic Đà Nẵng Thường xuyên tổ
                        chức cho sinh viên tham quan các đơn vị doanh nghiệp.</p>
                </div>
            </div>
        </div>
        
        `;
    },
};
export default NewsList;