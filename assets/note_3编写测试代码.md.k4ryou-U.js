import{_ as s,c as i,o as a,V as e}from"./chunks/framework.mZLjJuj4.js";const c=JSON.parse('{"title":"你需要测试","description":"你需要测试","frontmatter":{"title":"你需要测试","description":"你需要测试"},"headers":[],"relativePath":"note/3编写测试代码.md","filePath":"note/3编写测试代码.md"}'),t={name:"note/3编写测试代码.md"},l=e(`<h1 id="编写测试" tabindex="-1">编写测试 <a class="header-anchor" href="#编写测试" aria-label="Permalink to &quot;编写测试&quot;">​</a></h1><p>文件以 xxx-test.(js|ts)x? 的格式</p><h2 id="基于-vue-的测试工具" tabindex="-1">基于 Vue 的测试工具 <a class="header-anchor" href="#基于-vue-的测试工具" aria-label="Permalink to &quot;基于 Vue 的测试工具&quot;">​</a></h2><ul><li>vue-test-utils <a href="https://test-utils.vuejs.org/guide/" target="_blank" rel="noreferrer">https://test-utils.vuejs.org/guide/</a></li><li>vue-testing-library <a href="https://testing-library.com/docs/vue-testing-library/intro" target="_blank" rel="noreferrer">https://testing-library.com/docs/vue-testing-library/intro</a></li><li>Vitest 的配置文件 <a href="https://vitest.dev/config" target="_blank" rel="noreferrer">https://vitest.dev/config</a></li></ul><h3 id="vue-test-utils" tabindex="-1">vue-test-utils <a class="header-anchor" href="#vue-test-utils" aria-label="Permalink to &quot;vue-test-utils&quot;">​</a></h3><ul><li>挂载 mount <ul><li>修改vitest配置，支持DOM</li><li>environment: &#39;jsdom&#39;</li></ul></li><li>query <ul><li>find() / get()</li><li>findAll()</li><li>findComponent()</li></ul></li><li>内容 / 属性 <ul><li>text()</li><li>html()</li><li>classes()</li><li>attributes()</li></ul></li><li>stub 模拟子组件</li></ul><h2 id="vnode相关" tabindex="-1">VNode相关 <a class="header-anchor" href="#vnode相关" aria-label="Permalink to &quot;VNode相关&quot;">​</a></h2><p>在测试一些带有 slots 的组件时需要用到 <a href="https://cn.vuejs.org/guide/extras/rendering-mechanism.html" target="_blank" rel="noreferrer">https://cn.vuejs.org/guide/extras/rendering-mechanism.html</a></p><p>Virtual DOM 是一种虚拟的，保存在内存中的数据结构，代表 UI 表现，和真实 DOM 节点保持同步。</p><h3 id="render-pipeline" tabindex="-1">Render pipeline <a class="header-anchor" href="#render-pipeline" aria-label="Permalink to &quot;Render pipeline&quot;">​</a></h3><ul><li>compile Vue 组件的 template 会被编译成 render function, 一个可以返回 VDOM 树的函数</li><li>Mount 执行 render function 遍历虚拟 DOM 树，生成真正的 DOM 节点</li><li>Patch 当组件中任何响应式对象依赖发生变化时，执行更新操作。生成新的虚拟节点树。Vue 内部会遍历新的虚拟节点树，和旧树做对比，然后执行必要的更新操作</li></ul><p>优点：</p><ul><li>可以使用一种更方便的方式，不必修改真实的 DOM</li><li>更新效率更高，计算需要最小化操作，并完成更新</li></ul><h3 id="创建-vnode" tabindex="-1">创建 VNode <a class="header-anchor" href="#创建-vnode" aria-label="Permalink to &quot;创建 VNode&quot;">​</a></h3><p><a href="https://cn.vuejs.org/guide/extras/render-function.html" target="_blank" rel="noreferrer">https://cn.vuejs.org/guide/extras/render-function.html</a></p><p>h 和 createVnode 都可以创建 vnode, h 是 hyperscript 的缩写（意为 JavaScript that produces HTML），很多 VDOM 的实现都使用这个函数名称。还有个就是 createVnode，名称更形象，两者用法是一样的</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { h, createVnode } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vnode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// type</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, class: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// props</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // children</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="运用vitest提供的钩子函数增加效率" tabindex="-1">运用vitest提供的钩子函数增加效率 <a class="header-anchor" href="#运用vitest提供的钩子函数增加效率" aria-label="Permalink to &quot;运用vitest提供的钩子函数增加效率&quot;">​</a></h3><ul><li>beforeAll 所有测试用例开始前的钩子</li><li>beforeEach 每个测试用例开始之前的钩子</li><li>afterAll 所有测试用例执行完后</li><li>afterEach 每个测试用例执行完后</li></ul><p>可配合 test.skip test.only 等修饰符</p><h2 id="测试vue表单" tabindex="-1">测试Vue表单 <a class="header-anchor" href="#测试vue表单" aria-label="Permalink to &quot;测试Vue表单&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;modelValue should be updated&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> wrapper</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Editor, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    props: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      modelValue: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;initialText&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;onUpdate:modelValue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> wrapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        modelValue: e</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> wrapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;input&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(wrapper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;modelValue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div>`,22),n=[l];function h(p,r,k,d,E,o){return a(),i("div",null,n)}const u=s(t,[["render",h]]);export{c as __pageData,u as default};
