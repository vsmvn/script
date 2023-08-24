// Chọn tất cả các liên kết ngoại trên trang và thêm thuộc tính rel
const externalLinks = document.querySelectorAll('a[href^="http"]:not([href^="' + window.location.origin + '"])');

externalLinks.forEach(link => {
  link.setAttribute('rel', 'nofollow noopener');
});

// Tạo thuộc tính title cho các thẻ a
const anchorTags = document.querySelectorAll("a");

anchorTags.forEach(anchor => {
  const text = anchor.textContent.trim(); // Loại bỏ khoảng trắng thừa
  if (text) {
    anchor.setAttribute("title", text);
  }
});

// Tạo thuộc tính alt cho các thẻ img
const imgTags = document.querySelectorAll("img");

imgTags.forEach(img => {
  const h1 = img.closest("h1");
  if (h1) {
    const h1Text = h1.textContent.trim(); // Loại bỏ khoảng trắng thừa
    img.setAttribute("alt", h1Text);
  }
});
