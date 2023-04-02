//Using JS
//const root=document.getElementById('root');
// const h1 = document.createElement('h1');
// h1.innerText= 'Hello World! from Java Script';
// root.appendChild(h1);

//using React
// const h1=React.createElement('h1',{id:'heading'},'Hello World! from React');
//const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(h1);

//using React for nested child elements
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const parent=React.createElement('div',{id:'parent'},React.createElement('div',{id:'child'},
// React.createElement('h1',{id:'heading'},'Hello World! Nested from React2')));
// root.render(parent);

//using react for sibling elements
const root = ReactDOM.createRoot(document.getElementById('root'));
const parent=React.createElement('div',{id:'parent'},[React.createElement('div',{id:'child'},
React.createElement('h1',{id:'heading'},['Hello World! Nested from React'])),
React.createElement('div',{id:'child2'},
React.createElement('h1',{id:'heading'},'Hello World! Nested from React2'))]);
root.render(parent);

