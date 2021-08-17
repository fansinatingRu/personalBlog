<template>
  <div class="content uses">
    <h1>What I use</h1>


    <h2>
      <fa-icon :icon="['fad', 'code']"/>
      Coding
    </h2>
    <ul>
      <li>
        <a href="https://www.jetbrains.com/pycharm" rel="noreferrer" target="_blank">pycharm</a>
        <span>// For my python coding</span>
      </li>
      <li>
        <a href="https://www.jetbrains.com/webstorm/" rel="noreferrer" target="_blank">webstorm</a>
        <span>// Be honest i really don't like vs code like the most web developer does,jetbrains product is more powerful,efficient</span>
      </li>
      <li>
        <a href="https://www.google.com/chrome/" rel="noreferrer" target="_blank">Chrome</a>
        <span>// The one and only</span>
      </li>
      <li>
        <a href="https://www.docker.com" rel="noreferrer" target="_blank">Docker</a>
        <span>// I'm a really big fan of Docker</span>
      </li>
      ...
    </ul>


    <h2>
      <fa-icon :icon="['fad', 'tools']"/>
      Gear
    </h2>
    <ul>
      <li>
        PC
        <span>Mac Mini (M1)</span>
      </li>
      <li>
        Screen
        <span> AOC(4k)  </span>
      </li>
      <li>
        Keyboard
        <span>magic KeyBoard(apple)</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'What I use',
        meta: [
          { hid: 'description', name: 'description', content: 'A little list about what I use for my daily work, side projects, and for my YouTube videos' },
          { hid: 'og:title', name: 'og:title', content: 'webnoob - What I use' },
          { hid: 'og:description', name: 'og:description', content: 'A little list about what I use for my daily work, side projects, and for my YouTube videos' },
          { hid: 'og:type', name: 'og:type', content: 'blog' },
        ]
      }
    },
    transition: {
      name: 'fade',
      mode: 'out-in'
    }
  }
</script>
