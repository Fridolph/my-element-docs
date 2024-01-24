import{d,h as r,y as m,Y as u,o as h,c as k,r as B,O as f,k as v,m as i,t as c,J as n,n as o,w as A,a3 as _,a4 as x,N as b,Z as V,T as I,F as w,V as y,E as $}from"./chunks/framework.mZLjJuj4.js";import{_ as j}from"./chunks/Icon.vue_vue_type_script_setup_true_lang.ICVbSsbt.js";import"./chunks/theme.EIV0aOnn.js";const g=Symbol("collapseContext"),N={class:"vk-collapse"},P=d({name:"VkCollapse",__name:"Collapse",props:{modelValue:{},accordion:{type:Boolean}},emits:["update:modelValue","change"],setup(p,{emit:a}){const E=p,l=a,e=r(E.modelValue);return m(()=>E.modelValue,()=>{e.value=E.modelValue}),u(g,{activeNames:e,handleItemClick:s=>{let t=[...e.value];if(E.accordion)t=[e.value[0]===s?"":s],e.value=t;else{const D=t.indexOf(s);D>-1?t.splice(D,1):t.push(s),e.value=t}l("update:modelValue",t),l("change",t)}}),(s,t)=>(h(),k("div",N,[B(s.$slots,"default")]))}}),q=["id"],S={class:"vk-collapse-item__wrapper"},H=["id"],C=d({name:"VkCollapseItem",__name:"CollapseItem",props:{name:{},title:{},disabled:{type:Boolean}},setup(p){const a=p,E=f(g),l=v(()=>E==null?void 0:E.activeNames.value.includes(a.name)),e=()=>{a.disabled||E==null||E.handleItemClick(a.name)},F={beforeEnter(s){s.style.height="0px",s.style.overflow="hidden"},enter(s){s.style.height=`${s.scrollHeight}px`},afterEnter(s){s.style.height="",s.style.overflow=""},beforeLeave(s){s.style.height=`${s.scrollHeight}px`,s.style.overflow="hidden"},leave(s){s.style.height="0px"},afterLeave(s){s.style.height="",s.style.overflow=""}};return(s,t)=>(h(),k("div",{class:o(["vk-collapse-item",{"is-disabled":s.disabled}])},[i("div",{class:o(["vk-collapse-item__header",{"is-disabled":s.disabled,"is-active":l.value}]),id:`item-header-${s.name}`,onClick:e},[B(s.$slots,"title",{},()=>[i("h2",null,c(s.title),1)]),n(j,{icon:"angle-right",class:"header-angle"})],10,q),n(I,b({name:"slide"},V(F)),{default:A(()=>[_(i("div",S,[i("div",{class:"vk-collapse-item__content",id:`item-content-${s.name}`},[B(s.$slots,"default")],8,H)],512),[[x,l.value]])]),_:3},16)],2))}}),O=i("p",null,"内容段落展示 - 索拉卡党风建设肯定放假睡觉了附件开始的",-1),T=i("p",null,"直接写些简单内容 - 双联单控福建省两地分居立卡手机卡了双联单控就",-1),J=i("div",null,"数控刀具法律手段科技 胜多负少考虑到就分手了科技",-1),L=i("div",null,"塑料袋咖啡机塑料袋可视对讲发了尽快slkj",-1),z=i("div",null,"sdflksjdfaskjfowieruowieruo9iaosodifusodfui",-1),K=i("p",null,"直接写些简单内容 - 双联单控福建省两地分居立卡手机卡了双联单控就",-1),U={__name:"Basic",setup(p){const a=r(["item1"]);return(E,l)=>(h(),k(w,null,[n(P,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e)},{default:A(()=>[n(C,{name:"item1",title:"标题1"},{default:A(()=>[O]),_:1}),n(C,{name:"item2",title:"测试标题2"},{default:A(()=>[T]),_:1}),n(C,{disabled:"",name:"item3",title:"disabled状态"},{default:A(()=>[J,L,z]),_:1}),n(C,{name:"item4",title:"标题4"},{default:A(()=>[K]),_:1})]),_:1},8,["modelValue"]),i("p",null,"openValue: "+c(a.value),1)],64))}},Y=U,Z=y('<h1 id="collapse" tabindex="-1">Collapse <a class="header-anchor" href="#collapse" aria-label="Permalink to &quot;Collapse&quot;">​</a></h1><p>简易的折叠面板</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>使用 <code>type</code>、<code>plain</code>、<code>round</code> 和 <code>circle</code> 来定义按钮的样式。</p>',4),G=y('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>键名</th><th>描述</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>当前打开项</td><td>NameType[]</td><td>-</td></tr><tr><td>accordion</td><td>是否支持手风琴模式</td><td>boolean</td><td>false</td></tr></tbody></table>',2),X=JSON.parse('{"title":"Collapse | V-Element","description":"Collapse 组件的文档","frontmatter":{"title":"Collapse | V-Element","description":"Collapse 组件的文档"},"headers":[],"relativePath":"components/collapse.md","filePath":"components/collapse.md"}'),M={name:"components/collapse.md"},s2=d({...M,setup(p){return(a,E)=>{const l=$("demo-preview");return h(),k("div",null,[Z,n(l,{title:"基础用法",description:"Button 组件的基础用法",code:"%3Ctemplate%3E%0D%0A%20%20%3CCollapse%20v-model=%22openValue%22%3E%0D%0A%20%20%20%20%3CCollapseItem%20name=%22item1%22%20title=%22%E6%A0%87%E9%A2%981%22%3E%0D%0A%20%20%20%20%20%20%3Cp%3E%E5%86%85%E5%AE%B9%E6%AE%B5%E8%90%BD%E5%B1%95%E7%A4%BA%20-%20%E7%B4%A2%E6%8B%89%E5%8D%A1%E5%85%9A%E9%A3%8E%E5%BB%BA%E8%AE%BE%E8%82%AF%E5%AE%9A%E6%94%BE%E5%81%87%E7%9D%A1%E8%A7%89%E4%BA%86%E9%99%84%E4%BB%B6%E5%BC%80%E5%A7%8B%E7%9A%84%3C/p%3E%0D%0A%20%20%20%20%3C/CollapseItem%3E%0D%0A%20%20%20%20%3CCollapseItem%20name=%22item2%22%20title=%22%E6%B5%8B%E8%AF%95%E6%A0%87%E9%A2%982%22%3E%0D%0A%20%20%20%20%20%20%3Cp%3E%E7%9B%B4%E6%8E%A5%E5%86%99%E4%BA%9B%E7%AE%80%E5%8D%95%E5%86%85%E5%AE%B9%20-%20%E5%8F%8C%E8%81%94%E5%8D%95%E6%8E%A7%E7%A6%8F%E5%BB%BA%E7%9C%81%E4%B8%A4%E5%9C%B0%E5%88%86%E5%B1%85%E7%AB%8B%E5%8D%A1%E6%89%8B%E6%9C%BA%E5%8D%A1%E4%BA%86%E5%8F%8C%E8%81%94%E5%8D%95%E6%8E%A7%E5%B0%B1%3C/p%3E%0D%0A%20%20%20%20%3C/CollapseItem%3E%0D%0A%20%20%20%20%3CCollapseItem%20disabled%20name=%22item3%22%20title=%22disabled%E7%8A%B6%E6%80%81%22%3E%0D%0A%20%20%20%20%20%20%3Cdiv%3E%E6%95%B0%E6%8E%A7%E5%88%80%E5%85%B7%E6%B3%95%E5%BE%8B%E6%89%8B%E6%AE%B5%E7%A7%91%E6%8A%80%20%E8%83%9C%E5%A4%9A%E8%B4%9F%E5%B0%91%E8%80%83%E8%99%91%E5%88%B0%E5%B0%B1%E5%88%86%E6%89%8B%E4%BA%86%E7%A7%91%E6%8A%80%3C/div%3E%0D%0A%20%20%20%20%20%20%3Cdiv%3E%E5%A1%91%E6%96%99%E8%A2%8B%E5%92%96%E5%95%A1%E6%9C%BA%E5%A1%91%E6%96%99%E8%A2%8B%E5%8F%AF%E8%A7%86%E5%AF%B9%E8%AE%B2%E5%8F%91%E4%BA%86%E5%B0%BD%E5%BF%ABslkj%3C/div%3E%0D%0A%20%20%20%20%20%20%3Cdiv%3Esdflksjdfaskjfowieruowieruo9iaosodifusodfui%3C/div%3E%0D%0A%20%20%20%20%3C/CollapseItem%3E%0D%0A%20%20%20%20%3CCollapseItem%20name=%22item4%22%20title=%22%E6%A0%87%E9%A2%984%22%3E%0D%0A%20%20%20%20%20%20%3Cp%3E%E7%9B%B4%E6%8E%A5%E5%86%99%E4%BA%9B%E7%AE%80%E5%8D%95%E5%86%85%E5%AE%B9%20-%20%E5%8F%8C%E8%81%94%E5%8D%95%E6%8E%A7%E7%A6%8F%E5%BB%BA%E7%9C%81%E4%B8%A4%E5%9C%B0%E5%88%86%E5%B1%85%E7%AB%8B%E5%8D%A1%E6%89%8B%E6%9C%BA%E5%8D%A1%E4%BA%86%E5%8F%8C%E8%81%94%E5%8D%95%E6%8E%A7%E5%B0%B1%3C/p%3E%0D%0A%20%20%20%20%3C/CollapseItem%3E%0D%0A%20%20%3C/Collapse%3E%0D%0A%20%20%3Cp%3EopenValue:%20%7B%7B%20openValue%20%7D%7D%3C/p%3E%0D%0A%3C/template%3E%0D%0A%0D%0A%3Cscript%20setup%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aimport%20Collapse%20from%20'@/components/Collapse/Collapse.vue'%0D%0Aimport%20CollapseItem%20from%20'@/components/Collapse/CollapseItem.vue'%0D%0Aconst%20openValue%20=%20ref(%5B'item1'%5D)%0D%0A%3C/script%3E%0D%0A",showCode:"%3Cpre%20class%3D%22shiki%20shiki-themes%20github-light%20github-dark%20vp-code%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3ECollapse%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20v-model%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3EopenValue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3ECollapseItem%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20name%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22item1%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20title%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%E6%A0%87%E9%A2%981%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%E5%86%85%E5%AE%B9%E6%AE%B5%E8%90%BD%E5%B1%95%E7%A4%BA%20-%20%E7%B4%A2%E6%8B%89%E5%8D%A1%E5%85%9A%E9%A3%8E%E5%BB%BA%E8%AE%BE%E8%82%AF%E5%AE%9A%E6%94%BE%E5%81%87%E7%9D%A1%E8%A7%89%E4%BA%86%E9%99%84%E4%BB%B6%E5%BC%80%E5%A7%8B%E7%9A%84%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3ECollapseItem%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3ECollapseItem%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20name%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22item2%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20title%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%E6%B5%8B%E8%AF%95%E6%A0%87%E9%A2%982%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%E7%9B%B4%E6%8E%A5%E5%86%99%E4%BA%9B%E7%AE%80%E5%8D%95%E5%86%85%E5%AE%B9%20-%20%E5%8F%8C%E8%81%94%E5%8D%95%E6%8E%A7%E7%A6%8F%E5%BB%BA%E7%9C%81%E4%B8%A4%E5%9C%B0%E5%88%86%E5%B1%85%E7%AB%8B%E5%8D%A1%E6%89%8B%E6%9C%BA%E5%8D%A1%E4%BA%86%E5%8F%8C%E8%81%94%E5%8D%95%E6%8E%A7%E5%B0%B1%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3ECollapseItem%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3ECollapseItem%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20disabled%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20name%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22item3%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20title%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22disabled%E7%8A%B6%E6%80%81%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%E6%95%B0%E6%8E%A7%E5%88%80%E5%85%B7%E6%B3%95%E5%BE%8B%E6%89%8B%E6%AE%B5%E7%A7%91%E6%8A%80%20%E8%83%9C%E5%A4%9A%E8%B4%9F%E5%B0%91%E8%80%83%E8%99%91%E5%88%B0%E5%B0%B1%E5%88%86%E6%89%8B%E4%BA%86%E7%A7%91%E6%8A%80%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%E5%A1%91%E6%96%99%E8%A2%8B%E5%92%96%E5%95%A1%E6%9C%BA%E5%A1%91%E6%96%99%E8%A2%8B%E5%8F%AF%E8%A7%86%E5%AF%B9%E8%AE%B2%E5%8F%91%E4%BA%86%E5%B0%BD%E5%BF%ABslkj%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3Esdflksjdfaskjfowieruowieruo9iaosodifusodfui%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3ECollapseItem%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3ECollapseItem%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20name%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22item4%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20title%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%E6%A0%87%E9%A2%984%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%E7%9B%B4%E6%8E%A5%E5%86%99%E4%BA%9B%E7%AE%80%E5%8D%95%E5%86%85%E5%AE%B9%20-%20%E5%8F%8C%E8%81%94%E5%8D%95%E6%8E%A7%E7%A6%8F%E5%BB%BA%E7%9C%81%E4%B8%A4%E5%9C%B0%E5%88%86%E5%B1%85%E7%AB%8B%E5%8D%A1%E6%89%8B%E6%9C%BA%E5%8D%A1%E4%BA%86%E5%8F%8C%E8%81%94%E5%8D%95%E6%8E%A7%E5%B0%B1%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3ECollapseItem%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3ECollapse%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3EopenValue%3A%20%7B%7B%20openValue%20%7D%7D%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%20'vue'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20Collapse%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%20'%40%2Fcomponents%2FCollapse%2FCollapse.vue'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20CollapseItem%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%20'%40%2Fcomponents%2FCollapse%2FCollapseItem.vue'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20openValue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%5B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'item1'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%5D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"D:\\github\\my-element-plus\\docs\\demo\\Collpase\\Basic.vue",relativePath:"../demo/Collpase/Basic.vue"},{default:A(()=>[n(Y)]),_:1}),G])}}});export{X as __pageData,s2 as default};