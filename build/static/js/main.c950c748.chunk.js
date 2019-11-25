(this["webpackJsonpgoit-react-hw-01-component"]=this["webpackJsonpgoit-react-hw-01-component"]||[]).push([[0],{12:function(t,e,n){t.exports={balance:"Balance_balance__30Dlf",income:"Balance_income__7RsSw",expenses:"Balance_expenses__1btJ3"}},13:function(t,e,n){t.exports={dashboardContainer:"Dashboard_dashboardContainer__2V4GY",blueBox:"Dashboard_blueBox__3XZQK",transactionHistoryBox:"Dashboard_transactionHistoryBox__jUcjv"}},18:function(t,e,n){t.exports={historyContainer:"TransactionHistory_historyContainer__2U_E0"}},19:function(t,e,n){t.exports=n(29)},29:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),s=n(15),l=n(7),i=n(8),u=n(10),m=n(9),p=n(11),b=n(2),h=(n(24),n(14)),d=n.n(h),E=n(17),_=n(5),f=n.n(_),y=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={amount:""},n.handleInputChange=function(t){var e=t.target,a=e.name,o=e.value;n.setState(Object(E.a)({},a,o))},n.onDeposit=function(){(0,n.props.onDeposit)(Number(n.state.amount)),n.setState({amount:""})},n.onWithdraw=function(){(0,n.props.onWithdraw)(Number(n.state.amount)),n.setState({amount:""})},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state.amount;return o.a.createElement("section",{className:f.a.controls},o.a.createElement("input",{className:f.a.input,onChange:this.handleInputChange,type:"number",name:"amount",value:t}),o.a.createElement("button",{className:f.a.button,onClick:this.onDeposit,type:"button"},"Deposit"),o.a.createElement("button",{className:f.a.button,onClick:this.onWithdraw,type:"button"},"Withdraw"))}}]),e}(a.Component),w=n(12),O=n.n(w),v=function(t){var e=t.balance,n=t.income,a=t.expenses;return o.a.createElement("section",{className:O.a.balance},o.a.createElement("span",null,o.a.createElement("span",{className:O.a.income},"\u2191"),n,"$"),o.a.createElement("span",null,o.a.createElement("span",{className:O.a.expenses},"\u2193"),a,"$"),o.a.createElement("span",null,"Balance: ",e,"$"))},C=n(18),N=n.n(C),j=function(t){var e=t.items;return o.a.createElement("table",{className:N.a.historyContainer},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Transaction"),o.a.createElement("th",null,"Amount"),o.a.createElement("th",null,"Date"))),o.a.createElement("tbody",null,e.map((function(t){return o.a.createElement("tr",{key:t.id},o.a.createElement("td",null,t.type),o.a.createElement("td",null,t.amount),o.a.createElement("td",null,t.date))}))))},x=n(13),D=n.n(x),g=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={transactions:[],balance:0},n.onDeposit=function(t){if(0===t)return b.b.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",{position:b.b.POSITION.TOP_CENTER});var e={id:d()(),type:"deposit",amount:t,date:(new Date).toLocaleString()};n.setState((function(n){return{transactions:[e].concat(Object(s.a)(n.transactions)),balance:n.balance+t}}))},n.onWithdraw=function(t){if(0===t)return b.b.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",{position:b.b.POSITION.TOP_CENTER});if(t>n.state.balance)return b.b.error("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",{position:b.b.POSITION.TOP_CENTER});var e={id:d()(),type:"withdraw",amount:t,date:(new Date).toLocaleString()};n.setState((function(n){return{transactions:[e].concat(Object(s.a)(n.transactions)),balance:n.balance-t}}))},n}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state,e=t.transactions,n=t.balance,a=e.reduce((function(t,e){return"deposit"===e.type?t+e.amount:t}),0),r=e.reduce((function(t,e){return"withdraw"===e.type?t+e.amount:t}),0);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:D.a.dashboardContainer},o.a.createElement("div",{className:D.a.blueBox},o.a.createElement(y,{onDeposit:this.onDeposit,onWithdraw:this.onWithdraw})),o.a.createElement(v,{balance:n,income:a,expenses:r}),o.a.createElement("div",{className:D.a.transactionHistoryBox},o.a.createElement(j,{items:e})),o.a.createElement(b.a,null)))}}]),e}(a.Component),B=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,null))};c.a.render(o.a.createElement(B,null),document.getElementById("root"))},5:function(t,e,n){t.exports={controls:"Controls_controls__BY2-d",input:"Controls_input__1zU3F",button:"Controls_button__31jsY"}}},[[19,1,2]]]);
//# sourceMappingURL=main.c950c748.chunk.js.map