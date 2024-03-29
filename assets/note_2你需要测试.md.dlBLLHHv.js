import{_ as i,c as e,o as l,V as t}from"./chunks/framework.8UmiILwc.js";const g=JSON.parse('{"title":"为组件编写测试","description":"为你的组件编写测试","frontmatter":{"title":"为组件编写测试","description":"为你的组件编写测试"},"headers":[],"relativePath":"note/2你需要测试.md","filePath":"note/2你需要测试.md"}'),a={name:"note/2你需要测试.md"},s=t(`<h1 id="编写测试" tabindex="-1">编写测试 <a class="header-anchor" href="#编写测试" aria-label="Permalink to &quot;编写测试&quot;">​</a></h1><p>容易出现的问题</p><ul><li>手动测试，新建一堆不同属性的组件</li><li>肉眼观测，或是浏览器手动点击，刷新</li><li>更新代码，要再次进行手动测试</li></ul><blockquote><p>项目需要测试吗?</p></blockquote><p>为了代码的健壮和可维护性，我们需要编写测试代码</p><h2 id="tdd的开发方式" tabindex="-1">TDD的开发方式 <a class="header-anchor" href="#tdd的开发方式" aria-label="Permalink to &quot;TDD的开发方式&quot;">​</a></h2><p>TDD(Test-Driven Development)测试驱动开发，是一种软件开发方法，它强调在编写代码之前先编写测试用例，然后通过不断编写和运行测试用例来驱动代码的开发。</p><p>步骤：</p><ol><li>编写测试用例</li><li>运行测试用例</li><li>编写代码：根据测试用例的要求，编写代码并实现功能</li><li>运行测试用例</li><li>重构代码（可选）</li><li>重复以上步骤</li></ol><p>优点：</p><ul><li>自动化完成流程，保证代码的运行结果</li><li>更早发现 bug</li><li>重构和升级更加容易和可靠</li></ul><h2 id="组件化框架-react、vue-非常适合写单元测试" tabindex="-1">组件化框架（React、Vue）非常适合写单元测试 <a class="header-anchor" href="#组件化框架-react、vue-非常适合写单元测试" aria-label="Permalink to &quot;组件化框架（React、Vue）非常适合写单元测试&quot;">​</a></h2><ul><li>组件化，独立单元，互不影响</li><li>属性和界面的映射，固定输入，固定输出</li><li>单向数据流</li><li>状态管理工具的 store 可以单独写测试</li></ul><h2 id="测试框架" tabindex="-1">测试框架 <a class="header-anchor" href="#测试框架" aria-label="Permalink to &quot;测试框架&quot;">​</a></h2><p>需要选取两种测试工具</p><ul><li>通用的测试框架 <ul><li>Mocha</li><li>Jest</li><li>Vitest</li></ul></li><li>针对对应库的测试库</li></ul><p>文档地址 <a href="https://vitest.dev/guide/why.html" target="_blank" rel="noreferrer">https://vitest.dev/guide/why.html</a></p><h2 id="vitest-优点" tabindex="-1">Vitest 优点 <a class="header-anchor" href="#vitest-优点" aria-label="Permalink to &quot;Vitest 优点&quot;">​</a></h2><ul><li>基于 Vite 而生，和 Vite 完美配合，共享一个生态系统</li><li>兼容 Jest 语法</li><li>HMR for tests</li><li>ESM、TS、JSX 原生支持</li></ul><h3 id="测试框架的几大功能" tabindex="-1">测试框架的几大功能 <a class="header-anchor" href="#测试框架的几大功能" aria-label="Permalink to &quot;测试框架的几大功能&quot;">​</a></h3><ul><li>断言 <ul><li>内置 Chai 以及兼容 Jest expect 的 API</li></ul></li><li>Mock</li><li>代码覆盖率 <ul><li><a href="https://vitest.dev/guide/mocking.html" target="_blank" rel="noreferrer">https://vitest.dev/guide/mocking.html</a></li><li>可以使用 c8 或者 istanbul</li></ul></li><li>Snapshot <ul><li>兼容 Jest</li></ul></li></ul><h2 id="基于-vue-的测试工具" tabindex="-1">基于 Vue 的测试工具 <a class="header-anchor" href="#基于-vue-的测试工具" aria-label="Permalink to &quot;基于 Vue 的测试工具&quot;">​</a></h2><ul><li>vue-test-utils <a href="https://test-utils.vuejs.org/guide/" target="_blank" rel="noreferrer">https://test-utils.vuejs.org/guide/</a></li><li>vue-testing-library <a href="https://testing-library.com/docs/vue-testing-library/intro" target="_blank" rel="noreferrer">https://testing-library.com/docs/vue-testing-library/intro</a></li><li>Vitest 的配置文件 <a href="https://vitest.dev/config" target="_blank" rel="noreferrer">https://vitest.dev/config</a></li></ul><h3 id="vue-test-utils" tabindex="-1">vue-test-utils <a class="header-anchor" href="#vue-test-utils" aria-label="Permalink to &quot;vue-test-utils&quot;">​</a></h3><ul><li>挂载 mount <ul><li>修改vitest配置，支持DOM</li><li>environment: &#39;jsdom&#39;</li></ul></li><li>query <ul><li>find() / get()</li><li>findAll()</li><li>findComponent()</li></ul></li><li>内容 / 属性 <ul><li>text()</li><li>html()</li><li>classes()</li><li>attributes()</li></ul></li><li>stub 模拟子组件</li></ul><h2 id="vnode相关" tabindex="-1">VNode相关 <a class="header-anchor" href="#vnode相关" aria-label="Permalink to &quot;VNode相关&quot;">​</a></h2><p>在测试一些带有 slots 的组件时需要用到 <a href="https://cn.vuejs.org/guide/extras/rendering-mechanism.html" target="_blank" rel="noreferrer">https://cn.vuejs.org/guide/extras/rendering-mechanism.html</a></p><p>Virtual DOM 是一种虚拟的，保存在内存中的数据结构，代表 UI 表现，和真实 DOM 节点保持同步。</p><h3 id="render-pipeline" tabindex="-1">Render pipeline <a class="header-anchor" href="#render-pipeline" aria-label="Permalink to &quot;Render pipeline&quot;">​</a></h3><ul><li>compile Vue 组件的 template 会被编译成 render function, 一个可以返回 VDOM 树的函数</li><li>Mount 执行 render function 遍历虚拟 DOM 树，生成真正的 DOM 节点</li><li>Patch 当组件中任何响应式对象依赖发生变化时，执行更新操作。生成新的虚拟节点树。Vue 内部会遍历新的虚拟节点树，和旧树做对比，然后执行必要的更新操作</li></ul><p>优点：</p><ul><li>可以使用一种更方便的方式，不必修改真实的 DOM</li><li>更新效率更高，计算需要最小化操作，并完成更新</li></ul><h3 id="创建-vnode" tabindex="-1">创建 VNode <a class="header-anchor" href="#创建-vnode" aria-label="Permalink to &quot;创建 VNode&quot;">​</a></h3><p><a href="https://cn.vuejs.org/guide/extras/render-function.html" target="_blank" rel="noreferrer">https://cn.vuejs.org/guide/extras/render-function.html</a></p><p>h 和 createVnode 都可以创建 vnode, h 是 hyperscript 的缩写（意为 JavaScript that produces HTML），很多 VDOM 的实现都使用这个函数名称。还有个就是 createVnode，名称更形象，两者用法是一样的</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { h, createVnode } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vnode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// type</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, class: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// props</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // children</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="运用vitest提供的钩子函数增加效率" tabindex="-1">运用vitest提供的钩子函数增加效率 <a class="header-anchor" href="#运用vitest提供的钩子函数增加效率" aria-label="Permalink to &quot;运用vitest提供的钩子函数增加效率&quot;">​</a></h3><ul><li>beforeAll 所有测试用例开始前的钩子</li><li>beforeEach 每个测试用例开始之前的钩子</li><li>afterAll 所有测试用例执行完后</li><li>afterEach 每个测试用例执行完后</li></ul><p>可配合 test.skip test.only 等修饰符</p>`,39),n=[s];function r(h,o,p,d,u,c){return l(),e("div",null,n)}const v=i(a,[["render",r]]);export{g as __pageData,v as default};
