(this["webpackJsonptech-outlet"]=this["webpackJsonptech-outlet"]||[]).push([[0],{10:function(A,o,i){A.exports={signup_container:"Signup_signup_container__2gehU",signup_form:"Signup_signup_form__2kQt7",form_label:"Signup_form_label__2htCv",form_input:"Signup_form_input__24_A5",submit_button:"Signup_submit_button__Y6fEm"}},14:function(A,o,i){A.exports={login_container:"Login_login_container__1DVNi",login_form:"Login_login_form__3_-7I",form_input:"Login_form_input___MIg9",forgot_password:"Login_forgot_password__2HQGY",form_label:"Login_form_label__2C2E4",submit_button:"Login_submit_button__exu8K",link_to_signup:"Login_link_to_signup__1-5bW",new_to_ecom:"Login_new_to_ecom__2VpZL",welcome_header:"Login_welcome_header__3Cscv",welcome_para:"Login_welcome_para__mi7Mi"}},37:function(A,o,i){},38:function(A,o,i){},40:function(A,o,i){},46:function(A,o,i){},47:function(A,o,i){},48:function(A,o,i){},53:function(A,o,i){},54:function(A,o,i){},55:function(A,o,i){},56:function(A,o,i){},57:function(A,o,i){"use strict";i.r(o);var e=i(2),U=i.n(e),F=i(27),t=i.n(F),R=(i(37),i(15)),c=i(6),K=i(8),a=(i(38),i(1)),n=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"Desktop Navigation"})})},s=(i(40),i(29)),r=function(){var A=Object(K.f)();return Object(a.jsx)("div",{className:"n-back",children:Object(a.jsx)(s.a,{className:"go-back",onClick:function(){A.goBack()}})})},l=i(14),j=i.n(l),g=function(){return Object(a.jsxs)("div",{className:j.a.login_container,children:[Object(a.jsx)("h1",{className:j.a.welcome_header,children:"Welcome to E-Commerce!"}),Object(a.jsx)("p",{className:j.a.welcome_para,children:"Experience next generation shopping experience."}),Object(a.jsxs)("form",{action:"",method:"post",className:j.a.login_form,children:[Object(a.jsx)("label",{htmlFor:"phone",className:j.a.form_label,children:"Mobile Number"}),Object(a.jsx)("input",{type:"tel",name:"phone",className:j.a.form_input,placeholder:"Mobile number"}),Object(a.jsx)("label",{htmlFor:"password",className:j.a.form_label,children:"Password"}),Object(a.jsx)("input",{type:"password",name:"password",className:j.a.form_input,placeholder:"Password"}),Object(a.jsx)(c.c,{to:"",className:j.a.forgot_password,children:"Forgot Password?"}),Object(a.jsx)("button",{type:"submit",className:j.a.submit_button,children:"LOGIN"})]}),Object(a.jsxs)("p",{children:["New to U_T_O?  ",Object(a.jsx)(c.b,{to:"/signup",children:"Signup here"})]})]})},d=i(10),m=i.n(d),b=function(){return Object(a.jsxs)("div",{className:m.a.signup_container,children:[Object(a.jsx)("h1",{className:m.a.welcome_header,children:"Welcome to T_U_O!"}),Object(a.jsx)("p",{className:m.a.welcome_para,children:"Experience next generation shopping experience."}),Object(a.jsxs)("form",{action:"",method:"POST",className:m.a.signup_form,children:[Object(a.jsx)("label",{htmlFor:"name",className:m.a.form_label,children:"Mobile Number"}),Object(a.jsx)("input",{type:"text",name:"name",className:m.a.form_input,placeholder:"Full name"}),Object(a.jsx)("label",{htmlFor:"phone",className:m.a.form_label,children:"Mobile Number"}),Object(a.jsx)("input",{type:"tel",name:"phone",className:m.a.form_input,placeholder:"Mobile number"}),Object(a.jsx)("label",{htmlFor:"email",className:m.a.form_label,children:"Mobile Number"}),Object(a.jsx)("input",{type:"email",name:"email",className:m.a.form_input,placeholder:"Email"}),Object(a.jsx)("label",{htmlFor:"password",className:m.a.form_label,children:"Mobile Number"}),Object(a.jsx)("input",{type:"password",name:"password",className:m.a.form_input,placeholder:"Password"}),Object(a.jsx)("button",{type:"submit",className:m.a.submit_button,children:"Create Account"})]}),Object(a.jsxs)("p",{children:["Already have an accout?  ",Object(a.jsx)(c.b,{to:"/login",children:"Signin here"})]})]})},u=function(){return Object(a.jsx)("div",{children:"cart"})},B=function(){var A=Object(K.g)();return Object(a.jsxs)("div",{className:"offer-container",children:[Object(a.jsx)("p",{children:"offertemplate"}),Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:Object(a.jsx)(c.c,{to:"".concat(A.url,"/product-id"),children:"Iphone"})},"".concat(A.url))})]})},h=(i(46),function(){return Object(a.jsxs)("div",{className:"product-container",children:[Object(a.jsx)("h2",{children:"Reached Product Section"}),Object(a.jsx)(c.c,{to:"/cart",children:"Add to Cart"}),Object(a.jsx)("br",{}),Object(a.jsx)(c.c,{to:"/",children:"Buy Now"})]})}),f=[{path:"/signup",exact:!0,component:b,private:!1},{path:"/login",exact:!0,component:g,private:!1},{path:"/cart",exact:!0,component:u,private:!1},{path:"/offers/:offerId",exact:!0,component:B,private:!1},{path:"/offers/:offerId/:productId",exact:!0,component:h,private:!1},{path:"/category/:categoryId",exact:!0,component:function(A){var o=A.match;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Category container"}),Object(a.jsx)(c.c,{to:"".concat(o.url,"/flower10"),children:"Samsung Mobiles"})]})},private:!1},{path:"/category/:categoryId/:subCateId",exact:!0,component:function(A){var o=A.match;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Sub Category=items"}),Object(a.jsx)(c.c,{to:"".concat(o.url,"/id=12334"),children:"On7 Prime"})]})},private:!1},{path:"/category/:categoryId/:subCateId/:productId",exact:!0,component:h,private:!1},{path:"/product/:productId",exact:!0,component:h,private:!1},{path:"/deals/:dealId",exact:!0,component:function(){return Object(a.jsx)("div",{children:"deal container"})},private:!1},{component:function(){return Object(a.jsx)("div",{children:"not found"})}}],p=function(A){return Object(a.jsx)(K.a,{path:A.path,exact:A.exact,render:function(o){return Object(a.jsx)(A.component,Object(R.a)(Object(R.a)({},o),{},{routes:A.routes}))}})},Q=function(){return Object(a.jsxs)("div",{className:"mb-layout",children:[Object(a.jsx)(r,{}),Object(a.jsx)(K.c,{children:f.map((function(A,o){return Object(a.jsx)(p,Object(R.a)({},A),o)}))})]})},x=i(25),C=i.p+"static/media/logo.c152dc11.jpeg",O=i(31),w=(i(47),i(32)),v=(i(48),i(30)),N=function(){return Object(a.jsx)("div",{className:"search-field",children:Object(a.jsxs)("form",{action:"/",method:"get",children:[Object(a.jsx)("label",{htmlFor:"header-search",children:Object(a.jsx)("span",{className:"visually-hidden",children:"search products, brands, and more"})}),Object(a.jsxs)("div",{className:"search",children:[Object(a.jsx)("input",{type:"search",name:"search",id:"header-search",placeholder:"search Products and Brands",className:"search-term"}),Object(a.jsx)("button",{type:"submit",className:"button",children:Object(a.jsx)(v.a,{className:"search-button"})})]})]})})},S=function(){return Object(a.jsx)("div",{className:"mb-menu",children:Object(a.jsx)("p",{children:"Mobile Menu"})})},P=function(){var A=Object(e.useState)(!1),o=Object(x.a)(A,2),i=o[0],U=o[1],F=Object(e.useState)(!1),t=Object(x.a)(F,2),R=t[0];t[1];return Object(a.jsxs)("div",{className:"mb-nav",children:[Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)("section",{className:"app-logo",children:Object(a.jsx)(c.c,{to:"/",className:"logo-link",children:Object(a.jsx)("img",{src:C,alt:"UTO-logo",className:"logo"})})}),R?"":Object(a.jsx)(c.c,{to:"/login",className:"signin",children:"Login"}),Object(a.jsx)(c.c,{to:"/cart",className:"cart",children:Object(a.jsxs)("div",{className:"cart-and-items",children:[Object(a.jsx)(O.a,{className:"cart-icon"}),Object(a.jsx)("span",{className:"no-of-cartitems",children:9})]})}),Object(a.jsx)(w.a,{className:"menu",onClick:function(){return U(!i)}})]}),i?Object(a.jsx)(S,{}):"",Object(a.jsx)(N,{})]})},D=i(65),M=i(63),y=i(64),L=i(59),W=i(60),I=i(61),V=i(62),H=(i(49),i(50),i(51),i(52),i(53),i.p+"static/media/offer.7c4887f0.jpg"),E=i.p+"static/media/offer3.c286e440.jpg";y.a.use([L.a,W.a,I.a,V.a]);var k=function(A){A.routes;var o=[H,"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAESAyADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+f+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKK0vBt1pdl4r06bXLW4vtHiuEe8t7eTy5Z4gcsit/CSOM9q9Ij174MtMyzaL4y8maYozwtGkltEDekPGGmYM7b7AFXyFEU2GYsDQB5LRXscHij4IS6zYtN4a8aQ2LXlrPdrHco8kcImSS4gTMg3gxy3ECuSjEWttL8plljXAt9S+GNn4cMbWfia91RtFuLfznhSGJNR8+ZoZwqznMZhMCMp+6Q7YfoQDzuiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA9a/Ys0fwL4s+O+l6D4+0HVtc0vxA40+3/s+5kils53ICSlU+aRQeCAcgEnDY2n9Nl/Ym+E3hvU7PTY/h74NvFs0ghguLrUdPaUooUTmVd3753I4cj5dzHGSMfjlb3MlnOksMjxSRncroxVlPqCK/r6/4Ja/8E3fgZ8UP+Cb/AMGde8RfDTw7rWt694RsbzUL+9SSa6u5pIgzyPIzFixJ6547Yr4/iPh3F5hWjLC4uVHR3Su09LX3VmlJ7b6N6pHrZdmNHDxaq0VPVWvpbVPtrst/NdWfzQ/8FOfhd8M/gV8Ubfwn4H8N6tpmp26/btRvri+MtvMsuWSKFfuMqj+NML/CN23cfmCuv+PxdPjd4thaa4mS11e6t4jNK0rLGkzqq7mJJwAByas/s5+AbX4k/GHR9Mvl8yx3Pc3KZx5scSNIUz23bdufevewcPqmCj7abm4xvKT3btdvrbyS0S0WiM8NhamY46GFwsUpVZKMY9LyaUVf5rV77s1PhP8Aswa18R9Oj1S8lXRdFl5juJoy8tyM4JijyNwz/ExVeDgkgivSrb9n3wX4Wi2vY3GryjrJe3TqCfULEUAHsS31r1fxlqbRx8BVVVCqqgKqKBgKAOAABgAcACvONVvXmmbJPWvgZcR43GzcqcuSHRLf5vf7rI/tzD+C/DPDOHjSxdJYrEWXNKfw36qMPh5e3MnLz6GfL4b0O2bbb6DoaR5xg2Mcn6uCf1pw+HPhLWlxdeHdN3f34WltyPwjdV/SgnNOWQoaf1zFW0qy+9krh3Im7VMDRce3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c98If+Cb/wDwSS+G/ie31LxN+1Nrnju3t5A40271E2tpNjnbJ9ms1lIP+zItfh/RWfsmtE/z/wAx3P6/vhP/AMFy/wDgn/8As6fDXSPB/g34veA/DPhfQIBa2GmaXpV8lvbIOflVLc5JJJLHJZiSSSSa/mi/4LP/AB+8I/tRf8FOPi5488C6umveE/EWsmfTtQSGSFbqMRou4LIquBkH7yg+1fL1FVGnZp9hBRRRWgBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/9k=",E];return Object(a.jsx)("div",{className:"offer-container",children:Object(a.jsx)(D.a,{spaceBetween:30,slidesPerView:1,loop:!0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,effect:"cube",cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:2,shadowScale:.94},children:o.map((function(A,o){return Object(a.jsx)(M.a,{children:Object(a.jsx)(c.c,{to:"/offers/".concat(o),className:"slide",children:Object(a.jsx)("img",{src:A,alt:A,className:"offer-image"})})},o)}))})})},_=i.p+"static/media/iphone.33347ff2.jpeg",T=(i(54),function(A){var o=A.categoryName;return Object(a.jsxs)("div",{className:"c-item-container",children:[Object(a.jsx)("img",{src:_,alt:o,className:"c-thumbnail"}),Object(a.jsx)("p",{className:"c-name",children:o})]})}),X=(i(55),function(A){return Object(a.jsx)("div",{className:"categories",children:["Footwear","Cloths","Home","Mobile","Laptops","Toilet"].map((function(A,o){return Object(a.jsx)(c.c,{to:"/category/".concat(A),className:"c-item",children:Object(a.jsx)(T,{categoryName:A})},o)}))})}),Z=i(19),G=i.n(Z),J=(i(56),function(){var A=["Summer Deals","Special Tshechu","Trending Wears","COVID Shields"];return Object(a.jsx)("div",{className:"deals-container",children:A.map((function(o,i){return Object(a.jsxs)("div",{className:"deal-item",children:[Object(a.jsx)(c.c,{to:"/deals/".concat(o),children:Object(a.jsx)("h3",{children:o})}),Object(a.jsx)("section",{className:"deal-products",children:A.map((function(A,i){return Object(a.jsxs)(c.c,{to:"/product/".concat(o),className:"p-item",children:[Object(a.jsx)("img",{src:_,alt:"deals",className:"p-thumbnail"}),Object(a.jsx)("p",{children:"30% Off"})]},i)}))}),Object(a.jsx)(c.c,{to:"/deals/".concat(o),children:"View All"})]},i)}))})}),Y=function(){return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)(G.a,{maxDeviceWidth:768,children:Object(a.jsx)(P,{})}),Object(a.jsx)(X,{}),Object(a.jsx)(k,{}),Object(a.jsx)(J,{})]})};var q=function(){return Object(a.jsxs)(c.a,{basename:"/tech-outlet-frontend",children:[Object(a.jsxs)(G.a,{minDeviceWidth:769,children:[Object(a.jsx)(n,{}),Object(a.jsxs)(K.c,{children:[Object(a.jsx)(K.a,{exact:!0,path:"/",component:Y}),f.map((function(A,o){return Object(a.jsx)(p,Object(R.a)({},A),o)}))]})]}),Object(a.jsx)(G.a,{maxDeviceWidth:768,children:Object(a.jsxs)(K.c,{children:[Object(a.jsx)(K.a,{exact:!0,path:"/",component:Y}),Object(a.jsx)(Q,{})]})})]})},z=function(A){A&&A instanceof Function&&i.e(3).then(i.bind(null,66)).then((function(o){var i=o.getCLS,e=o.getFID,U=o.getFCP,F=o.getLCP,t=o.getTTFB;i(A),e(A),U(A),F(A),t(A)}))};t.a.render(Object(a.jsx)(U.a.StrictMode,{children:Object(a.jsx)(q,{})}),document.getElementById("app-container")),z()}},[[57,1,2]]]);
//# sourceMappingURL=main.bdcaacfd.chunk.js.map