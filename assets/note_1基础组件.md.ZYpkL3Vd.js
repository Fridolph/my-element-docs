import{_ as i,c as s,o as a,V as l}from"./chunks/framework.mZLjJuj4.js";const g=JSON.parse('{"title":"组件 | V-Component","description":"相关思考之组件编写","frontmatter":{"title":"组件 | V-Component","description":"相关思考之组件编写"},"headers":[],"relativePath":"note/1基础组件.md","filePath":"note/1基础组件.md"}'),e={name:"note/1基础组件.md"},t=l(`<h1 id="组件-基础组件" tabindex="-1">组件 （基础组件） <a class="header-anchor" href="#组件-基础组件" aria-label="Permalink to &quot;组件 （基础组件）&quot;">​</a></h1><p>编写组件时的相关思考，遇到问题的解决方法等</p><h2 id="button-按钮" tabindex="-1">Button - 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button - 按钮&quot;">​</a></h2><h3 id="需求分析" tabindex="-1">需求分析 <a class="header-anchor" href="#需求分析" aria-label="Permalink to &quot;需求分析&quot;">​</a></h3><p>Button 组件大部分关注样式，没有其他交互。可在其上自行绑定事件</p><p>根据分析，暂得以下具体属性列表：（button.type.ts）</p><ul><li>type 样式</li><li>plain</li><li>round</li><li>circle</li><li>disabled</li><li>icon</li><li>loading</li></ul><h3 id="确定项目文件结构" tabindex="-1">确定项目文件结构 <a class="header-anchor" href="#确定项目文件结构" aria-label="Permalink to &quot;确定项目文件结构&quot;">​</a></h3><ul><li>从简单入手</li><li>没有必要过度设计</li><li>Button(components) 后续组件都参照这个文件结构来 <ul><li>Button.vue</li><li>style.css</li><li>types.ts</li><li>Button.test.ts</li></ul></li></ul><h3 id="其他问题及思考" tabindex="-1">其他问题及思考 <a class="header-anchor" href="#其他问题及思考" aria-label="Permalink to &quot;其他问题及思考&quot;">​</a></h3><blockquote><p>不能导入外部文件类型</p></blockquote><p><a href="https://cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props" target="_blank" rel="noreferrer">https://cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props</a></p><blockquote><p>组件属性需要单独写一个 script</p></blockquote><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  defineOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;MyButton&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="collapse-折叠面板" tabindex="-1">Collapse - 折叠面板 <a class="header-anchor" href="#collapse-折叠面板" aria-label="Permalink to &quot;Collapse - 折叠面板&quot;">​</a></h2><p>简易的折叠面板</p><h3 id="需求分析-1" tabindex="-1">需求分析 <a class="header-anchor" href="#需求分析-1" aria-label="Permalink to &quot;需求分析&quot;">​</a></h3><ul><li>静态展示</li><li>提供简单交互</li><li>多种解决方案</li><li>涉及一些新的知识点 <ul><li>Provide / Inject</li><li>v-model 实现</li><li>slots</li><li>Transition</li></ul></li></ul><h3 id="了解功能" tabindex="-1">了解功能 <a class="header-anchor" href="#了解功能" aria-label="Permalink to &quot;了解功能&quot;">​</a></h3><ul><li>展示多个 item，有标题和内容两部分</li><li>点击标题可以关闭和展示内容</li><li>可选手风琴模式</li></ul><p>注意</p><p>当使用 defineOptions，设置<code>inheritAttrs: false</code>时，要配对使用 v-bind=&quot;$attrs&quot; 这样不会丢一些透传属性</p><h2 id="message-消息" tabindex="-1">Message - 消息 <a class="header-anchor" href="#message-消息" aria-label="Permalink to &quot;Message - 消息&quot;">​</a></h2><p>可直接用于展示，或用 API 操作新建实例展示</p><h3 id="将组件-render-到-dom-节点上" tabindex="-1">将组件 Render 到 DOM 节点上 <a class="header-anchor" href="#将组件-render-到-dom-节点上" aria-label="Permalink to &quot;将组件 Render 到 DOM 节点上&quot;">​</a></h3><p>使用 createApp 的弊端</p><ul><li>该方法过于&quot;重&quot;，它返回了一个应用的实例，而我们需另辟更轻量级的解决路径</li></ul><p>综上，采用 render 函数</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 一个vue内部的神奇函数，文档中没有特别说明</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 它负责将一个vnode渲染到DOM节点上</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是一个轻量级的解决方案</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { render } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Vnode, DOM节点)</span></span></code></pre></div><h3 id="组件开发" tabindex="-1">组件开发 <a class="header-anchor" href="#组件开发" aria-label="Permalink to &quot;组件开发&quot;">​</a></h3><h3 id="使用函数式的方式创建组件" tabindex="-1">使用函数式的方式创建组件 <a class="header-anchor" href="#使用函数式的方式创建组件" aria-label="Permalink to &quot;使用函数式的方式创建组件&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> container</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vnode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(MessageConstructor, props)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vnode, container)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(container.firstElementChild</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="销毁组件实例" tabindex="-1">销毁组件实例 <a class="header-anchor" href="#销毁组件实例" aria-label="Permalink to &quot;销毁组件实例&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, container)</span></span></code></pre></div><h3 id="组件动态构造并且传入属性" tabindex="-1">组件动态构造并且传入属性 <a class="header-anchor" href="#组件动态构造并且传入属性" aria-label="Permalink to &quot;组件动态构造并且传入属性&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> newProps</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  onDestory: destory,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vnode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(MessageConstructor, newProps)</span></span></code></pre></div><h3 id="其他方式" tabindex="-1">其他方式 <a class="header-anchor" href="#其他方式" aria-label="Permalink to &quot;其他方式&quot;">​</a></h3><ul><li>使用一个数组保存组件实例信息，并且添加对应的函数对数组进行处理</li><li>计算偏移量 <ul><li>top: lastBottomOffset(上一个实例留下的底部位置的偏移) + offset</li><li>为下一个实例预留 bottomOffset: top + height</li><li>messageRef.value!.getBoundingClientRect().height</li><li>使用 defineExpose 暴露对应的属性或方法</li></ul></li><li>在函数中获取偏移量</li></ul><h2 id="tooltip-提示" tabindex="-1">Tooltip - 提示 <a class="header-anchor" href="#tooltip-提示" aria-label="Permalink to &quot;Tooltip - 提示&quot;">​</a></h2><h3 id="功能分析" tabindex="-1">功能分析 <a class="header-anchor" href="#功能分析" aria-label="Permalink to &quot;功能分析&quot;">​</a></h3><ul><li>基本功能，两块区域 <ul><li>触发区域</li><li>展示区域</li></ul></li><li>触发方式 <ul><li>点击</li><li>hover</li><li>手动</li></ul></li></ul><p>重点就是触发区，发生特定事件时，展示区的内容将隐藏</p><h3 id="开发" tabindex="-1">开发 <a class="header-anchor" href="#开发" aria-label="Permalink to &quot;开发&quot;">​</a></h3><ul><li>基础功能实现 （使用 popper.js 来完成位置的展示</li><li>支持 click / hover 两种触发方式</li><li>支持 clickoutside 时的隐藏</li><li>支持手动触发</li><li>支持 popper 参数</li><li>过渡效果</li><li>支持延迟显示</li><li>其他样式处理</li></ul>`,44),n=[t];function h(p,o,r,k,d,c){return a(),s("div",null,n)}const E=i(e,[["render",h]]);export{g as __pageData,E as default};
