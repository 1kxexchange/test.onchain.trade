(self["webpackChunk_1kx_sourceCode"]=self["webpackChunk_1kx_sourceCode"]||[]).push([[130],{61831:function(e){e.exports={container:"container___12ARh",info:"info___1y4cK",chart:"chart___1QoQ5"}},80719:function(e){e.exports={search_wrap:"search_wrap___3CnXX",btn:"btn___2MLeG",icon:"icon___3Lteq",table:"table___1srAK",alignRight:"alignRight___1Gnt_",alignLeft:"alignLeft___1FBK2",td1:"td1___3_fLX",td2:"td2___1faR-",td3:"td3___1J30I",green:"green___KLlDV",red:"red___154Yf",desc:"desc___3TnBO",sizeIcon:"sizeIcon___1q_yd",icon_wrap:"icon_wrap___3ysuA",icon_osd:"icon_osd___3NHxg",symbol:"symbol___3JfPo",no:"no___3mLit",full_name:"full_name___1efIu",action:"action___1ro7P",lprate:"lprate___2uTrP",token:"token___3RTGO",info:"info___1TeBS",title:"title___pfhbb",container:"container___3GRav",layer_top:"layer_top___1cgoM",menu:"menu___Zkrm7",menu_item:"menu_item___1hkCQ",menu_current_item:"menu_current_item___PGR3E",line:"line___3K1ER",borrowed_token:"borrowed_token___QqYIV",borrowed_icon:"borrowed_icon___YM7pb",borrowed_amount:"borrowed_amount___3qfmv"}},35690:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return V}});var s=a(61831),t=a.n(s),r=a(3786),i=a(8870),l=a(39428),o=a(3182),c=a(2824),d=a(80719),u=a.n(d),_=a(86914),x=a(67294),m=a(55902),h=a(96427),p=(a(52922),a(41314)),v=a(3150),j=a(73167),g=a(78129),Z=a(905),f=a(51615),k=a(19159),b=a(3987),w=a(56804),y=a(48521),N=(0,v.l$)();function I(e){var n=(0,f.TH)(),a=n.query,s="iPhone"===N||"Android"===N,t=e.walletChainId,r=e.tokenDatasSorted,i=e.dataSourceChainId,d=e.isLogin,m=e.list,h=e.loading,I=(0,x.useState)({}),F=(0,c.Z)(I,2),S=F[0],B=F[1],D=(0,x.useState)([]),C=(0,c.Z)(D,2),A=C[0],P=C[1],L=(0,x.useState)("undefined"===typeof a.showBorrow?-1:parseInt(a.showBorrow)),T=(0,c.Z)(L,2),q=T[0],E=T[1],R=d&&i===t,$=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(n,a){return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:B(a),E(n);case 2:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}();(0,x.useEffect)((()=>{m&&m.length>0&&P(m.filter((e=>parseFloat(e.userDebt)>0||e.userTotalCol>0)))}),[m]);var z=[{title:"".concat((0,_.Z)("collateral"),"/").concat((0,_.Z)("value")),dataIndex:"collateral_type",key:"collateral_type",align:"left",render:(e,n)=>{var a=n.positions.collaterals,s=[],t=[];a.map((e=>{var n=e.amount,a=e.token;if(parseFloat(n)>0){var i=(0,v.xD)(a,r);s.push({token:i,amount:(0,v.gB)(n.toString(),i.tokenDecimal)}),t.push(i.icon?(0,y.jsx)("img",{src:i.icon,className:u().icon},a):(0,y.jsx)(k.Z,{tokenId:a},a))}}));var i=(0,v.B2)(s);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:u().icon_wrap,children:t}),(0,y.jsx)("div",{children:(0,y.jsx)(b.Z,{value:i,prefix:"$",useAbbr:!0})})]})}},{title:(0,_.Z)("borrowed"),dataIndex:"borrowed",key:"borrowed",align:"right",render:(e,n)=>{var a=n.userDebt,s=n.symbol,t=n.icon,r=n.tokenId,i=(0,v.B2)([{amount:a,token:n}]);return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("div",{className:u().borrowed_token,children:[(0,y.jsx)("div",{className:u().borrowed_icon,children:t?(0,y.jsx)("img",{src:t,className:u().icon,style:{width:15,height:15}}):(0,y.jsx)(k.Z,{tokenId:r,size:15})}),(0,y.jsxs)("div",{children:[(0,y.jsx)("span",{className:u().borrowed_amount,children:(0,y.jsx)(b.Z,{value:a,useAbbr:!0,suffix:s})}),(0,y.jsx)("div",{className:u().desc,children:(0,y.jsx)(b.Z,{value:i,prefix:"$",useAbbr:!0})})]})]})})}},{title:(0,_.Z)("apr"),dataIndex:"apr",key:"apr",align:"right",render:e=>"".concat(e,"%")},{title:(0,y.jsxs)(y.Fragment,{children:[(0,_.Z)("risk_factor"),(0,y.jsx)("br",{}),(0,_.Z)("liq_rf")]}),dataIndex:"liq",key:"liq",align:"right",render:(e,n)=>{var a=n.positions,s=n.userDebt,t=a.collaterals,i=new Z.Z(0);t.forEach((e=>{var n=e.token,a=e.amount,s=(0,v.xD)(n,r);if(s.tokenId){var t=s.userBorrowPrice,l=s.assets,o=s.tokenDecimal,c=(0,v.gB)(a.toString(),o);i=i.plus(new Z.Z(c).multipliedBy(t).multipliedBy(l.collateralCredit))}})),i=parseFloat(s)<=0?i.gt(0)?new Z.Z(1/0):new Z.Z(0):i.div(s).div(n.userBorrowPrice).div(n.assets.borrowCredit);var l="#00A980";return i.lte(1.05)?l="#EB5757":i.lte(1.1)&&(l=" #F2994A"),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{style:{color:l},children:"Infinity"===i.toString()?"--":i.toFixed(2)}),(0,y.jsx)("div",{className:u().line,children:"1.00"})]})}},{title:"".concat((0,_.Z)("add_coll"),"/").concat((0,_.Z)("repay")),dataIndex:"repay",key:"repay",align:"center",render:(e,n)=>R?(0,y.jsxs)("div",{className:u().action,children:[parseFloat(n.userUpdatedAt)>0&&(0,y.jsx)(j.A,{setShowPanelIndex:e=>$(e,n),txt:(0,_.Z)("edit")}),parseFloat(n.userDebt)>0&&(0,y.jsx)(j.b,{setShowPanelIndex:e=>$(e,n)})]}):null}],K=[{title:"".concat((0,_.Z)("collateral"),"/").concat((0,_.Z)("value")),dataIndex:"collateral_type",key:"collateral_type",align:"left",render:(e,n)=>{var a=n.positions.collaterals,s=[],t=[];a.map((e=>{var n=e.amount,a=e.token,i=(0,v.xD)(a,r);s.push({token:i,amount:(0,v.gB)(n.toString(),i.tokenDecimal)}),t.push(i.icon?(0,y.jsx)("img",{src:i.icon,className:u().icon},a):(0,y.jsx)(k.Z,{tokenId:a},a))}));var i=(0,v.B2)(s);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:u().icon_wrap,children:t}),(0,y.jsx)("div",{children:(0,y.jsx)(b.Z,{value:i,prefix:"$",useAbbr:!0})})]})}},{title:(0,y.jsxs)(y.Fragment,{children:[(0,_.Z)("risk_factor"),(0,y.jsx)("br",{}),(0,_.Z)("liq_rf")]}),dataIndex:"liq",key:"liq",align:"right",render:(e,n)=>{var a=n.positions,s=n.userDebt,t=a.collaterals,i=new Z.Z(0);t.forEach((e=>{var n=e.token,a=e.amount,s=(0,v.xD)(n,r),t=s.userBorrowPrice,l=s.assets,o=s.tokenDecimal,c=(0,v.gB)(a.toString(),o);i=i.plus(new Z.Z(c).multipliedBy(t).multipliedBy(l.collateralCredit))})),i=parseFloat(s)<=0?i.gt(0)?new Z.Z(1/0):new Z.Z(0):i.div(s).div(n.userBorrowPrice).div(n.assets.borrowCredit);var l="#00A980";return i.lte(1.05)?l="#EB5757":i.lte(1.1)&&(l=" #F2994A"),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{style:{color:l},children:i.toFixed(2)}),(0,y.jsx)("br",{}),"1.00"]})}}];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p.Z,{columns:s?K:z,dataSource:A,className:u().table,rowKey:"id",loading:{spinning:h,indicator:(0,y.jsx)(w.Z,{spin:!0,style:{fontSize:30}})}}),q>-1&&(0,y.jsx)(g.Z,{showPanelIndex:q,setShowPanelIndex:E,currentToken:S})]})}var F=e=>{var n=e.tokens,a=e.wallet;return(0,i.Z)((0,i.Z)({},n),a)},S=(0,m.$j)(F)(I);function B(e){var n=e.list,a=e.loading,s=(0,m.I0)(),t=(0,x.useState)([]),r=(0,c.Z)(t,2),i=r[0],l=r[1];(0,x.useEffect)((()=>{n&&n.length>0&&l(n.filter((e=>parseFloat(e.userTokenBalance)>0)))}),[n]);var o=[{title:(0,_.Z)("asset"),dataIndex:"asset",key:"asset",align:"left",render:(e,n)=>{var a=n.icon,s=n.symbol,t=n.fullName,r=n.tokenId;return(0,y.jsx)("div",{className:u().token,children:(0,y.jsxs)("div",{className:u().info,children:[(0,y.jsx)("div",{className:u().icon_wrap,children:a?(0,y.jsx)("img",{src:a,className:u().icon}):(0,y.jsx)(k.Z,{tokenId:r})}),(0,y.jsxs)("div",{className:u().title,children:[(0,y.jsx)("div",{className:u().symbol,children:s}),(0,y.jsx)("div",{className:u().full_name,children:t})]})]})})}},{title:(0,_.Z)("balance"),dataIndex:"balance",key:"balance",align:"right",render:(e,n)=>{var a=n.userTokenBalance,s=n.symbol,t=(0,v.B2)([{amount:a,token:n}]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{children:(0,y.jsx)(b.Z,{value:a,useAbbr:!0,suffix:s})}),(0,y.jsx)("div",{className:u().desc,children:(0,y.jsx)(b.Z,{value:t,prefix:"$",useAbbr:!0})})]})}},{title:"-",dataIndex:"swap",key:"swap",align:"center",render:(e,n)=>{var a=n.tokenId;return(0,y.jsx)("div",{className:u().action,onClick:()=>{s({type:"tokens/save",payload:{swapTokenId:a}}),m.m8.push("/trade")},children:(0,_.Z)("swap")})}}];return(0,y.jsx)(p.Z,{columns:o,dataSource:i,className:u().table,rowKey:"id",loading:{spinning:a,indicator:(0,y.jsx)(w.Z,{spin:!0,style:{fontSize:30}})}})}var D=B,C=a(94530),A=(a(71194),a(37079)),P=a(21512),L=a(89544);function T(e){var n=e.visible,a=e.setVisible,s=e.setShowLiuidityPanelIndex,r=e.token,i=r.userOsd,l=r.userReserve,o=r.symbol,c=r.userLpSupply,d=r.icon,u=r.tokenId,x=r.fullName,m=r.userLpBalance,h=r.osdTokenData,p=r.tokenDecimal,j=r.userTokenDebt,g=d?(0,y.jsx)("img",{src:d,className:t().icon}):(0,y.jsx)(k.Z,{tokenId:u}),f=parseFloat(c)>0?new Z.Z(m).div(c):new Z.Z(0),w=(0,v.B2)([{amount:new Z.Z(l).plus(j).toFixed(p),token:r},{amount:i,token:h}]),N=f.multipliedBy(w).toFixed(2);return(0,y.jsx)(A.Z,{width:890,footer:null,open:n,getContainer:()=>document.getElementById("J_Page")||document.body,onCancel:()=>a(!1),closable:!1,wrapClassName:t().modal,children:(0,y.jsxs)("div",{className:t().container,children:[(0,y.jsxs)("div",{className:t().token,children:[(0,y.jsxs)("div",{className:t().icon_wrap,children:[g,(0,y.jsx)("img",{src:L.qQ,className:t().icon_osd})]}),(0,y.jsxs)("div",{className:t().title,children:[(0,y.jsx)("div",{className:t().symbol,children:o}),(0,y.jsx)("div",{className:t().full_name,children:x})]})]}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(b.Z,{value:(0,v.FH)(l,2),useAbbr:!0})," ",o]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(b.Z,{value:(0,v.FH)(i,2),useAbbr:!0})," ",h.symbol]})]}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{children:[m," ",o," LP | ",f.multipliedBy(100).toFixed(2),"%"]}),(0,y.jsx)("div",{children:(0,y.jsx)(b.Z,{value:N,useAbbr:!0,prefix:"$"})})]}),(0,y.jsxs)("div",{className:t().btns_wrap,children:[(0,y.jsx)(P.Z,{onClick:()=>s(1),className:t().btn,height:"48",children:(0,_.Z)("remove_liquidity")}),(0,y.jsx)(P.Z,{onClick:()=>s(0),className:t().btn,height:"48",children:(0,_.Z)("add_liquidity")})]})]})})}var q=e=>{var n=e.tokens,a=e.wallet;return(0,i.Z)((0,i.Z)({},n),a)},E=(0,m.$j)(q)(T),R=(0,v.l$)(),$="iPhone"===R||"Android"===R;function z(e){var n=e.list,a=e.loading,s=e.osdTokenData,t=e.isLogin,r=e.dataSourceChainId,i=e.walletChainId,d=(0,x.useState)([]),m=(0,c.Z)(d,2),h=m[0],j=m[1],g=(0,x.useState)(-1),f=(0,c.Z)(g,2),N=f[0],I=f[1],F=(0,x.useState)(!1),S=(0,c.Z)(F,2),B=S[0],D=S[1],A=(0,x.useState)({}),P=(0,c.Z)(A,2),T=P[0],q=P[1],R=t&&r===i;(0,x.useEffect)((()=>{n&&n.length>0&&j(n.filter((e=>parseFloat(e.userLpBalance)>0)))}),[n]);var z=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(n,a){return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:q(a),I(n);case 2:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}(),K=[{title:(0,_.Z)("pool"),dataIndex:"pool",key:"pool",align:"left",render:(e,n)=>{var a=n.icon,s=n.symbol,t=n.fullName,r=n.tokenId;return(0,y.jsx)("div",{className:u().token,children:(0,y.jsxs)("div",{className:u().info,children:[(0,y.jsxs)("div",{className:u().icon_wrap,children:[a?(0,y.jsx)("img",{src:a,className:u().icon}):(0,y.jsx)(k.Z,{tokenId:r}),(0,y.jsx)("img",{src:L.qQ,className:u().icon_osd})]}),(0,y.jsxs)("div",{className:u().title,children:[(0,y.jsx)("div",{className:u().symbol,children:s}),(0,y.jsx)("div",{className:u().full_name,children:t})]})]})})}},{title:(0,_.Z)("pool_size"),dataIndex:"size",key:"poolInfo",align:"right",render:(e,n)=>{var a=n.userOsd,t=n.userReserve;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(b.Z,{value:(0,v.FH)(t,2),useAbbr:!0})," ",n.symbol]}),(0,y.jsxs)("div",{className:u().line,children:[(0,y.jsx)(b.Z,{value:(0,v.FH)(a,2),useAbbr:!0})," ",s.symbol]})]})}},{title:(0,y.jsxs)(y.Fragment,{children:["LP | ",(0,_.Z)("increased_pool"),(0,y.jsx)("br",{}),(0,_.Z)("value")]}),dataIndex:"lp",key:"lp",align:"right",render:(e,n)=>{var a=n.userLpBalance,t=n.userLpSupply,r=n.symbol,i=n.userReserve,l=n.userOsd,o=n.userTokenDebt,c=n.tokenDecimal,d=parseFloat(t)>0?new Z.Z(a).div(t):new Z.Z(0),_=(0,v.B2)([{amount:new Z.Z(i).plus(o).toFixed(c),token:n},{amount:l,token:s}]),x=d.multipliedBy(_).toFixed(2);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{children:[a," ",r," LP | ",d.multipliedBy(100).toFixed(2),"%"]}),(0,y.jsx)("div",{className:u().line,children:(0,y.jsx)(b.Z,{value:x,useAbbr:!0,prefix:"$"})})]})}}],H=[...K,{title:(0,_.Z)("manage_liq"),dataIndex:"manage",key:"manage",align:"center",render:(e,n)=>(0,y.jsxs)("div",{className:u().action,children:[(0,y.jsx)("div",{onClick:()=>z(0,n),children:(0,_.Z)("add")}),(0,y.jsx)("div",{onClick:()=>z(1,n),style:{marginLeft:20},children:(0,_.Z)("withdraw")})]})}];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p.Z,{columns:$?K:H,dataSource:h,className:u().table,rowKey:"id",loading:{spinning:a,indicator:(0,y.jsx)(w.Z,{spin:!0,style:{fontSize:30}})}}),N>-1&&(0,y.jsx)(C.Z,{showPanelIndex:N,setShowPanelIndex:I,currentToken:T}),B&&R&&(0,y.jsx)(E,{token:T,visible:B,setVisible:D,setShowLiuidityPanelIndex:e=>{D(!1),I(e)}})]})}var K=z;function H(e){var n=(0,m.I0)(),a=e.tokenDatas,s=e.tokenDatasSorted,t=e.osdTokenData,r=e.loadingData,i=e.dataSourceChainId,d=e.account,p=(0,x.useState)([]),v=(0,c.Z)(p,2),j=v[0],g=v[1],Z=(0,x.useState)(0),f=(0,c.Z)(Z,2),k=f[0],b=f[1];(0,x.useEffect)((()=>{g(s)}),[s]);var w=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(){var a;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n({type:"tokens/getData"});case 2:a=e.sent,n({type:"tokens/fetchPoolInfo",payload:{datas:a}});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,x.useEffect)((()=>{w()}),[i,d]);var N=a&&a.length<1||s&&s.length<1||r;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:u().layer_top,children:[(0,y.jsx)("div",{className:u().menu,children:["wallet_balance","pool_deposits","borrow_positions"].map(((e,n)=>(0,y.jsx)("div",{className:n===k?"".concat(u().menu_item," ").concat(u().menu_current_item):u().menu_item,onClick:()=>b(n),children:(0,_.Z)(e)},e)))}),(0,y.jsx)("div",{className:u().search_wrap,children:(0,y.jsx)(h.Z,{changeShowList:g,className:"search_input",placeholder:(0,_.Z)("search_tips")})})]}),0===k&&(0,y.jsx)(D,{list:j,loading:N}),1===k&&(0,y.jsx)(K,{list:j,loading:N,osdTokenData:t}),2===k&&(0,y.jsx)(S,{list:j,loading:N})]})}var Q=e=>{var n=e.tokens,a=e.wallet,s=e.loading,t=s.effects;return(0,i.Z)((0,i.Z)((0,i.Z)({},n),a),{},{loadingData:t["tokens/getData"]||!1})},G=(0,m.$j)(Q)(H);function O(){return(0,y.jsx)(r.Z,{children:(0,y.jsx)("div",{className:t().container,children:(0,y.jsx)(G,{})})})}var V=O}}]);