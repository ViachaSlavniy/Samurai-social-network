(this.webpackJsonpnetwork=this.webpackJsonpnetwork||[]).push([[0],{12:function(e,t,a){e.exports={nav:"Nav_nav__2Caai",activeLink:"Nav_activeLink__Xl8aJ",imgSvg:"Nav_imgSvg__3mMeI",nav__item:"Nav_nav__item__1GDwQ",navItemLogoImg:"Nav_navItemLogoImg__2IoU-",profileUser:"Nav_profileUser__Qe4LG",news:"Nav_news__29Ghx",messages:"Nav_messages__365-J",friends:"Nav_friends__iPPSS",users:"Nav_users__3lc2G",communities:"Nav_communities__3MkrI",sidebar__nav:"Nav_sidebar__nav__2RvK8"}},131:function(e,t,a){e.exports={footer:"Footer_footer__gxBwb"}},134:function(e,t,a){e.exports={header__search:"SearchBlock_header__search__3f1_p"}},136:function(e,t,a){e.exports={preloader:"Preloader_preloader__1VGNX"}},137:function(e,t,a){e.exports={eventsBlock:"Events_eventsBlock__2jxrI"}},138:function(e,t,a){e.exports={timelineBlock:"TimelineBlock_timelineBlock__2Afg4"}},139:function(e,t,a){e.exports={sidebar__friends:"Sidebar_sidebar__friends__3rIZS"}},14:function(e,t,a){e.exports={aboutWrap:"About_aboutWrap__3P6n4",aboutLinks:"About_aboutLinks__sT4vX",aboutLink:"About_aboutLink__6P522",activeLink:"About_activeLink__2syNh",aboutInf:"About_aboutInf__2NpTC",title:"About_title__1K7BP",aboutForm:"About_aboutForm__b-VkF",btn:"About_btn__3ROBB",btnCancel:"About_btnCancel__2QDfS",dataItem:"About_dataItem__1G8Qf",dataItemTitle:"About_dataItemTitle__1aSuv",dataItemText:"About_dataItemText__1n3_8"}},140:function(e,t,a){e.exports={item:"Messages_item__2UDUw"}},142:function(e,t){},16:function(e,t,a){e.exports={profileBlock:"Profile_profileBlock__1S6Bt",profile__wrap:"Profile_profile__wrap__bLAIm",profile__bg:"Profile_profile__bg__11g_5",profile__photoWrapper:"Profile_profile__photoWrapper__2W-iB",profile__photo:"Profile_profile__photo__13GyJ",profile__detail:"Profile_profile__detail__9syA5",profile__info:"Profile_profile__info__3tmSz",profile__social:"Profile_profile__social__4rXIf",btns:"Profile_btns__1h4Qm",btn:"Profile_btn__uDCPJ",profileInfo:"Profile_profileInfo__4ZNMN",profileInfo__item:"Profile_profileInfo__item__1ucvK",active:"Profile_active__3B6bt"}},174:function(e,t,a){},176:function(e,t,a){},18:function(e,t,a){e.exports={post:"Post_post__2nHZn",post__info:"Post_post__info__i89bf",post__photo:"Post_post__photo__3hY-R",post__text:"Post_post__text__SXdD_",post__counter:"Post_post__counter__2rm2E",post__counterItem:"Post_post__counterItem__hHyi1",post__comments:"Post_post__comments__2F5DG",comment__user:"Post_comment__user__3J6hx",user__img:"Post_user__img__1Dt1T",user__comment:"Post_user__comment__2J3h_",comment__detailItem:"Post_comment__detailItem__21fnL"}},22:function(e,t,a){e.exports={userCard:"UserCard_userCard__1n1GJ",cardBg:"UserCard_cardBg__1CzgD",cardInfo:"UserCard_cardInfo__3pXss",cardPhotoWrap:"UserCard_cardPhotoWrap__10cW2",cardPhoto:"UserCard_cardPhoto__2_8hR",userName:"UserCard_userName__22Kag",userProf:"UserCard_userProf__Ju8YL",cardDesc:"UserCard_cardDesc__1Q4KV",cardBtn:"UserCard_cardBtn__3N8Mu",unfollowBtn:"UserCard_unfollowBtn__3KtTk"}},23:function(e,t,a){e.exports={userCard:"FriendsCard_userCard__3KMTw",cardBg:"FriendsCard_cardBg__2zEbq",cardInfo:"FriendsCard_cardInfo__2Hhkc",cardPhotoWrap:"FriendsCard_cardPhotoWrap__27nzQ",cardPhoto:"FriendsCard_cardPhoto__1ar-V",userName:"FriendsCard_userName__GFbUB",userProf:"FriendsCard_userProf__Tf_bL",cardDesc:"FriendsCard_cardDesc__3lBOZ",cardBtn:"FriendsCard_cardBtn__2tFIy",unfollowBtn:"FriendsCard_unfollowBtn__2JAyL"}},26:function(e,t,a){e.exports={btn:"AboutForm_btn__Z8EMT",btnCancel:"AboutForm_btnCancel__2n0oq",checkbox:"AboutForm_checkbox__1pIcG",dataItem:"AboutForm_dataItem__GuNti",dataItemTitle:"AboutForm_dataItemTitle__1Z2Eh",dataItemText:"AboutForm_dataItemText__1HhAH"}},28:function(e,t,a){e.exports={header:"Header_header__3fc5C",header__logo:"Header_header__logo__3_aDl",header__info:"Header_header__info__6XoBG",header__infoItem:"Header_header__infoItem__3kJk6",userPhoto:"Header_userPhoto__3R0Vt",logo__link:"Header_logo__link__38b5G",logo:"Header_logo__QBKCQ",btn:"Header_btn__1ZrJb",btnLogout:"Header_btnLogout__6od2p"}},295:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),r=a.n(s),n=a(71),o=a.n(n),i=(a(174),a(9)),l=(a(175),a(176),a(131)),d=a.n(l);var u=function(){return Object(c.jsx)("footer",{className:d.a.footer,children:"Copyright 2020 SamuraiSocial All Rights Reserved."})},j=a(24),_=a(28),b=a.n(_),m=a(11),h=a(3),f=a(133),O=a.n(f).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"deb5a1cf-eef7-4206-9237-48ed86537d51"}}),p=function(){return O.get("/security/get-captcha-url").then((function(e){return e.data}))},x=function(){return O.get("/auth/me").then((function(e){return e.data}))},v=function(e){return O.post("/auth/login",e).then((function(e){return e.data}))},g=function(){return O.delete("/auth/login").then((function(e){return e.data}))},N=function(e){return O.get("/profile/".concat(e)).then((function(e){return e.data}))},k=function(e){return O.put("/profile",e).then((function(e){return e.data}))},I=function(e,t){return O.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},C=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return O.get("/users?page=".concat(e,"&count=").concat(t,"&friend=").concat(a)).then((function(e){return e.data}))},S=function(e){return O.get("/users?term=".concat(e)).then((function(e){return e.data}))},P=function(e){return O.post("/follow/".concat(e)).then((function(e){return e.data}))},y=function(e){return O.delete("/follow/".concat(e)).then((function(e){return e.data}))},B="INITIALIZE_APP",F="SET_AUTH_USER_DATA",T="SET_USER_INFO",w="LOG_OUT",L="SET_CAPTCHA",R="ADD_POST",A="CHANGE_POST_TEXT",E="SET_PROFILE",U="SET_FETCH",D="SET_EDIT_MODE",M="SET_USERS",W="SET_FRIENDS",z="FOLLOW",H="UNFOLLOW",J="SET_LOAD",G="SET_CURRENT_PAGE",X="SEARCH_USERS",V=function(){return function(e){p().then((function(t){var a;e((a=t.url,{type:L,payload:a}))}))}},K=a(34),Z=function(e){return{type:U,payload:e}},q=function(e){return{type:D,payload:e}},Q=function(e){return function(t){return N(e).then((function(e){t(Z(!1)),t({type:E,payload:e}),t(Z(!0))}))}},Y=function(e){return{type:W,payload:e}},$=function(e){return{type:J,payload:e}},ee=function(e,t){return function(a){I(e,t).then((function(e){a($(!1)),a({type:M,payload:e}),a($(!0))}))}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return function(a){C(e,t).then((function(e){a($(!1)),a(Y(e)),a($(!0))}))}},ae=function(e){return function(t){P(e).then((function(a){0===a.resultCode&&t(function(e){return{type:z,payload:e}}(e))}))}},ce=function(e){return function(t){y(e).then((function(a){0===a.resultCode&&t(function(e){return{type:H,payload:e}}(e))}))}},se=function(e){return function(t){S(e).then((function(e){t({type:X,payload:e})}))}},re=function(e,t){return{type:T,userName:e,userPhotoURL:t}},ne=function(){return function(e){return x().then((function(t){if(0===t.resultCode){var a=t.data.id;e((s=a,function(e){return N(s).then((function(t){e(re(t.fullName,t.photos.large))}))})),e((c=t.data,{type:F,payload:c}))}var c,s}))}},oe=function(){return function(e){g().then((function(t){0===t.resultCode&&e({type:w})}))}},ie=a(48),le=a(128),de=a(129),ue=a(134),je=a.n(ue),_e=a(4),be=a(31),me=a.n(be),he=function(e){var t=e.placeholder,a=e.input,s=e.type,r=e.meta,n=r.touched,o=r.error;return Object(c.jsx)(c.Fragment,{children:"textarea"===s?Object(c.jsxs)("div",{className:me.a.inputBlock,children:[Object(c.jsx)("textarea",Object(_e.a)(Object(_e.a)({},a),{},{className:"".concat(n&&o?me.a.error:""," ").concat(me.a.textArea),placeholder:t})),n&&o&&Object(c.jsx)("span",{children:"!"})]}):Object(c.jsxs)("div",{className:me.a.inputBlock,children:[Object(c.jsx)("input",Object(_e.a)(Object(_e.a)({},a),{},{className:"".concat(n&&o?me.a.error:""," ").concat(me.a.input),placeholder:t,type:s})),n&&o&&Object(c.jsx)("span",{children:"!"})]})})},fe=a.p+"static/media/loupe.f4e852a1.svg",Oe=a(59),pe=a.n(Oe),xe=a(41),ve=a.n(xe),ge=a.p+"static/media/unknown150.1b9fa301.jpg";var Ne=function(e){var t=e.userId,a=e.name,s=e.status,r=e.photo;return Object(c.jsx)(m.b,{className:ve.a.resultItemlink,to:"/profile/".concat(t),children:Object(c.jsxs)("div",{className:ve.a.header__searchResultItem,children:[Object(c.jsx)("div",{className:ve.a.userImage,children:Object(c.jsx)("img",{src:null===r?ge:r,alt:"result search user"})}),Object(c.jsxs)("div",{className:ve.a.userInfo,children:[Object(c.jsx)("div",{className:ve.a.userName,children:a}),Object(c.jsx)("div",{className:ve.a.userStatus,children:s})]})]})})},ke=function(e){var t=e.resultBlockRef,a=e.showSearchBlock,s=Object(h.d)((function(e){return e.users.searchResult})).items.map((function(e){return Object(c.jsx)(Ne,{name:e.name,userId:e.id,photo:e.photos.small,status:e.status},e.id)}));return Object(c.jsxs)("div",{ref:t,className:"".concat(pe.a.header__searchResult," ").concat(a&&s.length>0&&pe.a.searchResultshow),children:[s,Object(c.jsx)(m.b,{className:pe.a.resultItemlink,to:"/users",children:Object(c.jsx)("div",{className:pe.a.header__searchMoreResults,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"})})]})},Ie=Object(de.a)({form:"search"})((function(e){var t=e.resultBlockRef,a=e.showSearchBlock,s=Object(ie.a)(e,["resultBlockRef","showSearchBlock"]).handleSubmit;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("form",{onSubmit:s,autoComplete:"off",children:[Object(c.jsx)("label",{htmlFor:"search"}),Object(c.jsx)(le.a,{component:he,name:"term",type:"text",placeholder:"Search..."}),Object(c.jsx)("button",{children:Object(c.jsx)("img",{src:fe,alt:"Search"})}),Object(c.jsx)(ke,{resultBlockRef:t,showSearchBlock:a})]})})})),Ce=function(e){var t=e.resultBlockRef,a=e.showSearchBlock,s=e.onSubmitForm;return Object(c.jsx)("div",{className:je.a.header__search,children:Object(c.jsx)(Ie,{resultBlockRef:t,showSearchBlock:a,onSubmit:s})})};var Se=function(){var e=Object(h.c)(),t=Object(h.d)((function(e){return e.auth})),a=t.isAuth,n=t.userName,o=t.userPhotoURL,i=Object(s.useState)(!1),l=Object(j.a)(i,2),d=l[0],u=l[1],_=r.a.createRef(),f=function(e){e.path.includes(_.current)||u(!1)};return Object(s.useEffect)((function(){document.querySelector("body").addEventListener("click",f)}),[]),Object(c.jsxs)("div",{className:b.a.header,children:[Object(c.jsx)("div",{className:b.a.header__logo,children:"SAMURAI SOCIAL NETWORK"}),Object(c.jsx)(Ce,{resultBlockRef:_,showSearchBlock:d,onSubmitForm:function(t){e(se(t.term)),u(!0)}}),a?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:b.a.header__info,children:[Object(c.jsx)("div",{className:"".concat(b.a.userPhoto," ").concat(b.a.header__infoItem),children:Object(c.jsx)("img",{src:o,alt:"profile img"})}),Object(c.jsx)("div",{className:"".concat(b.a.userName," ").concat(b.a.header__infoItem),children:n})]}),Object(c.jsx)("div",{className:"".concat(b.a.btn," ").concat(b.a.btnLogout),children:Object(c.jsx)(m.b,{onClick:function(){e(oe())},to:"/login",children:"Logout"})})]}):Object(c.jsx)("div",{className:"".concat(b.a.btn),children:Object(c.jsx)(m.b,{to:"/login",children:"LogIn"})})]})},Pe=a(12),ye=a.n(Pe);var Be=function(){return Object(c.jsx)("aside",{className:ye.a.sidebar__nav,children:Object(c.jsxs)("ul",{className:ye.a.nav,children:[Object(c.jsx)("li",{children:Object(c.jsxs)(m.c,{to:"/profile",className:ye.a.nav__item,activeClassName:ye.a.activeLink,href:"#",children:[Object(c.jsx)("div",{id:ye.a.profileUser,className:ye.a.imgSvg}),Object(c.jsx)("span",{children:"My profile"})]})}),Object(c.jsx)("li",{children:Object(c.jsxs)(m.c,{to:"/news",className:ye.a.nav__item,activeClassName:ye.a.activeLink,href:"#",children:[Object(c.jsx)("div",{id:ye.a.news,className:ye.a.imgSvg}),"News"]})}),Object(c.jsx)("li",{children:Object(c.jsxs)(m.c,{to:"/messages",className:ye.a.nav__item,activeClassName:ye.a.activeLink,href:"#",children:[Object(c.jsx)("div",{id:ye.a.messages,className:ye.a.imgSvg}),"Messages"]})}),Object(c.jsx)("li",{children:Object(c.jsxs)(m.c,{to:"/friends",className:ye.a.nav__item,activeClassName:ye.a.activeLink,href:"#",children:[Object(c.jsx)("div",{id:ye.a.friends,className:ye.a.imgSvg}),"Friends"]})}),Object(c.jsx)("li",{children:Object(c.jsxs)(m.c,{to:"/users",className:ye.a.nav__item,activeClassName:ye.a.activeLink,href:"#",children:[Object(c.jsx)("div",{id:ye.a.users,className:ye.a.imgSvg}),"Users"]})}),Object(c.jsx)("li",{children:Object(c.jsxs)(m.c,{to:"/group",className:ye.a.nav__item,activeClassName:ye.a.activeLink,href:"#",children:[Object(c.jsx)("div",{id:ye.a.communities,className:ye.a.imgSvg}),"Communities"]})})]})})},Fe=a(16),Te=a.n(Fe),we=a(136),Le=a.n(we),Re=a.p+"static/media/Preloader.8c15fc34.svg";var Ae=function(){return Object(c.jsx)("div",{className:Le.a.preloader,children:Object(c.jsx)("img",{src:Re,alt:"preloader"})})},Ee=a.p+"static/media/github.1a3193a1.svg",Ue=a.p+"static/media/vk.f9cbdfe6.svg",De=a.p+"static/media/instagram.02967a62.svg",Me=a.p+"static/media/facebook.5aa9dd97.svg",We=a.p+"static/media/twitter.b80161ac.svg",ze=a.p+"static/media/youtube.c02f061a.svg",He=a.p+"static/media/pencil.a9e27262.svg",Je=a(14),Ge=a.n(Je),Xe=a(26),Ve=a.n(Xe);var Ke=Object(de.a)({form:"about"})((function(e){e.onSubmit;var t=Object(ie.a)(e,["onSubmit"]),a=Object(h.c)(),s=Object(h.d)((function(e){return e.profile})),r=s.editMode,n=s.profilePage,o=t.handleSubmit,i=t.error;return Object(c.jsxs)("form",{onSubmit:o,className:Ve.a.aboutForm,autoComplete:"off",children:[i&&Object(c.jsx)("span",{children:i}),Object(c.jsxs)("div",{className:Ve.a.dataItem,children:[Object(c.jsx)("label",{children:"Name: "}),Object(c.jsx)(le.a,{placeholder:"Enter your name",name:"fullName",component:he,type:"text"})]}),Object(c.jsxs)("div",{className:Ve.a.dataItem,children:[Object(c.jsx)("label",{children:"About me: "}),Object(c.jsx)(le.a,{placeholder:"Write something about you",name:"aboutMe",component:he,type:"textarea"})]}),Object(c.jsxs)("div",{className:"".concat(Ve.a.dataItem," ").concat(Ve.a.checkbox),children:[Object(c.jsx)("label",{children:"Looking for a job: "}),Object(c.jsx)(le.a,{name:"lookingForAJob",component:he,type:"checkbox"})]}),Object(c.jsxs)("div",{className:Ve.a.dataItem,children:[Object(c.jsx)("label",{children:"My professional skills: "}),Object(c.jsx)(le.a,{placeholder:"Skills",name:"lookingForAJobDescription",component:he,type:"textarea"})]}),Object(c.jsx)("div",{className:Ve.a.title,children:"Contacts"}),Object.keys(n.contacts).map((function(e){return Object(c.jsxs)("div",{className:Ve.a.dataItem,children:[Object(c.jsxs)("label",{children:[e,":"]}),Object(c.jsx)(le.a,{placeholder:"https://".concat(e,".com"),name:"contacts."+e,component:he,type:"url"})]},e)})),r&&Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:Ve.a.btn,type:"submit",children:"Save"}),Object(c.jsx)("button",{onClick:function(){a(q(!1))},className:"".concat(Ve.a.btn," ").concat(Ve.a.btnCancel),children:"Cancel"})]})]})})),Ze=function(e){var t=e.contactsTitle,a=e.contactsValue;return Object(c.jsxs)("div",{className:Ge.a.dataItem,children:[Object(c.jsxs)("div",{className:Ge.a.dataItemTitle,children:[t,":"]}),Object(c.jsx)("div",{className:Ge.a.dataItemText,children:a})]})},qe=function(e){var t=e.aboutMe,a=e.fullName,s=e.lookingForAJob,r=e.lookingForAJobDescription,n=e.contacts;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:Ge.a.title,children:"About me"}),Object(c.jsxs)("div",{className:Ge.a.dataItem,children:[Object(c.jsx)("div",{className:Ge.a.dataItemTitle,children:"Name: "}),Object(c.jsx)("div",{className:Ge.a.dataItemText,children:a})]}),Object(c.jsxs)("div",{className:Ge.a.dataItem,children:[Object(c.jsx)("div",{className:Ge.a.dataItemTitle,children:"About me: "}),Object(c.jsx)("div",{className:Ge.a.dataItemText,children:t})]}),Object(c.jsxs)("div",{className:Ge.a.dataItem,children:[Object(c.jsx)("div",{className:Ge.a.dataItemTitle,children:"Looking for a job: "}),Object(c.jsx)("div",{className:Ge.a.dataItemText,children:s?"Yes":"No"})]}),Object(c.jsxs)("div",{className:Ge.a.dataItem,children:[Object(c.jsx)("div",{className:Ge.a.dataItemTitle,children:"My professional skills: "}),Object(c.jsx)("div",{className:Ge.a.dataItemText,children:r})]}),Object(c.jsx)("div",{className:Ge.a.title,children:"Contacts"}),Object.keys(n).map((function(e){return Object(c.jsx)(Ze,{contactsTitle:e,contactsValue:n[e]},e)}))]})},Qe=function(){console.log("RENDER ABOUT");var e=Object(h.c)(),t=Object(s.useState)(0),a=Object(j.a)(t,2),r=a[0],n=a[1],o=Object(h.d)((function(e){return e.profile})).editMode,i=Object(h.d)((function(e){return e.auth})).id,l=Object(h.d)((function(e){return e.profile})).profilePage;return Object(c.jsxs)("div",{className:Ge.a.aboutWrap,children:[Object(c.jsx)("div",{className:Ge.a.aboutLinks,children:["Contact and Basic info","Work and Education"].map((function(e,t){return Object(c.jsx)("div",{onClick:function(){return n(t)},className:"".concat(Ge.a.aboutLink," ").concat(t===r&&Ge.a.activeLink),children:e},t)}))}),Object(c.jsx)("div",{className:Ge.a.aboutInf,children:o?Object(c.jsx)(Ke,{initialValues:l,onSubmit:function(t){var a,c;e((a=t,c=i,function(e){return k(a).then((function(t){if(e(Q(c)),1===t.resultCode){var a=t.messages.length>0?t.messages[0]:"Some error";e(Object(K.a)("about",{_error:a}))}}))})).then((function(){e(q(!1))}))}}):Object(c.jsx)(qe,Object(_e.a)({},l))})]})},Ye=a(137),$e=a.n(Ye),et=function(){return Object(c.jsx)("div",{className:$e.a.eventsBlock,children:"EVENTS"})},tt=a(18),at=a.n(tt),ct=function(e){var t=e.postText,a=e.likesCount,s=e.userPhoto;return Object(c.jsxs)("div",{className:at.a.post,children:[Object(c.jsxs)("div",{className:at.a.post__info,children:[Object(c.jsx)("div",{className:at.a.post__photo,children:Object(c.jsx)("img",{src:s,alt:at.a.user__photo})}),Object(c.jsxs)("div",{className:at.a.post__detail,children:[Object(c.jsx)("div",{className:at.a.user__name,children:"Alexaner Petrov"}),Object(c.jsx)("div",{className:at.a.post__time,children:"7 hour ago"})]})]}),Object(c.jsx)("div",{className:at.a.post__text,children:t}),Object(c.jsxs)("div",{className:at.a.post__counter,children:[Object(c.jsxs)("span",{className:at.a.post__counterItem,children:["Likes: ",a]}),Object(c.jsx)("span",{className:at.a.post__counterItem,children:"Comments"}),Object(c.jsx)("span",{className:at.a.post__counterItem,children:"Share"})]}),Object(c.jsx)("div",{className:at.a.post__comments})]})},st=a(37),rt=a.n(st),nt=function(){var e=Object(h.c)(),t=r.a.createRef(),a=Object(h.d)((function(e){return e.profile.profilePage})).photos,s=Object(h.d)((function(e){return e.profile.postsData})).map((function(e){return Object(c.jsx)(ct,{userPhoto:a.large,postText:e.postText,likesCount:e.likesCount},e.id)}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:rt.a.posts__blockWrap,children:[Object(c.jsxs)("div",{className:rt.a.posts__block,children:[Object(c.jsx)("div",{className:rt.a.posts__blockTitle,children:"Create Post"}),Object(c.jsxs)("div",{className:rt.a.posts__form,children:[Object(c.jsx)("div",{className:rt.a.posts__formImg,children:Object(c.jsx)("img",{src:a.large?a.large:ge,alt:"User image"})}),Object(c.jsx)("textarea",{onChange:function(){var a;e((a=t.current.value,{type:A,payload:a}))},ref:t,className:rt.a.posts__textarea,cols:"50",rows:"5",placeholder:"Wrire something here..."})]}),Object(c.jsx)("button",{onClick:function(){var a;0!==t.current.value.length&&(e((a=t.current.value,{type:R,payload:a})),t.current.value="")},className:rt.a.posts__btn,type:"submit",children:"Post"})]}),s]})})},ot=a(138),it=a.n(ot),lt=function(){var e=Object(h.d)((function(e){return e.auth})).id,t=Object(h.d)((function(e){return e.profile.profilePage})).userId;return Object(c.jsx)(c.Fragment,{children:e===t?Object(c.jsxs)("div",{className:it.a.timelineBlock,children:[Object(c.jsx)(et,{}),Object(c.jsx)(nt,{})]}):"NEW BLOCK"})},dt=Object(i.g)((function(e){var t=Object(h.c)(),a=Object(h.d)((function(e){return e.auth})),r=a.isAuth,n=a.id,o=e.match.params.userId,l=Object(h.d)((function(e){return e.profile})),d=l.isFetching,u=l.profilePage;Object(s.useEffect)((function(){n||t(ne()),t(Q(o||n))}),[o,n]);var _=Object(h.d)((function(e){return e.profile.profilePage})),b=Object(s.useState)(0),m=Object(j.a)(b,2),f=m[0],O=m[1];return Object(c.jsx)(c.Fragment,{children:r||o?Object(c.jsx)(c.Fragment,{children:d?Object(c.jsxs)("div",{className:Te.a.profileBlock,children:[Object(c.jsx)("div",{className:Te.a.profile__wrap,children:Object(c.jsxs)("div",{className:Te.a.profile,children:[Object(c.jsx)("div",{className:Te.a.profile__bg,children:_.userId===n?Object(c.jsx)("div",{className:Te.a.btns,children:Object(c.jsx)("button",{onClick:function(){t(q(!0)),O(1)},className:Te.a.btn,children:Object(c.jsx)("img",{src:He,alt:"edit"})})}):""}),Object(c.jsx)("div",{className:Te.a.profile__block,children:Object(c.jsxs)("div",{className:Te.a.profile__photoWrapper,children:[Object(c.jsx)("div",{className:Te.a.profile__photo,children:Object(c.jsx)("img",{src:u.photos.large?u.photos.large:ge,alt:"profile"})}),Object(c.jsx)("div",{className:Te.a.profile__detail,children:u.fullName})]})}),Object(c.jsxs)("div",{className:Te.a.profile__info,children:[Object(c.jsxs)("div",{className:Te.a.profile__social,children:[u.contacts.github&&Object(c.jsx)("span",{children:Object(c.jsx)("a",{href:u.contacts.github,target:"_table",children:Object(c.jsx)("img",{src:Ee,alt:"github URL"})})}),u.contacts.vk&&Object(c.jsx)("span",{children:Object(c.jsx)("a",{href:u.contacts.vk,target:"_table",children:Object(c.jsx)("img",{src:Ue,alt:"vk URL"})})}),u.contacts.instagram&&Object(c.jsx)("span",{children:Object(c.jsx)("a",{href:u.contacts.instagram,target:"_table",children:Object(c.jsx)("img",{src:De,alt:"instagram URL"})})}),u.contacts.facebook&&Object(c.jsx)("span",{children:Object(c.jsx)("a",{href:u.contacts.facebook,target:"_table",children:Object(c.jsx)("img",{src:Me,alt:"facebook URL"})})}),u.contacts.twitter&&Object(c.jsx)("span",{children:Object(c.jsx)("a",{href:u.contacts.twitter,target:"_table",children:Object(c.jsx)("img",{src:We,alt:"twitter URL"})})}),u.contacts.youtube&&Object(c.jsx)("span",{children:Object(c.jsx)("a",{href:u.contacts.youtube,target:"_table",children:Object(c.jsx)("img",{src:ze,alt:"youtube URL"})})})]}),Object(c.jsx)("div",{className:Te.a.profile__counter,children:"FOLOWERS"})]})]})}),Object(c.jsx)("div",{className:Te.a.profileInfo,children:["Timeline","About","Friends","Photos"].map((function(e,t){return Object(c.jsx)("div",{onClick:function(){return O(t)},className:"".concat(Te.a.profileInfo__item," ").concat(t===f&&Te.a.active),children:e},e)}))}),0===f&&Object(c.jsx)(lt,{}),1===f&&Object(c.jsx)(Qe,{}),2===f&&"FRIENDS",3===f&&"PHOTOS"]}):Object(c.jsx)(Ae,{})}):Object(c.jsx)(i.a,{to:"/login"})})})),ut=a(139),jt=a.n(ut),_t=a(49),bt=a.n(_t),mt=function(e){var t=e.name,a=e.photo,s=e.id,r=Object(h.d)((function(e){return e.auth})).isAuth;return Object(c.jsx)(c.Fragment,{children:r?Object(c.jsx)(m.b,{className:bt.a.sidebarItemlink,to:"/profile/".concat(s),children:Object(c.jsxs)("div",{className:bt.a.sidebarItem,children:[Object(c.jsx)("div",{className:"".concat(bt.a.userImage),children:Object(c.jsx)("img",{src:a&&a?a:ge,alt:"result search user photo"})}),Object(c.jsx)("div",{className:bt.a.userInfo,children:Object(c.jsx)("div",{className:bt.a.userName,children:t})})]})}):""})},ht=function(){var e=Object(h.c)(),t=Object(h.d)((function(e){return e.users.friends.items}));Object(s.useEffect)((function(){e(te())}),[]);var a=t.map((function(e){return Object(c.jsx)(mt,{id:e.id,name:e.name,photo:e.photos.large},e.id)}));return Object(c.jsx)("aside",{className:jt.a.sidebar__friends,children:a})},ft=a(140),Ot=a.n(ft);var pt=function(){var e=Object(h.d)((function(e){return e.auth})).isAuth;return Object(c.jsx)(c.Fragment,{children:e?Object(c.jsx)("div",{className:Ot.a.item,children:"Messages"}):Object(c.jsx)(i.a,{to:"/login"})})};var xt=function(){var e=Object(h.d)((function(e){return e.auth})).isAuth;return Object(c.jsx)(c.Fragment,{children:e?Object(c.jsx)("div",{children:"News"}):Object(c.jsx)(i.a,{to:"/login"})})},vt=a(60),gt=a.n(vt),Nt=a.p+"static/media/usersBg.8b1ba409.jpg",kt=a.p+"static/media/bg1.e0c1beec.jpg",It=a(22),Ct=a.n(It);var St=function(e){var t=e.id,a=e.name,r=e.status,n=e.photos,o=e.followed,i=Object(h.c)(),l=Object(s.useState)(!1),d=Object(j.a)(l,2),u=d[0],_=d[1];return Object(c.jsxs)("div",{className:Ct.a.userCard,children:[Object(c.jsx)("div",{className:Ct.a.cardBg,children:Object(c.jsx)("img",{src:kt,alt:"card background"})}),Object(c.jsxs)("div",{className:Ct.a.cardInfo,children:[Object(c.jsx)("div",{className:Ct.a.cardPhotoWrap,children:Object(c.jsx)("div",{className:Ct.a.cardPhoto,children:Object(c.jsx)(m.b,{to:"/profile/".concat(t),children:Object(c.jsx)("img",{src:n.large?n.large:ge,alt:"card"})})})}),Object(c.jsxs)("div",{className:Ct.a.cardDesc,children:[Object(c.jsx)("div",{className:Ct.a.userName,children:a}),Object(c.jsx)("div",{className:Ct.a.userProf,children:"@Future React developer"}),Object(c.jsx)("div",{className:Ct.a.userAbout,children:r||"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, quasi."})]})]}),o?Object(c.jsx)("button",{disabled:u,onClick:function(){_(!0),i(ce(t)),_(!1)},className:Ct.a.cardBtn+" "+Ct.a.unfollowBtn,children:"Unfollow"}):Object(c.jsx)("button",{disabled:u,onClick:function(){_(!0),i(ae(t)),_(!1)},className:Ct.a.cardBtn,children:"Follow"})]})},Pt=a(42);var yt=function(e){for(var t=e.totalCount,a=e.currentPage,r=e.pageSize,n=e.portionSize,o=Object(h.c)(),i=Math.ceil(t/r),l=[],d=1;d<=i;d++)l.push(d);var u=Math.ceil(i/n),_=Object(s.useState)(1),b=Object(j.a)(_,2),m=b[0],f=b[1],O=(m-1)*n+1,p=m*n,x=l.filter((function(e){return O<=e&&e<=p})).map((function(e){return Object(c.jsx)(Pt.a.Item,{onClick:function(){return v(e)},className:e===a&&"active",children:e},e)})),v=function(e){o(function(e){return{type:G,payload:e}}(e))};return Object(c.jsx)("div",{children:Object(c.jsxs)(Pt.a,{children:[Object(c.jsx)(Pt.a.First,{onClick:function(){return f(1)}}),Object(c.jsx)(Pt.a.Prev,{disabled:1===m,onClick:function(){return f(m-1)}}),x,Object(c.jsx)(Pt.a.Next,{disabled:m===u,onClick:function(){return f(m+1)}}),Object(c.jsx)(Pt.a.Last,{onClick:function(){return f(u)}})]})})};var Bt=function(){var e=Object(h.c)(),t=Object(h.d)((function(e){return e.users})),a=t.isLoaded,r=t.currentPage,n=t.pageSize,o=t.totalCount,i=t.portionSize;Object(s.useEffect)((function(){e(ee(r,n))}),[r]);var l=Object(h.d)((function(e){return e.users.items})).map((function(e){return Object(c.jsx)(St,Object(_e.a)({},e),e.id)}));return Object(c.jsxs)("div",{className:gt.a.usersBlock,children:[Object(c.jsxs)("div",{className:gt.a.bg,children:[Object(c.jsx)("img",{src:Nt,alt:"user bg"}),Object(c.jsx)("div",{className:gt.a.bgTitle,children:Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Samurai List"})})})]}),Object(c.jsx)("div",{className:"row justify-content-center",children:Object(c.jsx)(yt,{totalCount:o,currentPage:r,pageSize:n,portionSize:i,"justify-items-center":!0})}),a?Object(c.jsx)("div",{className:gt.a.usersContainer,children:l}):Object(c.jsx)(Ae,{})]})},Ft=function(e){return e?void 0:"Field is required"},Tt=a(61),wt=a.n(Tt),Lt=Object(de.a)({form:"login"})((function(e){var t=e.captcha,a=e.error,s=Object(ie.a)(e,["captcha","error"]).handleSubmit;return Object(c.jsxs)("form",{onSubmit:s,autoComplete:"off",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Email: "}),Object(c.jsx)(le.a,{validate:[Ft],placeholder:"Enter your email",name:"email",component:he,type:"email"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Password: "}),Object(c.jsx)(le.a,{validate:[Ft],placeholder:"Enter your password",name:"password",component:he,type:"password"})]}),Object(c.jsxs)("div",{className:wt.a.rememberMe,children:[Object(c.jsx)("label",{children:"Remember me:"}),Object(c.jsx)(le.a,{label:"Remember me:",name:"rememberMe",component:he,type:"checkbox"})]}),a&&Object(c.jsx)("div",{className:me.a.errorBlock,children:a}),t&&Object(c.jsxs)("div",{className:wt.a.captchaBlock,children:[Object(c.jsx)("img",{src:t,alt:"captcha"}),Object(c.jsx)(le.a,{placeholder:"Enter captcha",name:"captcha",component:he,type:"text"})]}),Object(c.jsx)("button",{className:wt.a.btn,children:"Login"})]})})),Rt=function(){var e=Object(h.c)(),t=Object(h.d)((function(e){return e.auth})),a=t.isAuth,s=t.captcha;return Object(c.jsx)(c.Fragment,{children:a?Object(c.jsx)(i.a,{to:"/prolfile"}):Object(c.jsx)("div",{className:wt.a.loginBlock,children:Object(c.jsx)(Lt,{onSubmit:function(t){var a;e((a=t,function(e){v(a).then((function(t){if(0===t.resultCode)e(ne()),e(te());else{10===t.resultCode&&e(V());var a=t.messages.length>0?t.messages[0]:"Some error";e(Object(K.a)("login",{_error:a}))}}))}))},captcha:s})})})},At=function(){return function(e){var t=e(ne());Promise.all([t]).then((function(){e({type:B})}))}},Et=a(62),Ut=a.n(Et),Dt=a(23),Mt=a.n(Dt);var Wt=function(e){var t=e.id,a=e.name,r=e.status,n=e.photos,o=e.followed,i=Object(h.c)(),l=Object(s.useState)(!1),d=Object(j.a)(l,2),u=d[0],_=d[1];return Object(c.jsxs)("div",{className:Mt.a.userCard,children:[Object(c.jsx)("div",{className:Mt.a.cardBg,children:Object(c.jsx)("img",{src:kt,alt:"card background"})}),Object(c.jsxs)("div",{className:Mt.a.cardInfo,children:[Object(c.jsx)("div",{className:Mt.a.cardPhotoWrap,children:Object(c.jsx)("div",{className:Mt.a.cardPhoto,children:Object(c.jsx)(m.b,{to:"/profile/".concat(t),children:Object(c.jsx)("img",{src:n.large?n.large:ge,alt:"card"})})})}),Object(c.jsxs)("div",{className:Mt.a.cardDesc,children:[Object(c.jsx)("div",{className:Mt.a.userName,children:a}),Object(c.jsx)("div",{className:Mt.a.userProf,children:"@Future React developer"}),Object(c.jsx)("div",{className:Mt.a.userAbout,children:r||"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, quasi."})]})]}),o?Object(c.jsx)("button",{disabled:u,onClick:function(){_(!0),i(ce(t)),_(!1)},className:Mt.a.cardBtn+" "+Mt.a.unfollowBtn,children:"Unfollow"}):Object(c.jsx)("button",{disabled:u,onClick:function(){_(!0),i(ae(t)),_(!1)},className:Mt.a.cardBtn,children:"Follow"})]})};var zt=function(){var e=Object(h.c)(),t=Object(h.d)((function(e){return e.auth})).isAuth,a=Object(h.d)((function(e){return e.users})),r=a.isLoaded,n=a.currentPage,o=a.pageSize,l=a.portionSize,d=Object(h.d)((function(e){return e.users.friends})).totalCount;Object(s.useEffect)((function(){e(te(n,o))}),[n]);var u=Object(h.d)((function(e){return e.users.friends.items})).map((function(e){return Object(c.jsx)(Wt,Object(_e.a)({},e),e.id)}));return Object(c.jsx)(c.Fragment,{children:t?Object(c.jsxs)("div",{className:Ut.a.usersBlock,children:[Object(c.jsxs)("div",{className:Ut.a.bg,children:[Object(c.jsx)("img",{src:Nt,alt:"user bg"}),Object(c.jsx)("div",{className:Ut.a.bgTitle,children:Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Friends"})})})]}),Object(c.jsx)("div",{className:"row justify-content-center",children:Object(c.jsx)(yt,{totalCount:d,pageSize:o,currentPage:n,portionSize:l,"justify-items-center":!0})}),r?Object(c.jsx)("div",{className:Ut.a.usersContainer,children:u}):Object(c.jsx)(Ae,{})]}):Object(c.jsx)(i.a,{to:"/login"})})};var Ht=function(){var e=Object(h.c)(),t=Object(h.d)((function(e){return e.app})).initialize;return Object(s.useEffect)((function(){e(At())}),[]),Object(c.jsxs)("div",{className:"app-wrapper",children:[Object(c.jsx)(Se,{}),Object(c.jsx)(Be,{}),t?Object(c.jsx)("div",{className:"app-wrapper-content",children:Object(c.jsxs)(i.d,{children:[Object(c.jsx)(i.b,{path:"/profile/:userId?",render:function(){return Object(c.jsx)(dt,{})}}),Object(c.jsx)(i.b,{path:"/messages",render:function(){return Object(c.jsx)(pt,{})}}),Object(c.jsx)(i.b,{path:"/news",render:function(){return Object(c.jsx)(xt,{})}}),Object(c.jsx)(i.b,{path:"/friends",render:function(){return Object(c.jsx)(zt,{})}}),Object(c.jsx)(i.b,{path:"/users",render:function(){return Object(c.jsx)(Bt,{})}}),Object(c.jsx)(i.b,{path:"/login",render:function(){return Object(c.jsx)(Rt,{})}}),Object(c.jsx)(i.a,{from:"/",to:"/profile"})]})}):Object(c.jsx)(Ae,{}),Object(c.jsx)(ht,{}),Object(c.jsx)(u,{})]})},Jt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,296)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))},Gt=a(13),Xt=a(130),Vt=a(141),Kt=a(143),Zt={profilePage:null,postText:"",postsData:[{id:1,postText:"Hello my potential employer :)",likesCount:100}],isFetching:!1,editMode:!1},qt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:var a={id:e.postsData.length+1,postText:t.payload,likesCount:0};return Object(_e.a)(Object(_e.a)({},e),{},{postsData:[].concat(Object(Kt.a)(e.postsData),[a])});case A:return Object(_e.a)(Object(_e.a)({},e),{},{postText:t.payload});case E:return Object(_e.a)(Object(_e.a)({},e),{},{profilePage:Object(_e.a)({},t.payload)});case U:return Object(_e.a)(Object(_e.a)({},e),{},{isFetching:t.payload});case D:return Object(_e.a)(Object(_e.a)({},e),{},{editMode:t.payload});default:return e}},Qt={items:[],isLoaded:!1,totalCount:null,error:null,currentPage:1,pageSize:10,portionSize:10,searchResult:{items:[],totalCount:null},friends:{items:[],totalCount:0}},Yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(_e.a)(Object(_e.a)({},e),t.payload);case W:return Object(_e.a)(Object(_e.a)({},e),{},{friends:Object(_e.a)({},t.payload)});case z:return Object(_e.a)(Object(_e.a)({},e),{},{items:e.items.map((function(e){return e.id===t.payload?Object(_e.a)(Object(_e.a)({},e),{},{followed:!0}):e}))});case H:return Object(_e.a)(Object(_e.a)({},e),{},{items:e.items.map((function(e){return e.id===t.payload?Object(_e.a)(Object(_e.a)({},e),{},{followed:!1}):e}))});case J:return Object(_e.a)(Object(_e.a)({},e),{},{isLoaded:t.payload});case G:return Object(_e.a)(Object(_e.a)({},e),{},{currentPage:t.payload});case X:return Object(_e.a)(Object(_e.a)({},e),{},{searchResult:Object(_e.a)({},t.payload)});default:return e}},$t=a(142),ea=a.n($t),ta={isAuth:!1,id:null,email:null,login:null,captcha:null,userPhotoURL:null,userName:null},aa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ta,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(_e.a)(Object(_e.a)({},e),{},{id:t.payload.id,email:t.payload.email,login:t.payload.login,isAuth:!0});case T:return Object(_e.a)(Object(_e.a)({},e),{},{userName:t.userName,userPhotoURL:t.userPhotoURL});case L:return Object(_e.a)(Object(_e.a)({},e),{},{captcha:t.payload});case w:return Object(_e.a)(Object(_e.a)({},e),{},{id:null,email:null,login:null,isAuth:!1});default:return e}},ca={initialized:!1},sa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ca,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return{initialize:!0};default:return e}},ra=Object(Gt.c)({app:sa,profile:qt,users:Yt,messages:ea.a,auth:aa,form:Xt.a}),na=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Gt.d,oa=Object(Gt.e)(ra,na(Object(Gt.d)(Object(Gt.a)(Vt.a))));o.a.render(Object(c.jsx)(m.a,{children:Object(c.jsx)(h.a,{store:oa,children:Object(c.jsx)(Ht,{})})}),document.getElementById("root")),Jt()},31:function(e,t,a){e.exports={inputBlock:"FormControls_inputBlock__1Mejw",error:"FormControls_error__GDbPh",errorBlock:"FormControls_errorBlock__BNU7u",textArea:"FormControls_textArea__U7hJZ",input:"FormControls_input__24IrC"}},37:function(e,t,a){e.exports={posts__blockWrap:"Posts_posts__blockWrap__qP2aN",posts__block:"Posts_posts__block__uL8lB",posts__form:"Posts_posts__form__2b4n4",posts__blockTitle:"Posts_posts__blockTitle__1Ph52",posts__formImg:"Posts_posts__formImg__212nX",posts__textarea:"Posts_posts__textarea__1W-dN",posts__btn:"Posts_posts__btn__ztgd-"}},41:function(e,t,a){e.exports={resultItemlink:"ResultItem_resultItemlink__NXxec",header__searchResultItem:"ResultItem_header__searchResultItem__1amXc",userImage:"ResultItem_userImage__2yAUC",userInfo:"ResultItem_userInfo__1VCXZ"}},49:function(e,t,a){e.exports={sidebarItemlink:"SidebarItem_sidebarItemlink__3aGfW",sidebarItem:"SidebarItem_sidebarItem__1xsUu",userImage:"SidebarItem_userImage__VJibb",userInfo:"SidebarItem_userInfo__2c7ns"}},59:function(e,t,a){e.exports={header__searchResult:"ResultBlock_header__searchResult__3GSXZ",header__searchMoreResults:"ResultBlock_header__searchMoreResults__3mDJJ",searchResultshow:"ResultBlock_searchResultshow__3224c",showBlock:"ResultBlock_showBlock__3RB_d"}},60:function(e,t,a){e.exports={usersBlock:"Users_usersBlock__6uziw",bg:"Users_bg__3I9hH",bgTitle:"Users_bgTitle__1rFBv",usersContainer:"Users_usersContainer__19ZyT"}},61:function(e,t,a){e.exports={loginBlock:"Login_loginBlock__3b2Mg",rememberMe:"Login_rememberMe__1wbfB",captchaBlock:"Login_captchaBlock__SBrSN",btn:"Login_btn__3zokw"}},62:function(e,t,a){e.exports={usersBlock:"Friends_usersBlock__2KCwF",bg:"Friends_bg__ifqJR",bgTitle:"Friends_bgTitle___nx3x",usersContainer:"Friends_usersContainer__2t5qw"}}},[[295,1,2]]]);
//# sourceMappingURL=main.5d195cd3.chunk.js.map