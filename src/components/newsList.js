const NewsList = {
    render() {
        return `
        <h2 class="font-semibold text-2xl my-4 text-blue-900 uppercase">Tin tức học tập</h2>
        <div class="grid grid-cols-3 gap-8">
            <div class="border p-4">
                <a href="">
                    <img src="https://picsum.photos/300/300" alt="" />                    
                </a>
                <h3 class="my-3"><a href="#" class="font-semibold text-orange-500 text-lg">Tiêu đề bài viết</a></h3>
                <p class="text-sm text-gray-500">Mô tả bài viết </p>
            </div>
            <div class="border p-4">
                <a href="">
                    <img src="https://picsum.photos/300/300" alt="" />                    
                </a>
                <h3 class="my-3"><a href="#" class="font-semibold text-orange-500 text-lg">Tiêu đề bài viết</a></h3>
                <p class="text-sm text-gray-500">Mô tả bài viết </p>
            </div>
            <div class="border p-4">
                <a href="">
                    <img src="https://picsum.photos/300/300" alt="" />                    
                </a>
                <h3 class="my-3"><a href="#" class="font-semibold text-orange-500 text-lg">Tiêu đề bài viết</a></h3>
                <p class="text-sm text-gray-500">Mô tả bài viết </p>
            </div>
        </div>
        
        `;
    },
};
export default NewsList;