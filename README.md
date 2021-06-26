- src
  - components: Chứa dump components (components tái sử dụng(card, button,...), thông thường chỉ nhận props rồi render, ít xử lý logic)
  - pages: Chứa các components cấu thành 1 page (home, admin,...), có các xử lý logic bên trong (gọi API,...)
  - hooks: Chứa các custom hooks, ví dụ useRequest, useGetWidth, 
  - services: Nơi setup API, axios
  - styles: Nơi đặt các file css hoặc scss
    + Sử dụng scss trong react: npm i -D sass (-D sẽ add thư viện vào devDependencies, nơi chứa thư viện phục vụ trong lúc dev, không đính kèm vào project khi build)
  - utils: Chứa các common function tái sử dụng trong project 
  - layout: Chứa layout chung cho các trang (admin, UI,...)
  - auth: Chứa các component và các hàm xử lý liên quan đến authentication
  * Có redux 
  - actions: Chứa actions của redux 
  - constants: Chứa constants của project và type của redux 
  - reducers: Chứa reducer của redux 

Mở terminal bằng cách ấn Ctrl + `   
Nhập lên npm start (Hoặc yarn start nếu npm k chạy. nhớ cài yarn)

lib: axios redux react-redux redux-thunk react-router-dom reactstrap sass bootstrap 
      reactstrap không bao gồm class bootstrap (import bootstrap vào ./styles/index.js import 'bootstrap/dist/css/bootstrap.min.css')
