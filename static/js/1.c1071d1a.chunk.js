(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{309:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3v4Nx",posts:"MyPosts_posts__2Facv"}},311:function(e,t,a){e.exports={item:"Post_item__1t14y"}},313:function(e,t,a){e.exports={profileHeader:"ProfileInfo_profileHeader__3saCK",descriptionBlock:"ProfileInfo_descriptionBlock__2rRfb"}},321:function(e,t,a){"use strict";a.r(t);var s=a(24),r=a(25),n=a(27),o=a(26),i=a(28),l=a(0),u=a.n(l),p=a(13),c=a(6),f=a(90),m=a(66),d=a(125),h=a(309),D=a.n(h),v=a(311),E=a.n(v),b=function(e){return u.a.createElement("div",{className:E.a.item},u.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/ru/thumb/b/b3/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg/304px-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg",alt:"avatar"}),e.message,u.a.createElement("div",null,u.a.createElement("span",null,"like")))},P=a(84),B=a(15),g=Object(P.a)(10),_=Object(d.a)({form:"ProfileAddPostBox"})(function(e){var t=e.handleSubmit;e.props;return u.a.createElement("form",{onSubmit:t},u.a.createElement("div",null,u.a.createElement(m.a,{component:B.b,name:"newPost",placeholder:"Enter new post",validate:[P.b,g]})),u.a.createElement("div",null,u.a.createElement("button",null,"Add post")))}),O=function(e){var t=e.posts,a=e.addPost,s=(e.props,t.map(function(e){return u.a.createElement(b,{message:e.message})}));return u.a.createElement("div",{className:D.a.postsBlock},u.a.createElement("h3",null,"My posts"),u.a.createElement("div",null,u.a.createElement(_,{onSubmit:function(e){a(e.newPost)}})),u.a.createElement("div",{className:D.a.posts},s))},j=Object(p.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},{addPost:f.a})(O),w=a(313),k=a.n(w),S=a(62),U=a(113),y=a.n(U),I=a(17),x=function(e){var t=Object(l.useState)(!1),a=Object(I.a)(t,2),s=a[0],r=a[1],n=Object(l.useState)(e.status),o=Object(I.a)(n,2),i=o[0],p=o[1];Object(l.useEffect)(function(){p(e.status)},[e.status]);return u.a.createElement("div",null,!s&&u.a.createElement("div",null,u.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"Enter status")),s&&u.a.createElement("div",null,u.a.createElement("input",{onChange:function(e){p(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateUserStatus(i)},value:i})))},C=function(e){var t=e.isOwner,a=e.profile,s=e.status,r=e.updateUserStatus,n=e.savePhoto;e.props;if(!a)return u.a.createElement(S.a,null);return u.a.createElement("div",null,u.a.createElement("div",{className:k.a.descriptionBlock},u.a.createElement("img",{src:a.photos.large?a.photos.large:y.a,alt:"Profile"}),t?u.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&n(e.target.files[0])}}):"",a?a.aboutMe:"ava + description",u.a.createElement(x,{status:s,updateUserStatus:r})))},F=function(e){var t=e.isOwner,a=e.profile,s=e.status,r=e.store,n=e.updateUserStatus,o=e.savePhoto;e.props;return u.a.createElement("div",null,u.a.createElement(C,{isOwner:t,profile:a,status:s,updateUserStatus:n,savePhoto:o}),u.a.createElement(j,{store:r}))},M=a(124),N=a(91),A=function(e){function t(){return Object(s.a)(this,t),Object(n.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.router.params.profileId;e||(e=this.props.profileId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){e.router.params.profileId!==this.props.router.params.profileId&&this.refreshProfile()}},{key:"render",value:function(){return u.a.createElement(F,Object.assign({},this.props,{isOwner:!this.props.router.params.profileId,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto}))}}]),t}(u.a.Component);t.default=Object(c.d)(Object(p.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,profileId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:f.c,getUserStatus:f.d,updateUserStatus:f.f,savePhoto:f.e}),M.a,N.a)(A)}}]);
//# sourceMappingURL=1.c1071d1a.chunk.js.map